import { CardItem } from "./cardItem";

export const RecentAddedJobs = () => {
  return (
    <section className="flex flex-col gap-[30px]">
      <h4 className="font-semibold text-lg text-[#333333]">Recent Added Jobs</h4>     
      <CardItem />  
    </section>
  );
};
