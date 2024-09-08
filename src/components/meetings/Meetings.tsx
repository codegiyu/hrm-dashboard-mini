import { useState } from 'react';
import { MeetingItem } from './meetingItem';
import { Meeting } from '@/constants/meetingdata';
import { CustomDropdown } from './customdropdown';

export const Meetings = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [showDropdown, setShowDropdown] = useState<number | null>(null);

  const handleCreateMeeting = (newMeeting: Meeting) => {
    setMeetings((prev) => [...prev, newMeeting]);
  };

  const toggleDropdown = (id: number) => {
    setShowDropdown(showDropdown === id ? null : id);
  };

  const handleDelete = (id: number) => {
    setMeetings(meetings.filter((meeting) => meeting.id !== id));
    setShowDropdown(null);
  };

  const handleEdit = (id: number) => {
    // Handle the edit action here
    setShowDropdown(null);
  };

  return (
    <section className="relative w-full h-full flex flex-col gap-[30px]">
      <div className="flex justify-between items-center">
        <h3 className="font-kanit font-semibold text-lg text-black">
          Meetings
        </h3>
        <CustomDropdown onCreateMeeting={handleCreateMeeting} />
      </div>

      {meetings.length === 0 ? (
        <div className="bg-[#F7F7F7] flex justify-center items-center h-full">
          <p className="text-lg text-[#8F8F8F]">Create New Meetings Here!</p>
        </div>
      ) : (
        <div className="flex flex-col gap-5 h-48 p-1 overflow-y-auto">
          {meetings.map((meeting) => (
            <MeetingItem
              key={meeting.id}
              meeting={meeting}
              toggleDropdown={toggleDropdown}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              showDropdown={showDropdown}
            />
          ))}
        </div>
      )}
    </section>
  );
};
