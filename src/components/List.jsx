import React, { useState } from "react";

const List = ({ sendInput, onDelete, handleCheckbox }) => {
  return (
    <ul className="">
      {sendInput.map((item) => (
        <li
          key={item.id}
          className="flex gap-2 border items-center border-slate-300 p-4 rounded-xl mt-2"
        >
          <input
            type="checkbox"
            // checked={item.completed}
            onChange={(e) => handleCheckbox(item.id, e.target.checked)}
          />

          <p
            className={`flex-1 ${item.completed ? "line-through text-gray-400" : ""}`}
          >
            {item.text}
          </p>

          <div className="flex gap-2">
            <button className="bg-amber-200 px-1.5 text-orange-400 rounded">
              Edit
            </button>

            <button
              className="bg-red-200 px-1.5 rounded text-red-400"
              onClick={() => {
                if (item.completed === false) {
                  alert("Complete the task first");
                } else {
                  onDelete(item.id);
                }
              }}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
