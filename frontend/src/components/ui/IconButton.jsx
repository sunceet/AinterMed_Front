// components/ui/IconButton.jsx
const IconButton = ({ children, onClick, className = "w-12 h-12" }) => (
  <button
    onClick={onClick}
    className={`${className} rounded-full bg-black flex items-center justify-center hover:opacity-100 transition cursor-pointer`}
  >
    {children}
  </button>
);

export default IconButton;
