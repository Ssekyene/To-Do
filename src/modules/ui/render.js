import projectManager from "../managers/projectManager.js";
import renderSidebar from "./sidebar.js";
import renderTodoList from "./todoList.js";

export default function renderApp() {
  const main = document.querySelector("#main-content");

  // a call back funtion that executes when an item in the side bar
  // is clicked on
  renderSidebar((projectId) => {
    projectManager.setActiveProject(projectId);

    renderApp();
  });

  renderTodoList(main);
}