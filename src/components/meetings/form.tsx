import React from "react";

type FormProps = {
  formHandler: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const Form = ({ formHandler }: FormProps) => {
  return (
    <form
      onSubmit={formHandler}
      className="absolute top-10 right-0 shadow-custom flex flex-col gap-4 p-2 border border-gray-200 w-[230px] h-auto bg-white z-50"
    >
      <input
        name="title"
        type="text"
        placeholder="Meeting Title"
        className="border border-gray-300 rounded placeholder:text-xs placeholder:px-2 w-full"
        required
      />
      <input
        name="date"
        type="date"
        className="border border-gray-300 rounded placeholder:text-xs placeholder:px-2 w-full"
        required
      />
      <div className="flex flex-col sm:flex-row gap-1 justify-between w-full">
        <div className="w-[50%]">
          <label
            htmlFor="startTime"
            className="block text-xs font-normal text-gray-700"
          >
            Start Time
          </label>
          <input
            id="startTime"
            name="startTime"
            type="time"
            className="border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="w-[50%]">
          <label
            htmlFor="endTime"
            className="block text-xs font-normal text-gray-700"
          >
            End Time
          </label>
          <input
            id="endTime"
            name="endTime"
            type="time"
            className="border border-gray-300 rounded w-full"
            required
          />
        </div>
      </div>
      <button type="submit" className="bg-blue text-white p-1 rounded w-full">
        Add Meeting
      </button>
    </form>
  );
};
