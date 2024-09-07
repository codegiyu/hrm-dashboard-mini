import element from "../assets/element.png"
import chat from "../assets/chat.png"
import calendar from "../assets/calendar.png"
import job from "../assets/Group.png"
import profile from "../assets/profile.png"
import convert from "../assets/convert.png"
import career from "../assets/career.png"
import note from "../assets/note.png"
import setting from "../assets/setting.png"
import logo from "../assets/logo-87.png"

type sidebarType={
  id: number;
  name: string;
  links: {
      linkName: string;
      linkIcon: string;
  }[]
  }[]

export const Sidebar = () => {

  const sidebarArray:sidebarType =[
    {
      id:1,
      name:"Menu",
      links:[
        {
          linkName:"dashboard",
          linkIcon:element
        },
        {
          linkName:"message",
          linkIcon:chat
        },
        {
          linkName:"calender",
          linkIcon:calendar
        }
      ]
    },
    {
      id:2,
      name:"recruitment",
      links:[
        {
          linkName:"job",
          linkIcon:job
        },
        {
          linkName:"my refereer",
          linkIcon:convert
        },
        {
          linkName:"candidate",
          linkIcon:profile
        },
        {
          linkName:"career site",
          linkIcon:career
        }
       
      ]
    },
    {
      id:3,
      name:"organisation",
      links:[
        {
          linkName:"employee",
          linkIcon:profile
        },
        {
          linkName:"structure",
          linkIcon:convert
        },
        {
          linkName:"report",
          linkIcon:note
        },
        {
          linkName:"setting",
          linkIcon:setting
        }
       
      ]
    }
  ]
  return (
    <section className="w-full h-full flex flex-col  p-4 gap-5 overflow-y-scroll overScrollbar">
      <div className="w-full  h-[10vh]  flex items-center justify-center ">
      <img src={logo} />
      </div>
    <div className=" h-full w-full">
{
  sidebarArray.map((item )=>(
    <div className="" key={item.id}>
     <h1 className="font-bold text-black/80 text-base uppercase">{item.name}</h1>
     {
      item.links.map(each=>(
        <div className= {`${each.linkName==="dashboard"?"bg-[#377DFF] text-white":"hover:bg-gray-100"} cursor-pointer  capitalize pl-5 flex gap-4 items-center my-1 rounded-md  py-3`} >
          <img className=" " color="red" src={each.linkIcon}/>
          <span  className= {`${each.linkName==="dashboard"?" text-white":"text-gray-500"}` }>{each.linkName} </span>
        </div>
      ))
     }
    </div>
  ))
}
      </div>
    </section>
  );
};
