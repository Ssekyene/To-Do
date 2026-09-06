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
          type="button"
      >
          <span>+</span>
          Add project
      </button>

      <div class="projects-section">

          <p class="sidebar-heading">
              Projects
          </p>

          <div id="project-list"></div>

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


    /*const logo = document.createElement("h1");
    logo.textContent = "📝 To-Do";
    sidebar.appendChild(logo);

    // render projects
    const heading = document.createElement("h2");
    heading.textContent = "Projects";
    heading.style.marginTop = "2rem";

    sidebar.appendChild(heading);

    const addButton = document.createElement("button");
    addButton.id = "new-project-btn";
    addButton.textContent = "+ New Project";
    
    sidebar.appendChild(addButton);

    const list = document.createElement("ul");
    list.id = "project-list";

    projectManager.getProjects().forEach((project) => {
      const item = document.createElement("li");
      item.textContent = project.name;
      item.dataset.projectId = project.id;

      const active = projectManager.getActiveProject();
      if(active === project) {
        item.classList.add("active-project");
      }

      list.appendChild(item);
    });

    sidebar.appendChild(list); */

}