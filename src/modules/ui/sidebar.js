import projectManager from "../managers/projectManager.js";

export default function renderSidebar(onProjectSelect) {
    const sidebar = document.querySelector("#sidebar");

    sidebar.replaceChildren();

    sidebar.innerHTML = `
      <div class="sidebar-header">
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
      </div>

      <h2 class="sidebar-heading">Projects</h2>

      <div class="projects-section">
        <div id="project-list" class="project-list"></div>

      </div>
    `;

    // render projects from projectManager
    const projectList = document.querySelector("#project-list");
    projectList.replaceChildren();

    const projects = projectManager.getProjects() || [];
    const activeProject = projectManager.getActiveProject ? projectManager.getActiveProject() : null;

    projects.forEach(project => {
      const projectItem = document.createElement("div");
      projectItem.className = "project-item-wrapper";

      const btn = document.createElement("button");
      btn.className = "project-item";
      btn.type = "button";
      btn.dataset.projectId = project.id;
      btn.title = project.name;

      const icon = document.createElement("span");
      icon.className = "project-icon";
      icon.textContent = "○";

      const label = document.createElement("span");
      label.className = "project-name";
      label.textContent = project.name;

      const actionsButton = document.createElement("button");
      actionsButton.className = "project-actions-btn";
      actionsButton.type = "button";
      actionsButton.dataset.projectId = project.id;
      actionsButton.setAttribute("aria-label", `Actions for ${project.name}`);
      actionsButton.title = "Project actions";

      actionsButton.innerHTML = `
        <i data-lucide="ellipsis"></i>
      `;

      const menu = document.createElement("div");
      menu.className = "project-actions-menu";
      menu.dataset.projectId = project.id;
      menu.hidden = true;

      menu.innerHTML = `
        <button
          type="button"
          class="project-menu-item rename-project-btn"
          data-project-id="${project.id}"
        >
          <i data-lucide="pencil"></i>
          <span>Rename</span>
        </button>

        <button
          type="button"
          class="project-menu-item delete-project-btn"
          data-project-id="${project.id}"
        >
          <i data-lucide="trash-2"></i>
          <span>Delete</span>
        </button>
      `;

      btn.append(icon, label);
      projectItem.append(btn, actionsButton, menu);

      if (activeProject && activeProject.id === project.id) {
        btn.classList.add("active");
      }
      
      projectList.appendChild(projectItem);
    });


}