import React from "react";
import Task from "@/components/task";

const Column = () => {
  return (
    <div className="h-full w-[19rem] ">
      <div className="flex gap-2 mb-4">
        <div className="bg-[#49C4E5] rounded-full size-4"></div>
        <span className="text-gray-medium heading-sm">TODO (4)</span>
      </div>
      <div className="flex flex-col gap-4">
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default Column;
