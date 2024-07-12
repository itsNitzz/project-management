import Tasks from "./Tasks";

export default function SelectedProjectDetails({
  project,
  onDeleteSelectedProject,
  onAddNewtask,
  tasks,
  onDeleteTask,
}) {
  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <section className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 flex flex-col gap-4 border-b-2 border-stone-400">
        <div className="flex justify-between text-stone-800">
          <h1 className="text-3xl  font-bold">{project.title}</h1>
          <button
            onClick={() => onDeleteSelectedProject(project.id)}
            className="hover:text-stone-600">
            Delete
          </button>
        </div>
        <p className="text-sm text-stone-500">{formattedDate}</p>
        <p>{project.description}</p>
      </header>
      <Tasks
        onDeleteTask={onDeleteTask}
        tasks={tasks}
        projectId={project.id}
        onAddNewtask={onAddNewtask}
      />
    </section>
  );
}
