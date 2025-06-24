const IconButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="w-12 h-12 bg-black rounded-full flex items-center
               justify-center hover:opacity-100 transition cursor-pointer"
  >
    {children}
  </button>
);

export default IconButton;
