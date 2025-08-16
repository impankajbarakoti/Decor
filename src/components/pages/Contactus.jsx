// import React from "react";
// import { Phone } from "lucide-react";
// import c from "../../assets/contact.jpg";
// import ContactForm from "./ContactForm";
// import FollowUs from "../FollowUs";

// const Contactus = () => {
//   return (
//     <div className="min-h-screen bg-stone-100  flex-col md:flex-row">
//       {/* Left Side - Image */}
//       <div className="w-full md:w-1/2 h-64 md:h-screen">
//         <img
//           src={c}
//           alt="Modern minimalist interior design"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Right Side - Contact Content + Form */}
//       <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-16 py-12 md:py-20">
//         <div className="space-y-8 max-w-2xl mx-auto">
//           {/* Heading */}
//           <h1 className="text-3xl sm:text-4xl font-light tracking-[0.2em] text-foreground">
//             CONTACTS
//           </h1>

//           {/* Description */}
//           <p className="text-sm sm:text-base leading-relaxed text-muted-foreground font-light">
//             You'll find home tours, advice and tips, interviews, reviews,
//             postcards from places I love and more – always with a focus on{" "}
//             <span className="text-foreground">minimalism</span>,{" "}
//             <span className="text-foreground">muted colours</span> and{" "}
//             <span className="text-foreground">timeless</span>,{" "}
//             <span className="text-foreground">considered design</span>.
//           </p>

//           {/* Contact Info */}
//           <div className="flex items-center gap-4">
//             <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-amber-100">
//               <Phone className="w-5 h-5 text-accent-foreground transition-colors duration-300 hover:text-yellow-600" />
//             </div>
//             <span className="text-sm text-muted-foreground font-light">
//               Call: 1-800-123-1234
//             </span>
//           </div>
//         </div>
//       </div>
//       <ContactForm />
//       <FollowUs />
//     </div>
//   );
// };

// export default Contactus;

import React from "react";
import { Phone } from "lucide-react";
import c from "../../assets/contact.jpg";
import ContactForm from "./ContactForm";
import FollowUs from "../FollowUs";

const Contactus = () => {
  return (
    <div className="min-h-screen bg-stone-100">
      {/* Wrapper for Image + Right Side Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 h-64 md:h-screen">
          <img
            src={c}
            alt="Modern minimalist interior design"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Contact Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-16 py-12 md:py-20">
          <div className="space-y-8 max-w-2xl mx-auto">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl font-light tracking-[0.2em] text-foreground">
              CONTACTS
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground font-light">
              You'll find home tours, advice and tips, interviews, reviews,
              postcards from places I love and more – always with a focus on{" "}
              <span className="text-foreground">minimalism</span>,{" "}
              <span className="text-foreground">muted colours</span> and{" "}
              <span className="text-foreground">timeless</span>,{" "}
              <span className="text-foreground">considered design</span>.
            </p>

            {/* Contact Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-stone-500 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-amber-100">
                <Phone className="w-5 h-5 text-accent-foreground transition-colors duration-300 hover:text-yellow-600" />
              </div>
              <span className="text-sm text-muted-foreground font-light">
                Call: 1-800-123-1234
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form + Social */}
      <ContactForm />
      <FollowUs />
    </div>
  );
};

export default Contactus;
