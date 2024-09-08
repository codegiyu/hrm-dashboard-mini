import { useState } from "react";
import vector from "../assets/Vector.png";
import dots from "../assets/dots.png";

type Meeting = {
  id: number;
  title: string;
  date: string;
  time: string;
};

export const Meetings = () => {
  const [showForm, setShowForm] = useState(false);
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [showDropdown, setShowDropdown] = useState<number | null>(null);

  const handleCreateMeeting = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const title = form.elements.namedItem("title") as HTMLInputElement;
    const date = form.elements.namedItem("date") as HTMLInputElement;
    const time = form.elements.namedItem("time") as HTMLInputElement;

    // Check if inputs exist and have values
    if (title && date && time) {
      const newMeeting = {
        id: meetings.length + 1,
        title: title.value,
        date: date.value,
        time: time.value,
      };

      setMeetings([...meetings, newMeeting]);

      form.reset();
      setShowForm(false);
    } else {
      console.error("Form elements are missing or undefined");
    }
  };

  const toggleDropdown = (id: number) => {
    setShowDropdown(showDropdown === id ? null : id);
  };

  const handleDelete = (id: number) => {
    setMeetings(meetings.filter((meeting) => meeting.id !== id));
    setShowDropdown(null);
  };

  const handleEdit = () => {
    // Handle the edit action still in progress...
    setShowDropdown(null); // Closes the dropdown for now
  };

  return (
    <section className="relative w-full h-full flex flex-col gap-[30px]">
      <div className="flex justify-between items-center">
        <h3 className="font-kanit font-semibold text-lg text-black">
          Meetings
        </h3>
        <div
          onClick={() => {
            setShowForm(!showForm);
          }}
          className=" flex items-center gap-[6px] rounded-[10px] px-[10px] py-2 border border-custom-gray cursor-pointer"
        >
          <p className="font-medium font-inter text-xs">Create New</p>
          <img
            src={vector}
            alt="dropdown-icon"
            width={11}
            height={7}
            className=""
          />
        </div>
      </div>
      {/* Conditionally render the form if showForm is true */}
      {showForm && (
        <form
          onSubmit={handleCreateMeeting}
          className="absolute top-10 right-0 flex flex-col gap-4 p-2 border border-gray-200 w-50 h-auto bg-white z-50"
        >
          <input
            name="title"
            type="text"
            placeholder="Meeting Title"
            className="border border-gray-300 p-1 rounded"
            required
          />
          <input
            name="date"
            type="date"
            className="border border-gray-300 p-1 rounded"
            required
          />
          <input
            name="time"
            type="time"
            className="border border-gray-300 p-1 rounded"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-1 rounded">
            Add Meeting
          </button>
        </form>
      )}
      {meetings.length === 0 ? (
        <div className="bg-[#F7F7F7] flex justify-center items-center h-full">
          <p className="text-lg text-[#8F8F8F]">Create New Meetings Here!</p>
        </div>
      ) : (
        <div className="flex flex-col gap-5 h-full overflow-y-auto">
          {meetings.map((meeting) => {
            const meetingDate = new Date(meeting.date);
            const day = meetingDate.toString().slice(0, 3);
            const date = meetingDate.getDate();

            return (
              <div
                key={meeting.id}
                className="flex justify-between items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex gap-[17px]">
                  <div className="bg-white shadow-custom text-xs font-kanit rounded-md px-[5px] py-[2px] w-10 h-10 text-center">
                    <p className="font-semibold text-[#FFA600]">{day}</p>
                    <p className="font-normal text-[#333333]">{date}</p>
                  </div>
                  <div className="font-kanit font-normal">
                    <h4 className="text-sm text-[#333333]">{meeting.title}</h4>
                    <p className="text-xs text-[#8F8F8F]">{meeting.time}</p>
                  </div>
                </div>

                <div
                  onClick={() => toggleDropdown(meeting.id)}
                  className="rounded-[5px] p-[5px] bg-[#F5F6FA] cursor-pointer relative"
                >
                  <img alt="dots-icon" src={dots} />
                  {showDropdown === meeting.id && (
                    <div className="absolute right-0 mt-2 w-28 bg-white shadow-md rounded-lg py-2 z-10">
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => handleEdit()}
                      >
                        Edit
                      </button>
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        onClick={() => handleDelete(meeting.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
