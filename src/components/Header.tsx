import { CiSearch } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import avatar from '../assets/avatar.png'
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuSquareIcon } from "lucide-react";
import { Sidebar } from "@/layout/Sidebar";

export const Header = () => {

  return (
    <header className="flex justify-between items-center">
      <h1 className=" text-2xl text-primary font-semibold">
        Dashboard
      </h1>
      <div className="hidden lg:flex items-center justify-center gap-6">
        <div className="flex items-center justify-center  rounded-md h-8 relative">
          <input type="text" name="search" placeholder="Search by anything" className="border border-neutral h-8 rounded-lg px-4 py-2 text-sm font-light tracking-wide w-80"/>
          <button className="bg-blue h-8 w-8 rounded-r-md flex items-center justify-center absolute right-0 text-white">

          <CiSearch size={20} className="font-semibold"/>
          </button>
        </div>
        <div className="">
          <IoNotifications className="text-grey" size={25}/>
        </div>
        <div className="">
          <BsFillQuestionCircleFill className="text-grey" size={25}/>
        </div>
        <div className="rounded-full p-1 border border-grey ">
            <img src={avatar} alt="avatar" className="h-6 "  />
        </div>
      </div>
      <div className="menu-btn-wrap block lg:hidden rounded-md">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuSquareIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <div className="w-full h-full bg-white">
              <Sidebar desktop={true} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
