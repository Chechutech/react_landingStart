import React from 'react'

function OurWorkCard({ description, title, fontColor, img }) {
  
    return (
      
        <div className="flex flex-col items-center justify-beetween bg-white p-10 gap-2 rounded-[30px] shadow-lg h-full ">
          <h4 className={`text-${fontColor} font-bold  text-3xl`}>{title}</h4>
          <p className="flex-1 text-base font-circular text-center py-4 text-primaryText">{description}</p>
          <img src={img} alt={title} className="w-full h-48 md:h-64 object-contain"/>
          <button type="button" className="py-4 px-10 border border-solid border-[#46B8C8] rounded-full cursor-pointer font-bold text-[#46B8C8] text-lg">More</button>
        </div>
      
    );
  }
  
  export default OurWorkCard;