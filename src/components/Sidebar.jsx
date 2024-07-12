import Button from "./Button";

export default function Sidebar({
  onHandleNewProject,
  projects,
  onProjectDetails,
  selectedId,
}) {
  return (
    <aside className="w-1/3 text-stone-50 bg-stone-900 rounded-r-xl md:w-72 py-16 px-8 flex flex-col gap-4">
      <h2 className="md:text-2xl uppercase font-bold">Your Projects</h2>
      <div>
        <Button onClick={onHandleNewProject}>+ add project</Button>
      </div>
      <ul>
        {projects.map((project) => {
          let ctaClasses =
            "w-full text-left py-1 px-1 my-1 rounded-md text-stone-400 hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedId) {
            ctaClasses += " bg-stone-800 text-stone-200";
          }
          return (
            <li key={project.id} className="list-none">
              <button
                onClick={() => onProjectDetails(project.id)}
                className={ctaClasses}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
