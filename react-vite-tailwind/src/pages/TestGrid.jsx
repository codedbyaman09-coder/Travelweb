import React from "react";
export default function TestGrid() {
  return (
    <div className="grid grid-cols-3 gap-4 relative p-10 min-h-screen bg-gray-100">
      <div className="absolute inset-y-0 col-start-2 col-span-1 bg-white shadow-xl z-0 rounded-lg"></div>
      
      <div className="col-start-1 col-span-1 z-10 p-4">Left 1</div>
      <div className="col-start-2 col-span-1 z-10 p-4 h-32">Center 1</div>
      <div className="col-start-3 col-span-1 z-10 p-4">Right 1</div>
      
      <div className="col-start-1 col-span-1 z-10 p-4">Left 2</div>
      <div className="col-start-2 col-span-1 z-10 p-4 h-64">Center 2</div>
      <div className="col-start-3 col-span-1 z-10 p-4">Right 2</div>
    </div>
  );
}