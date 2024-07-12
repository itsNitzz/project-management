import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProject({ onHandleNewProject }) {
  return (
    <section className="flex flex-col items-center gap-2 w-2/3 mt-24">
      <img className="w-16 h-16" src={noProjectImage} alt="a notpad with pen" />
      <h2 className="font-bold text-stone-700">No Project Selected</h2>
      <p className="text-stone-400 mb-3">
        Select a project or get started with the new one
      </p>
      <Button onClick={onHandleNewProject}>Create New Project</Button>
    </section>
  );
}
