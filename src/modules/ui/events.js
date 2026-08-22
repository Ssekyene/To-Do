import projectManager from "../managers/projectManager.js";
import { openProjectDialog } from "./dialog.js";

export default function registerEvents(renderApp) {
  const newProjectButton = document.querySelector("#new-project-btn");
  const projectList = document.querySelector("#project-list");

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

}