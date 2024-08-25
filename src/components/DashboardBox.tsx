import { ChildrenOnly } from "../types";

export const DashboardBox = ({ children }: ChildrenOnly) => {
  return (
    <section className="w-full h-full p-5 bg-white rounded-[10px]">
      { children }
    </section>
  );
};
