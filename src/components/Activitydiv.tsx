import Message from "./Message";


export default function Activitydiv({
  name,
  perfaction,
  title,
  time,
  svgfile,
  label,
  color,
}: {
  time: string;
  name: string;
  title: string;
  perfaction: string;
  svgfile: any;
  label: string;
  color: string;
}) {
  return (
    <div className="flex justify-between justify-self-start">
      <div className="flex gap-2.5">
        <div><img src={svgfile} alt="" /></div>
        <div>
          <Message
            time={time}
            name={name}
            title={title}
            perfaction={perfaction}
          />
        </div>
      </div>
      <div
        style={{
          color: color,
          backgroundColor: `${color}33`,
        }}
        className="rounded-md p-1.5 "
      >
        {label}
      </div>
    </div>
  );
}
