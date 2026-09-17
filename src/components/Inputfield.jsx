import React, { useState } from "react";
import List from "./List";

const Inputfield = () => {
  
  const [sendList, setsendList] = useState([]);
  const [inputvalue, setInputvalue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!inputvalue.trim()) return;
    createTodo(inputvalue);
    setInputvalue("");
  };

  function createTodo(text) {
    const newTodo = {
      id: sendList.length,
      text: text,
      completed: false,
    };

    setsendList([...sendList, newTodo]);
  }

  const handleDelete = (idToRemove) => {
    const updatedList = sendList.filter((item) => item.id !== idToRemove);

    setsendList(updatedList);
  };

  const handleComplete = (id, isChecked) => {
    if (isChecked) {
      console.log(`Item ${id} is now CHECKED. Do something here!`);
      const updatedList = sendList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: isChecked,
          };
        }

        return item;
      });

      setsendList(updatedList);
    } else {
      console.log(`Item ${id} is now UNCHECKED. Do something else!`);
      const updatedList = sendList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: isChecked,
          };
        }

        return item;
      });

      setsendList(updatedList);
    }
  };

  return (
    <div className="p-5">
      <form action="" className="flex gap-3" onSubmit={submitHandler}>
        <input
          className=" border-2 border-slate-500 flex-1 p-2 rounded-lg"
          type="text"
          value={inputvalue}
          onChange={(e) => setInputvalue(e.target.value)}
        />

        <button className="p-2 bg-orange-200 w-16 rounded-lg text-orange-400 text-lg ">
          Add
        </button>
      </form>

      <List
        sendInput={sendList}
        onDelete={handleDelete}
        handleCheckbox={handleComplete}
      />
    </div>
  );
};

export default Inputfield;
