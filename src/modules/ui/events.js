import projectManager from "../managers/projectManager.js";
import { openProjectDialog, openTodoDialog, } from "./dialog.js";

export default function registerEvents(renderApp) {
  const newProjectButton = document.querySelector("#new-project-btn");
  const projectList = document.querySelector("#project-list");
  const newTodoButton = document.querySelector("#new-todo-btn");

  if (newProjectButton) {
    newProjectButton.addEventListener("click", () => {
      openProjectDialog((projectName) => {
        const project = projectManager.addProject(projectName);
        projectManager.setActiveProject(project.id);
        
        renderApp();
      });
    });
  }

  if (projectList) {
    projectList.addEventListener("click", (event) => {
      const projectItem = event.target.closest("[data-project-id]");

      if (!projectItem) return;

      const projectId = projectItem.dataset.projectId;

      projectManager.setActiveProject(projectId);

      renderApp();
    });
  }

  if (newTodoButton) {
    newTodoButton.addEventListener("click", () => {
      openTodoDialog((todoData) => {
        const project = projectManager.getActiveProject();
        projectManager.addTodo(project.id, todoData);
        
        renderApp();
      });

    });
  }

}