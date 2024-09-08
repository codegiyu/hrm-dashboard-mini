
export default function Message({
  name,
  perfaction,
  title,
  time,
}: {
  time: string;
  name: string;
  title: string;
  perfaction: string;
}) {
  return (
    <div className="font-kanit flex flex-col gap-0.5">
      <p className="text-[#333333] leading-[17.94px] text-[12px] flex gap-1">
        <span className="font-medium">{name}</span>
        <span className="font-normal ">{perfaction}</span>
        <span className="font-medium">{title}</span>
      </p>
      <p className="text-[#8F8F8F] font-light text-[10px] leading-[14.95px]">
        {time} ago
      </p>
    </div>
  );
}
