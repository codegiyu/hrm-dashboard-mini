import Activitydiv from "./Activitydiv";
import { activityData } from "../constants/activitydata";
import { useState,useEffect } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";



export const ActivityFeed = () => {

  const [selectedStatus, setSelectedStatus] = useState("");
  const [filteredData, setFilteredData] = useState(activityData);
   useEffect(() => {
  if (selectedStatus === "" || selectedStatus === "all") {
    // Show all items if no status is selected or 'all' is selected
    setFilteredData(activityData);
  } else {
    // Filter items based on selected status
    const filtered = activityData.filter(
      (item) => item.status === selectedStatus
    );
    setFilteredData(filtered);
  }
}, [selectedStatus]);

 const handleValueChange = (value:any) => {
   setSelectedStatus(value);
 };

  return (
    <section className="grid place-items-center h-[16rem] gap-2.5">
      <div className="flex justify-between self-start w-full">
        <div className="font-semibold text-lg leading-[26.91px] text-[#333333]">
          Activity Feed
        </div>
        {/*select goes here */}
        <Select onValueChange={handleValueChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All Activity" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="z-20">
              <SelectLabel>
                {" "}
                <SelectItem value="all">All Activity</SelectItem>
              </SelectLabel>
              <SelectItem value="signup">Sign Up</SelectItem>
              <SelectItem value="applying">Applying</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-5 w-full self-start ">
        {filteredData?.map((d, index) => {
          return (
            <Activitydiv
              key={index}
              time={d.time}
              name={d.name}
              title={d.title}
              perfaction={d.perfaction}
              svgfile={d.svgfile}
              label={d.label}
              color={d.color}
            />
          );
        })}
      </div>
    </section>
  );
};


{
  /*<div className="border border-[#F0F0F0] rounded-[10px] flex items-center py-2 px-2.5 gap-1.5 ">
          <span className="text-[12px] leading-[14.52px] font-medium text-[#333333]">
            All Activity
          </span>

          
          <span>
            <svg
              width="11"
              height="7"
              viewBox="0 0 9 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.747675 -0.000156197C0.937676 -0.000156213 1.12768 0.0698439 1.27768 0.219844L4.27768 3.21984L7.27768 0.219843C7.56768 -0.0701565 8.04768 -0.0701565 8.33768 0.219843C8.62768 0.509843 8.62768 0.989843 8.33768 1.27984L4.80768 4.80984C4.51768 5.09984 4.03768 5.09984 3.74768 4.80984L0.217676 1.27984C-0.0723242 0.989844 -0.0723242 0.509844 0.217676 0.219844C0.367675 0.069844 0.557675 -0.00015618 0.747675 -0.000156197Z"
                fill="#333333"
              />
            </svg>
          </span>
        </div> */
}



