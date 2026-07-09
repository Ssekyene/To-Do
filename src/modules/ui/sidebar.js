import projectManager from "../managers/projectManager.js";

export default function renderSidebar() {
    const sidebar = document.querySelector("#sidebar");

    sidebar.replaceChildren();

    const title = document.createElement("h1");
    title.textContent = "To→Do";
    sidebar.appendChild(title);

    // render projects
    const heading = document.createElement("h2");
    heading.textContent = "Projects";
    heading.style.marginTop = "2rem";

    sidebar.appendChild(heading);

    const list = document.createElement("ul");

    projectManager.getProjects().forEach((project) => {
      const item = document.createElement("li");
      item.textContent = project.name;

      list.appendChild(item);
    });

    sidebar.appendChild(list);
}