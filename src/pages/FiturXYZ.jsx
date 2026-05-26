import PageHeader from "../components/PageHeader";

export default function FiturXYZ() {
    return (
        <div id="fitur-xyz-page" className="mt-6">
            <PageHeader title="Fitur XYZ" breadcrumbs={["Dashboard", "Fitur XYZ"]} />
                <p className="text-lg text-gray-600">Ini Halaman Fitur Xyz</p>
        </div>
    );
}
