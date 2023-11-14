// import React from "react";
// // import React, { Component } from "react";
// import Slider from "react-slick";

// function Testimonials() {
//   var settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     initialSlide: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 700,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   // return (
//   {
//     /* export default class Responsive extends Component { */
//   }
//   {
//     /* render() { */
//   }
//   return (
//     // <div>
//       <div className="relative top-9 mb-9">
//         <h2> Responsive </h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1kslfdslkdjslkdslkdmsdkm</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3 Lorem ipsum dolor sit amet.</h3>
//           </div>
//           <div>
//             <h3>4 Lorem ipsum dolor sit amet.</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet nemo dolor et ad laboriosam impedit ducimus rerum voluptates, suscipit labore neque eveniet, iusto architecto error, quaerat ipsam laudantium debitis tenetur.</h3>
//           </div>
//           <div>
//             <h3>7oijkjklkkljlkjlkkjkljkljlk</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div>
//         </Slider>
//       </div>
//   );
// }

// export default Testimonials;

// // let testimonials = [
// //   {
// //     name: "Scott V.",
// //     img: "https://www.junglescout.com/wp-content/uploads/2023/07/scott-v-profile@2x.png",
// //     comment:
// //       "“Jungle Scout is the ONE tool I can not live without. There’s ways to use it that simply blow you away once you realize the power of what they can do for your business.”",
// //   },
// //   {
// //     name: "Ronny C.",
// //     img: "https://www.junglescout.com/wp-content/uploads/2023/07/Generic-Avatar.jpg",
// //     comment:
// //       "““Jungle Scout is irreplaceable when researching and trying to understand the market for your product. The sales and tracking tools and educational resources make my work world easier, and my selections educated.”",
// //   },
// //   {
// //     name: "Scott V.",
// //     img: "https://www.junglescout.com/wp-content/uploads/2023/07/scott-v-profile@2x.png",
// //     comment:
// //       "“Jungle Scout is the ONE tool I can not live without. There’s ways to use it that simply blow you away once you realize the power of what they can do for your business.”",
// //   },
// //   {
// //     name: "Scott V.",
// //     img: "https://www.junglescout.com/wp-content/uploads/2023/07/scott-v-profile@2x.png",
// //     comment:
// //       "“Jungle Scout is the ONE tool I can not live without. There’s ways to use it that simply blow you away once you realize the power of what they can do for your business.”",
// //   },
// // ];

import React, { Component } from "react";
import Slider from "react-slick";

export default class Testimonials extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

// 0eec352f71b84b194ca942f09758d2c844b14f98