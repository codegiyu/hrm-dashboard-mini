import { ChildrenOnly } from "../types";
import { Sidebar } from "./Sidebar";

export const DashboardLayout = ({ children }: ChildrenOnly) => {
  return (
    <main className="w-full h-screen grid grid-rows-1 lg:grid-cols-[17rem_1fr]">
      <aside className="sidebar-section w-full h-full hidden lg:block bg-white">
        <Sidebar desktop={true} />
      </aside>
      <section className="main-content w-full overflow-y-scroll py-[1.875rem] px-5 grid gap-[1.875rem] bg-[#f7f7f7]">
        { children }
      </section>
    </main>
  );
};
