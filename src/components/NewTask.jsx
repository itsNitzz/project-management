import { useState } from "react";

export default function NewTasks({ onAddNewtask }) {
  const [newTask, setNewTask] = useState("");

  const onInputChangehandler = (e) => {
    setNewTask(e.target.value);
  };

  const onTaskHandler = () => {
    if (!newTask.trim()) return;
    onAddNewtask(newTask);
    setNewTask("");
  };

  return (
    <div className="flex items-center gap-4 mb-4">
      <input
        onChange={onInputChangehandler}
        value={newTask}
        className="w-60 py-1 px-2 bg-stone-300 rounded-sm text-stone-700"
      />
      <button
        onClick={onTaskHandler}
        className="bg-stone-800 hover:bg-stone-950 text-stone-300 text-xs py-1.5 px-2 rounded-sm">
        Add task
      </button>
    </div>
  );
}
