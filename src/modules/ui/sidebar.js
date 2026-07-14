import { add } from "date-fns";
import projectManager from "../managers/projectManager.js";
import { openProjectDialog } from "./dialog.js";

export default function renderSidebar(onProjectSelect) {
    const sidebar = document.querySelector("#sidebar");

    sidebar.replaceChildren();

    const logo = document.createElement("h1");
    logo.textContent = "📝 To-Do";
    sidebar.appendChild(logo);

    // render projects
    const heading = document.createElement("h2");
    heading.textContent = "Projects";
    heading.style.marginTop = "2rem";

    sidebar.appendChild(heading);

    const addButton = document.createElement("button");
    addButton.textContent = "+ New Project";

    addButton.addEventListener("click", () => {
      openProjectDialog((projectName) => {

          // We'll fill this in next.

      });

    });

    sidebar.appendChild(addButton);

    const list = document.createElement("ul");

    projectManager.getProjects().forEach((project) => {
      const item = document.createElement("li");
      item.textContent = project.name;

      const active = projectManager.getActiveProject();
      if(active === project) {
        item.classList.add("active-project");
      }
      
      item.addEventListener("click", () => {
        onProjectSelect(project.id);
      });

      list.appendChild(item);
    });

    sidebar.appendChild(list);

}