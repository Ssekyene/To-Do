import renderSidebar from "./sidebar.js";
import renderTodoList from "./todoList.js";

export default function renderApp() {
  const main = document.querySelector("#main-content");

  renderSidebar();
  renderTodoList(main);
}