import { FaArrowLeft, FaHome } from "react-icons/fa";

export default function ErrorPage({ 
    errorCode = 404, 
    errorTitle = "Page Not Found", 
    errorDescription = "Sorry, the page you are looking for could not be found.",
    errorImage = null
}) {
    const getErrorColor = () => {
        switch (errorCode) {
            case 400:
                return "bg-yellow-50";
            case 401:
                return "bg-red-50";
            case 403:
                return "bg-orange-50";
            case 404:
                return "bg-blue-50";
            default:
                return "bg-gray-50";
        }
    };

    const getErrorIconColor = () => {
        switch (errorCode) {
            case 400:
                return "text-yellow-500";
            case 401:
                return "text-red-500";
            case 403:
                return "text-orange-500";
            case 404:
                return "text-blue-500";
            default:
                return "text-gray-500";
        }
    };

    return (
        <div id="error-page-container" className={`${getErrorColor()} min-h-screen flex items-center justify-center p-4`}>
            <div id="error-content" className="text-center max-w-2xl">
                {/* Error Code */}
                <div id="error-code" className={`text-9xl font-bold ${getErrorIconColor()} mb-4`}>
                    {errorCode}
                </div>

                {/* Error Image */}
                {errorImage && (
                    <div id="error-image-container" className="mb-8 flex justify-center">
                        <img
                            id="error-image"
                            src={errorImage}
                            alt={`Error ${errorCode}`}
                            className="max-w-xs md:max-w-md object-contain"
                        />
                    </div>
                )}

                {/* Error Title */}
                <h1 id="error-title" className="text-4xl font-bold text-gray-800 mb-4">
                    {errorTitle}
                </h1>

                {/* Error Description */}
                <p id="error-description" className="text-xl text-gray-600 mb-8">
                    {errorDescription}
                </p>

                {/* Action Buttons */}
                <div id="error-actions" className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        id="error-back-button"
                        onClick={() => window.history.back()}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                    >
                        <FaArrowLeft />
                        Go Back
                    </button>
                    <button
                        id="error-home-button"
                        onClick={() => (window.location.href = "/")}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-hijau text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                        <FaHome />
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
}
