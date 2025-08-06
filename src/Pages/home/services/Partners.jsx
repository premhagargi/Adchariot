/* eslint-disable react/prop-types */ 
import React from "react"; 
import { Marquee } from "@/Components/magicui/marquee";  

const partners = [   
  { name: "King Icecream", logo: "Images/Adobe Express - file (1).png", url: "https://kingicecream.com/" },   
  { name: "Adityaa Milk", logo: "Images/Adobe Express - file (2).png", url: "https://www.adityaamilk.com/" },   
  { name: "Tanishq", logo: "Images/tanishq.svg", url: "https://www.tanishq.co.in/" },
  { name: "Caratlane", logo: "Images/caratlane.png", url: "https://www.caratlane.com/" },
  { name: "Royal Ritis", logo: "Images/royal-ritis.png", url: "https://www.instagram.com/royalritisbelgaum/?hl=en" }, // URL not provided
  { name: "Andhra Leaf", logo: "Images/andhra-leaf.png", url: "https://www.instagram.com/andhraleaf/?hl=en" },
  { name: "Snitch", logo: "Images/snitch.webp", url: "https://www.snitch.com/" },
  { name: "Inorbit Mall Hubli", logo: "Images/inorbit-mall-hubli.png", url: "https://www.inorbit.in/hubballi/" },
  { name: "Shree Clothing (Women's Clothing)", logo: "Images/shree.png", url: "https://www.shreelifestyle.com/" }
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
             
      <div className="relative w-full overflow-hidden px-4 md:px-8 lg:px-0 md:max-w-6xl md:mx-auto">
  {/* First row marquee */}
  <Marquee pauseOnHover className="[--duration:15s]">
    {partners.map((partner, index) => (
      <PartnerCard key={`row1-${index}`} {...partner} />
    ))}
  </Marquee>

  {/* Second row marquee (reverse direction) */}
  {/* <Marquee reverse pauseOnHover className="mt-6 [--duration:15s]">
    {partners.map((partner, index) => (
      <PartnerCard key={`row2-${index}`} {...partner} />
    ))}
  </Marquee> */}

  {/* Gradient overlays */}
  <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 lg:bg-gradient-to-r lg:from-[#f4cc08] lg:via-[#f4cc08] lg:to-transparent"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 lg:bg-gradient-to-l lg:from-[#f4cc08] lg:via-[#f4cc08] lg:to-transparent"></div>

</div>


    </div>   
  ); 
};  

export default OurPartners;