import React from "react";
import figmaIcon from '../../assets/icon.png';
import spotifyIcon from '../../assets/icon2.png';
import iosIcon from '../../assets/Icon3.png';
import behanceIcon from '../../assets/Icon4.png';


type Job = {
  logo: string;
  title: string;
  location: string;
  datePosted: string;
};

const jobs: Job[] = [
  {
    logo: figmaIcon,
    title: "Jr Frontend Engineer",
    location: "Spotify, Singapore",
    datePosted: "2 Days ago",
  },
  {
    logo: spotifyIcon,
    title: "Product Designer",
    location: "Spotify, Singapore",
    datePosted: "6 hours ago",
  },
  {
    logo: iosIcon,
    title: "ios Developer",
    location: "San Francisco, CA",
    datePosted: "2 Days ago",
  },
  {
    logo: behanceIcon,
    title: "Brand Strategist",
    location: "Newyork, US",
    datePosted: "2 Days ago",
  },
];

export const CardItem: React.FC = () => {
  return (
    <div className="h-full flex flex-col gap-[10px]">
      {jobs.map((item: Job, index: number) => (
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
