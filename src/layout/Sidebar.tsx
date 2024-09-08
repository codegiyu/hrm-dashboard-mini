import calendar from "../assets/calendar.svg";
import job from "../assets/job.svg";
import profile from "../assets/profile-2user.svg";
import convert from "../assets/convert-3d-cube.svg";
import career from "../assets/monitor-mobbile.svg";
import note from "../assets/note.png";
import setting from "../assets/setting.png";
import logo from "../assets/logo-87.png";
import chats from "../assets/chat.svg";
import element from "../assets/element.png";
import { CiSearch } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import avatar from "../assets/avatar.png";

type sidebarType = {
  id: number;
  name: string;
  links: {
    linkName: string;
    linkIcon: string;
  }[];
}[];

export const Sidebar = ({ desktop }: { desktop: boolean }) => {
  const sidebarArray: sidebarType = [
    {
      id: 1,
      name: "Menu",
      links: [
        {
          linkName: "dashboard",
          linkIcon: element,
        },
        {
          linkName: "message",
          linkIcon: chats,
        },
        {
          linkName: "calender",
          linkIcon: calendar,
        },
      ],
    },
    {
      id: 2,
      name: "recruitment",
      links: [
        {
          linkName: "job",
          linkIcon: job,
        },
        {
          linkName: "my refereer",
          linkIcon: convert,
        },
        {
          linkName: "candidate",
          linkIcon: profile,
        },
        {
          linkName: "career site",
          linkIcon: career,
        },
      ],
    },
    {
      id: 3,
      name: "organisation",
      links: [
        {
          linkName: "employee",
          linkIcon: profile,
        },
        {
          linkName: "structure",
          linkIcon: convert,
        },
        {
          linkName: "report",
          linkIcon: note,
        },
        {
          linkName: "setting",
          linkIcon: setting,
        },
      ],
    },
  ];

  return (
    <section className="w-full h-full flex flex-col  p-4 gap-5 overflow-y-scroll overScrollbar">
      <div className="w-full  h-[10vh]  flex items-center justify-center ">
        <img src={logo} />
      </div>

      {
        desktop && (
          <div className="mt-2">
          <div className="">
            <div className="flex items-center justify-center  rounded-md h-8 relative">
              <input
                type="text"
                name="search"
                placeholder="Search by anything"
                className="border border-neutral h-8 rounded-lg px-2 py-2 text-sm font-light tracking-wide w-80"
              />
              <button className="bg-blue h-8 w-8 rounded-r-md flex items-center justify-center absolute right-0 text-white">
                <CiSearch size={20} className="font-semibold" />
              </button>
            </div>
  
            <div className="flex items-center gap-x-6 mt-4">
              <div className="rounded-full p-1 border border-grey ">
                <img src={avatar} alt="avatar" className="h-6 " />
              </div>
              <div className="">
                <IoNotifications className="text-grey" size={25} />
              </div>
              <div className="">
                <BsFillQuestionCircleFill className="text-grey" size={25} />
              </div>
            </div>
          </div>
        </div>
        )
      }
     


      <div className=" h-full w-full">
        {sidebarArray.map((item) => (
          <div className="" key={item.id}>
            <h1 className="font-bold text-black/80 text-base uppercase">
              {item.name}
            </h1>
            {item.links.map((each) => (
              <div
                className={`${
                  each.linkName === "dashboard"
                    ? "bg-[#377DFF] text-white"
                    : "hover:bg-gray-100"
                } cursor-pointer  capitalize pl-5 flex gap-4 items-center my-1 rounded-md  py-3`}
              >
                <img className=" " color="red" src={each.linkIcon} />
                <span
                  className={`${
                    each.linkName === "dashboard"
                      ? " text-white"
                      : "text-gray-500"
                  }`}
                >
                  {each.linkName}{" "}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
