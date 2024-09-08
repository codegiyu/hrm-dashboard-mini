import Message from "./Message";

interface Activitydivinter {
  time: string;
  name: string;
  title: string;
  perfaction: string;
  svgfile: any;
  label: string;
  color: string;
}

export default function Activitydiv(datas :Activitydivinter) {
  return (
    <div className="flex justify-between justify-self-start">
      <div className="flex gap-2.5">
        <div><img src={datas.svgfile} alt="" /></div>
        <div>
          <Message
            time={datas.time}
            name={datas.name}
            title={datas.title}
            perfaction={datas.perfaction}
          />
        </div>
      </div>
      <div
        style={{
          color: datas.color,
          backgroundColor: `${datas.color}33`,
        }}
        className="rounded-md p-1.5 "
      >
        {datas.label}
      </div>
    </div>
  );
}
