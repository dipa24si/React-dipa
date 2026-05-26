import {
  FaCheck,
  FaExclamationTriangle,
  FaTimes,
  FaInfoCircle,
} from "react-icons/fa";

export default function Alert({ children, type = "info", title = "" }) {
  const types = {
    success: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-800",
      icon: "text-green-600",
      Icon: FaCheck,
    },
    danger: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-800",
      icon: "text-red-600",
      Icon: FaTimes,
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      text: "text-yellow-800",
      icon: "text-yellow-600",
      Icon: FaExclamationTriangle,
    },
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-800",
      icon: "text-blue-600",
      Icon: FaInfoCircle,
    },
  };

  const config = types[type] || types.info;
  const { bg, border, text, icon, Icon } = config;

  return (
    <div className={`${bg} border ${border} rounded-lg p-4 mb-4`}>
      <div className="flex items-start gap-3">
        <Icon className={`${icon} text-xl mt-1 flex-shrink-0`} />
        <div className="flex-1">
          {title && <h3 className={`${text} font-semibold mb-1`}>{title}</h3>}
          <p className={`${text}`}>{children}</p>
        </div>
      </div>
    </div>
  );
}
