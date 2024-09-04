import { list, CardDetails} from "./constant/CardInfo";

export const Card = ({title,value,bgColor}: CardDetails) => {
  return ( 
      <div className={`${bgColor === "cyan" ? "bg-[#29AB91]" :
       bgColor === "darkyellow" ? "bg-[#FFA600]" : bgColor === "orange" ?
        "bg-[#FF5630]" : "bg-[#377DFF]"} w-[260px] h-[119px] rounded-xl p-5 flex items-center`}>
        <div className="w-[222.5px] h-[79px] flex flex-col gap-1">
          <h3 className="text-[14px] text-white font-normal">{title}</h3>
          <h2 className="text-[24px] font-semibold text-white">{value}</h2>
         <img src="/frame.png" alt="frameIcon" className="w-[66px] h-[18px]" />
        </div>
        <img src="/Chart.png" alt="ChartIcon" className="w-[64px] h-[64px]" />
      </div>
  );
};
export const ColouredCards = () => {
  return (
    <section className="grid md:grid-cols-4 w-full gap-[20px]">
     {list.map((item, idx) =>{
       return <Card key={idx} title={item.title} value={item.value} bgColor={item.bgColor}/>
     })}
    </section>
  );
};
