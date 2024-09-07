export interface JobCardProps {
  logo: string;
  position: string;
  company: string;
  location: string;
  timeAdded: string;
}

export const JobCard = ({ logo, position, company, location, timeAdded }: JobCardProps) => {
  return (
    <div className="p-[10px] rounded-[10px] bg-[#f9f9f9] flex items-center gap-[10px]">
      <img src={logo} alt={company} className="w-[2.375rem]" />
      <div className="grid gap-1">
        <h6 className="text-[1rem] leading-[1.125rem] font-medium text-[#333333]">
          {position}
        </h6>
        <p className="text-[0.75rem] leading-[0.9375rem] text-[#8f8f8f]">
          {`${company}, ${location} - ${timeAdded}`}
        </p>
      </div>
    </div>
  );
};
