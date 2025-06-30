const GradientBorderBox = ({ children, className = "" }) => (
  <div
    className={`relative p-[2px] rounded-[30px] xl:rounded-[36px] 
                bg-[conic-gradient(from_0deg,_#437CFF,_#65EDFF,_#437CFF)]
                animate-spin-slow transition-all duration-300
                hover:scale-[1.02] hover:shadow-[0_0_40px_4px_#00A2FF50]`}
  >
    <div
      className={`bg-[#eaf7ff] rounded-[28px] xl:rounded-[34px]  ${className}`}
    >
      {children}
    </div>
  </div>
);

export default GradientBorderBox;
