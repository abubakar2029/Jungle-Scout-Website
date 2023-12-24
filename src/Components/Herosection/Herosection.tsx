// import React from "react";

// function Herosection() {
//   return (
//     <section
//       className="bg-cover"
//       style={{
//         backgroundImage: `url("https://www.junglescout.com/wp-content/uploads/2022/03/hp-hero-background-graph-desktop-1.5x.jpg")`,
//       }}
//     >
//       {/* PARENT-DIV */}
//       <div className="px-3 flex max-md:flex-col pt-14 mx-auto xl:max-w-[1200px] min-[992px]:max-w-[992px] md:max-w-[720px] sm:max-w-xl w-full relative">
//         {/* content-section */}
//         <div className="text-left md:max-w-[50%] md:basis-1/2 w-full max-md:absolute max-md:z-10 space-y-80">
//           <div className="max-md:pr-6 max-sm:pr-2">
//             <h1 className="text-[24px] sm:text-32 lg:text-2.5xl !font-extrabold md:mb-4 mb-3">
//               Start and scale your ecommerce business
//             </h1>
//             <p className="text-[20px] font-normal">
//               Jungle Scout’s essential data and tools help you win on Amazon and
//               beyond.
//             </p>
//           </div>
//           {/* Card */}
//           <div className="flex justify-center">
//             <div className="bg-white p-4 shadow-[0_0_15px-rgba(0,0,0,0.2)] rounded-sm flex justify-center">
//               <p className="mb-4 text-[20px]">
//                 We have solutions for all types of sellers. <br />
//                 <strong className="font-extrabold">I am here to…</strong>
//               </p>
//               <div>
//                 {/* yahan map chla ga */}
//                 <div
//                   className={`flex justify-between px-2.5 items-center py-3 rounded-sm border transition-all `}
//                 >
//                   <p></p>
//                   <i className="material-icons">arrow_forward</i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Hero-Img */}
//         <div className="px-3 md:pt-6 pt-36 md:max-w-[50%] md:basis-1/2 w-full">
//           <img
//             src="https://www.junglescout.com/wp-content/uploads/2022/03/lifestyle-asset_1x.png"
//             alt=""
//             width={705}
//             height={497}
//             className="!min-w-[705px] !min-h-[497px]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Herosection;

import { Link } from "react-router-dom";
import React from "react";

function HeroSection(props: any) {  
  return (
    <section
      className="bg-cover"
      style={{
        overflowX: 'hidden',
        height: 'auto',
        backgroundImage: `url("https://www.junglescout.com/wp-content/uploads/2022/03/hp-hero-background-graph-desktop-1.5x.jpg")`,
      }}
    >
      {/* PARENT-DIV */}
      <div
        className="mb-8 flex max-md:flex-col pt-14 mx-auto xl:max-w-[1200px] min-[992px]:max-w-[992px] md:max-w-[720px] sm:max-w-xl w-full relative"
      >
        {/* content-section */}
        <div className="text-left px-3 md:max-w-[50%] md:basis-1/2 w-full max-md:absolute max-md:z-10 speace-y-80">
          <div className="max-md:pr-6 max-sm:pr-2">
            <h1 className="text-[24px] sm:text-32 lg:text-2.5xl !font-extrabold md:mb-4 mb-3">
              Start and scale your ecommerce business
            </h1>
            <p className="text-[20px] font-normal">
              Jungle Scout’s essential data and tools help you win on Amazon and
              beyond.
            </p>
          </div>
          {/* Card */}
          <div className="shadow-xl mt-8  max-md:w-[100%] w-[80%] max-md:mt-28     ">
            <div className="bg-white p-6 max-sm:p-4 rounded shadow-[0_0_15px_rgba(0,0,0,0.2)]  ">
              <p className="mb-6 text-[20px]">
                We have solutions for all types of sellers. <br />
                <strong className="font-extrabold">I am here to…</strong>
              </p>
              
              {props.linkArr.map((item:any,index:number) => {
                return (
                  <Link to={item.href}
                    // class="animate-hero-section" ki styling index.tsx ma ha
                    className={`animate-hero-section flex justify-between px-3 mt-4 items-center py-4 rounded 
                    text-orange-600 font-bold border border-orange-600 hover:bg-orange-100 hover:-ml-2 `}
                  key={index}>
                    <p>{ item.name }</p>
                    <i className="material-icons">arrow_forward</i>
                  </Link>
                );
              })}

            </div>
          </div>
        </div>

        {/* Hero-Img */}
        <div

          className="px-3 md:pt-6 pt-36 md:max-w-[50%] md:basis-1/2 w-full"
        >
          <img
            src="https://www.junglescout.com/wp-content/uploads/2022/03/lifestyle-asset_1x.png"
            alt=""
            className=" mx-auto min-w-[705px]"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;