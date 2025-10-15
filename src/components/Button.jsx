export default function Button({
  lable,
  className = "",
  type = "button",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-blue-800 text-white px-3 py-3 rounded ${className}`}
    >
      {lable}
    </button>
  );
}
