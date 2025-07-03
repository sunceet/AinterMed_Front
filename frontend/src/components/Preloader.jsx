// "use client";
// import React from "react";

// const Preloader = ({ hidden }) => {
//   return (
//     <div
//       className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${
//         hidden ? "opacity-0 pointer-events-none" : "opacity-100"
//       }`}
//     >
//       <svg
//         width="48"
//         height="48"
//         viewBox="0 0 32 32"
//         fill="none"
//         stroke="#438EFF"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <circle
//           cx="16"
//           cy="16"
//           r="12"
//           stroke="#438EFF"
//           strokeWidth="4"
//           strokeLinecap="round"
//           opacity="0.2"
//         />
//         <path
//           d="M28 16a12 12 0 1 0-12 12"
//           stroke="#438EFF"
//           strokeWidth="4"
//           strokeLinecap="round"
//         >
//           <animateTransform
//             attributeName="transform"
//             type="rotate"
//             from="0 16 16"
//             to="360 16 16"
//             dur="0.9s"
//             repeatCount="indefinite"
//           />
//         </path>
//       </svg>
//     </div>
//   );
// };

// export default Preloader;
