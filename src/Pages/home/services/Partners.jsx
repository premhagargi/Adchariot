/* eslint-disable react/prop-types */ 
import React from "react"; 
import { Marquee } from "@/Components/magicui/marquee";  

const partners = [   
  { name: "King Icecream", logo: "Images/Adobe Express - file (1).png", url: "https://kingicecream.com/" },   
  { name: "Adityaa Milk", logo: "Images/Adobe Express - file (2).png", url: "https://www.adityaamilk.com/" }, 
];  

const PartnerCard = ({ name, logo, url }) => {   
  return (     
    <a        
      href={url}
      target="_blank"        
      rel="noopener noreferrer"       
      className="flex flex-col items-center mx-4 group"     
    >       
      <img         
        src={logo}         
        alt={name}         
        className="w-25 h-24 object-contain group-hover:scale-105 transition-transform duration-300"       
      />
      {/* <span className="mt-2 text-sm text-gray-300 opacity-80 group-hover:opacity-100 group-hover:text-[#ffcc00] transition-all">
        {name}
      </span>      */}
    </a>   
  ); 
};  

const OurPartners = () => {   
  return (     
    <div className="p-6 bg-transparent rounded-lg">       
      <h2 className="text-3xl font-bold text-center mb-3">
        <span className="text-black">Trusted</span> 
        <span className="text-black"> Partnerships</span>
      </h2>
      
      <p className="text-black text-center max-w-2xl mx-auto mb-10">
        Collaborating with industry leaders to deliver cutting-edge advertising solutions. 
        Our strategic partnerships enhance our capabilities and expand your brand's reach.
      </p>
             
      <div className="relative w-full overflow-hidden">         
        {/* First row marquee */}         
        <Marquee pauseOnHover className="[--duration:15s]">           
          {partners.map((partner, index) => (             
            <PartnerCard key={`row1-${index}`} {...partner} />           
          ))}         
        </Marquee>                  
        
        {/* Second row marquee (reverse direction) */}         
        <Marquee reverse pauseOnHover className="mt-6 [--duration:15s]">           
          {partners.map((partner, index) => (             
            <PartnerCard key={`row2-${index}`} {...partner} />           
          ))}         
        </Marquee>                  
        
        {/* Gradient overlays */}         
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 "></div>         
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 "></div>       
      </div>

      {/* <div className="text-center mt-12">
        <a href="/contact" className="text-[#ffcc00] hover:underline text-sm font-medium inline-flex items-center group">
          Become a Partner
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div> */}
    </div>   
  ); 
};  

export default OurPartners;