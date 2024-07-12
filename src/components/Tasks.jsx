import NewTasks from "./NewTask";

export default function Tasks({
  onAddNewtask,
  tasks,
  onDeleteTask,
  projectId,
}) {
  let taskList;
  if (tasks[projectId]?.length) {
    taskList = (
      <ul className="list-none">
        {tasks[projectId].map((task) => {
          return (
            <div
              key={task.taskId}
              className="flex items-center justify-between gap-2 mb-2">
              <li className="bg-stone-300 p-1 rounded-sm text-stone-800 basis-10/12">
                {task.task}{" "}
              </li>
              <button
                onClick={() => onDeleteTask(task.taskId)}
                className="text-stone-300 bg-stone-800 hover:bg-stone-950 basis-2/12 py-1 rounded-sm">
                Clear
              </button>
            </div>
          );
        })}
      </ul>
    );
  } else {
    taskList = <p>No task available. Please add a task</p>;
  }
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-800 mb-3">Tasks</h2>
      <NewTasks onAddNewtask={onAddNewtask} />
      {taskList}
    </section>
  );
}
