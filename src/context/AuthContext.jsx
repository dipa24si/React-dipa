import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";
import { AuthContext } from "./authContext";
import { isAdminRole, isMemberRole, normalizeRole } from "../utils/role";

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadProfile = async (userId) => {
    if (!userId) {
      setProfile(null);
      return null;
    }

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (error) {
      setProfile(null);
      return null;
    }

    setProfile(data);
    return data;
  };

  useEffect(() => {
    let active = true;

    const initAuth = async () => {
      const { data } = await supabase.auth.getSession();
      if (!active) return;

      setSession(data.session);
      await loadProfile(data.session?.user?.id);
      setLoading(false);
    };

    initAuth();

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, nextSession) => {
        setSession(nextSession);
        await loadProfile(nextSession?.user?.id);
        setLoading(false);
      }
    );

    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setProfile(null);
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        user: session?.user || null,
        profile,
        role: normalizeRole(profile?.role),
        loading,
        isAdmin: isAdminRole(profile?.role),
        isMember: isMemberRole(profile?.role),
        loadProfile,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
