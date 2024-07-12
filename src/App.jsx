import NewProject from "./components/NewProject";
import { useState } from "react";
import NoProject from "./components/NoProject";
import Sidebar from "./components/Sidebar";
import SelectedProjectDetails from "./components/SelectedProjectDetails";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: {},
  });

  const newProjectHandler = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  };

  const projectDetailsHandler = (id) => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  };

  const onCancelAddProject = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  };

  const onAddNewProject = (projectDetails) => {
    const updatedProjectDetails = {
      ...projectDetails,
      id: Math.random() * 1000,
    };
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, updatedProjectDetails],
      };
    });
  };

  const onAddTaskHandler = (task) => {
    setProjectState((prev) => {
      const taskId = Math.random() * 1000;
      let updatedTask = prev.tasks[prev.selectedProjectId] ?? [];
      const newTask = {
        taskId,
        task,
      };

      updatedTask = [newTask, ...updatedTask];

      return {
        ...prev,
        tasks: { ...prev.tasks, [prev.selectedProjectId]: updatedTask },
      };
    });
  };

  const onDeleteProjectHandler = (id) => {
    setProjectState((prev) => {
      let updatedProjects = prev.projects;
      if (updatedProjects.length) {
        updatedProjects = updatedProjects.filter(
          (project) => project.id !== id
        );
      }
      return {
        ...prev,
        projects: updatedProjects,
        selectedProjectId: undefined,
      };
    });
  };

  const onDeleteTaskHandler = (taskId) => {
    setProjectState((prev) => {
      let updatedTasks = prev.tasks[prev.selectedProjectId];
      if (updatedTasks.length) {
        updatedTasks = updatedTasks.filter((task) => task.taskId !== taskId);
      }

      prev.tasks[prev.selectedProjectId] = updatedTasks;

      return {
        ...prev,
      };
    });
  };

  let content;

  if (projectState.selectedProjectId === undefined) {
    content = <NoProject onHandleNewProject={newProjectHandler} />;
  } else if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onCancel={onCancelAddProject}
        getNewProjectDetailsHandler={onAddNewProject}
      />
    );
  } else {
    const project = projectState.projects.find(
      (project) => project.id === projectState.selectedProjectId
    );
    content = (
      <SelectedProjectDetails
        onDeleteSelectedProject={onDeleteProjectHandler}
        project={project}
        onAddNewtask={onAddTaskHandler}
        tasks={projectState.tasks}
        onDeleteTask={onDeleteTaskHandler}
      />
    );
  }

  return (
    <main className="mt-8 h-screen flex gap-8">
      <Sidebar
        projects={projectState.projects}
        onHandleNewProject={newProjectHandler}
        onProjectDetails={projectDetailsHandler}
        selectedId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
