import dots from "@/assets/dots.png";
import { Meeting } from '@/constants/meetingdata';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type MeetingItemProps = {
  meeting: Meeting;
  toggleDropdown: (id: number) => void;
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
  showDropdown: number | null;
};

export const MeetingItem = ({
  meeting,
  toggleDropdown,
  handleEdit,
  handleDelete,
  showDropdown,
}: MeetingItemProps) => {
  return (
    <div key={meeting.id} className="flex justify-between items-center">
      <div className="flex gap-[17px]">
        <div className="bg-white shadow-custom text-xs font-kanit rounded-md px-[5px] py-[2px] w-10 h-10 text-center">
          <p className="font-semibold text-[#FFA600]">{meeting.date.day}</p>
          <p className="font-normal text-[#333333]">{meeting.date.date}</p>
        </div>
        <div className="font-kanit font-normal">
          <h4 className="text-sm text-[#333333]">{meeting.title}</h4>
          <p className="text-xs text-[#8F8F8F]">
            {meeting.time.startTime} - {meeting.time.endTime}
          </p>
        </div>
      </div>

      <div className="relative">
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-[5px] py-[5px] bg-[#F5F6FA] cursor-pointer" onClick={() => toggleDropdown(meeting.id)}>
            <img alt="dots-icon" src={dots} />
          </DropdownMenuTrigger>
          {showDropdown === meeting.id && (
            <DropdownMenuContent className="mt-2 w-28 bg-white shadow-md rounded-lg py-2 z-10">
              <DropdownMenuItem className="cursor-pointer block w-full text-left py-1 text-xs hover:bg-gray-100" onClick={() => handleEdit(meeting.id)}>Edit</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer block w-full text-left py-1 text-xs hover:bg-gray-100" onClick={() => handleEdit(meeting.id)}>Attendance</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer block w-full text-left py-1 text-xs hover:bg-gray-100" onClick={() => handleEdit(meeting.id)}>Generate</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600 cursor-pointer block w-full text-left py-1 text-xs hover:bg-gray-100" onClick={() => handleDelete(meeting.id)}>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      </div>

    </div>
  );
};
