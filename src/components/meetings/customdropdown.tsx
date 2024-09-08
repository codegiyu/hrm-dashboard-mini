import React, { useState, useRef, useEffect } from "react";
import { Form } from "./form";
import { Meeting } from "@/constants/meetingdata";
import vector from "@/assets/Vector.png";

type CustomDropdownProps = {
  onCreateMeeting: (newMeeting: Meeting) => void;
};

export function CustomDropdown({ onCreateMeeting }: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const title = form.elements.namedItem("title") as HTMLInputElement;
    const dateInput = form.elements.namedItem("date") as HTMLInputElement;
    const startTimeInput = form.elements.namedItem("startTime") as HTMLInputElement;
    const endTimeInput = form.elements.namedItem("endTime") as HTMLInputElement;

    if (title && dateInput && startTimeInput && endTimeInput) {
      const meetingDate = new Date(dateInput.value);
      const newMeeting: Meeting = {
        id: Date.now(), 
        title: title.value,
        date: {
          day: meetingDate.toString().slice(0, 3),
          date: meetingDate.getDate(),
        },
        time: {
          startTime: startTimeInput.value,
          endTime: endTimeInput.value,
        },
      };

      onCreateMeeting(newMeeting);
      form.reset();
      setIsOpen(false);
    } else {
      console.error("Form elements are missing or undefined");
    }
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[105px] flex items-center gap-[6px] rounded-[10px] px-[10px] py-2 border border-custom-gray cursor-pointer"
      >
        <p className="font-medium font-inter text-xs">Create New</p>
        <img
          src={vector}
          alt="dropdown-icon"
          width={11}
          height={7}
        />
      </button>
      {isOpen && (<Form formHandler={handleFormSubmit} />)}
    </div>
  );
}
