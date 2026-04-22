import ErrorPage from "../components/ErrorPage";

export default function NotFound() {
    return (
        <ErrorPage 
            errorCode={404}
            errorTitle="Page Not Found"
            errorDescription="Sorry, the page you are looking for could not be found or has been removed."
        />
    );
}
