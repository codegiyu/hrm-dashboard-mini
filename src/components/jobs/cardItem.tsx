import React from "react";
import { jobs } from "@/constants/recentlyaddedjobsdata";

export const CardItem: React.FC = () => {
  return (
    <div className="h-full flex flex-col gap-[10px]">
      {jobs.map((item, index: number) => (
        <div
          key={index}
          className="bg-[#F9F9F9] flex items-center rounded-[10px] gap-[10px] p-[10px]"
        >
          <div className="bg-white rounded-full aspect-square">
            <img src={item.logo} alt="img" className="object-contain" />
          </div>
          <div>
            <h4 className="font-medium text-base">{item.title}</h4>
            <p className="font-normal text-xs text-[#8F8F8F]">
              {item.location} - {item.datePosted}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
