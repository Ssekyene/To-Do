import "./styles.css";
import renderApp from "./modules/ui/render.js";
import projectManager from "./modules/managers/projectManager.js";

// Create the default project when the app starts
projectManager.addProject("Inbox");

projectManager.addTodo("Inbox", {
  title: "Finish The Odin Project",
  description: "Complete the Todo List project",
  dueDate: "2026-07-15",
  priority: "high",
});

projectManager.addTodo("Inbox", {
  title: "Buy groceries",
  priority: "low",
});

console.log(projectManager.getProjects());

renderApp();