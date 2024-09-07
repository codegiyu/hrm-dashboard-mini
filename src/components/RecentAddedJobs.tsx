import { recentAddedJobs } from "@/constants/recentAddedJobs";
import { JobCard } from "./JobCard";

export const RecentAddedJobs = () => {
  return (
    <section className="grid gap-[1.875rem]">
      <h2 className="text-[1.125rem] leading-normal font-semibold text-[#333333]">
        Recent Added Jobs
      </h2>
      <div className="grid gap-2">
        {recentAddedJobs.map((job, idx) => (
          <JobCard
            key={idx}
            logo={job.logo}
            position={job.position}
            company={job.company}
            location={job.location}
            timeAdded={job.timeAdded}
          />
        ))}
      </div>
    </section>
  );
};
