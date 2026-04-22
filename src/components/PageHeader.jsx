export default function PageHeader({ title = "Dashboard", breadcrumbs = ["Home", "Home Detail", "Home Very Detail"], children }) {
    return (
        <div id="pageheader-container" className="flex flex-col gap-2 p-4">
            <div id="pageheader-left" className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col">
                    <span id="pageheader-title" className="text-3xl font-semibold">
                        {title}
                    </span>
                    <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2 text-gray-500">
                        {breadcrumbs.map((crumb, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                {index > 0 && <span id="breadcrumb-separator">/</span>}
                                <span>{crumb}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {children && (
                    <div id="pageheader-actions" className="mt-4 sm:mt-0">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}

