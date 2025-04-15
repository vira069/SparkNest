// // import React from 'react'
// // import { IoIosArrowRoundForward } from "react-icons/io";

// // //const Hero = () => {
// //   return (
// //     <section className='bg-white overflow-hidden relative'>
// //         <div className="container grid-cols-1 md:grid-cols-2 min-h-[650px]">
// //             {/*Brand Info*/}
// //             <div>
// //                 <h1 className='text-3xl lg:text-3xl font-bold !landing-snug'>Let's kick start your Learning {""}
// //                     <span className='text-blue-600'>Goals</span></h1>
// //                     <div className='flex justify-center md:justify-start'>
// //                         <button className='primary-btn flex items-center gap-2'>Get started
// //                         <IoIosArrowRoundForward className='text-xl group-hover:translate-x-2
// //                         group-hover:rotate-45 duration-300' />
// //                         </button>
// //                     </div>
// //             </div>

// //         </div>
// //     </section>
// //   )
// // }

// // export default Hero;

// import React, { useEffect, useState } from 'react';
// import { IoIosArrowRoundForward } from "react-icons/io";

// const Hero = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsVisible(false);
//       } else {
//         setIsVisible(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className={`bg-transparent relative pt-20 z-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}> {/* Added transition for fade effect */}
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[650px] p-6 relative z-10">
//         {/* Brand Info */}
//         <div>
//           <h1 className='text-3xl lg:text-4xl font-bold leading-snug'>
//             Let's kick start your Learning <span className='text-blue-600'>Goals</span>
//           </h1>
//           <div className='flex justify-center md:justify-start mt-4'>
//             <button className='primary-btn flex items-center gap-2 group'>
//               Get started
//               <IoIosArrowRoundForward className='text-xl transition-transform group-hover:translate-x-2 group-hover:rotate-45 duration-300' />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

