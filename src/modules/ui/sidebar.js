import { add } from "date-fns";
import projectManager from "../managers/projectManager.js";
//import { openProjectDialog } from "./dialog.js";

export default function renderSidebar(onProjectSelect) {
    const sidebar = document.querySelector("#sidebar");

    sidebar.replaceChildren();

    sidebar.innerHTML = `
      <div class="app-brand">
          <div class="brand-icon">✓</div>
          <span>To-Do</span>
      </div>

      <button
          class="add-project-btn"
          id="new-project-btn"
          type="button"
      >
          <span>+</span>
          Add project
      </button>

      <div class="projects-section">

          <p class="sidebar-heading">
              Projects
          </p>

          <div id="project-list" class="project-list"></div>

      </div>
    `;

    // render projects from projectManager
    const projectList = document.querySelector("#project-list");
    projectList.replaceChildren();

    const projects = projectManager.getProjects() || [];
    const activeProject = projectManager.getActiveProject ? projectManager.getActiveProject() : null;

    projects.forEach(project => {
      const btn = document.createElement("button");
      btn.className = "project-item";
      btn.type = "button";
      btn.dataset.projectId = project.id;

      const icon = document.createElement("span");
      icon.className = "project-icon";
      icon.textContent = "○";

      const label = document.createElement("span");
      label.textContent = project.name;

      btn.appendChild(icon);
      btn.appendChild(label);

      if (activeProject && activeProject.id === project.id) {
        btn.classList.add("active");
      }
      
      projectList.appendChild(btn);
    });


}