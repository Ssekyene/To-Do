import "./styles.css";
import renderApp from "./modules/ui/render.js";
import projectManager from "./modules/managers/projectManager.js";

// Create the default project when the app starts
projectManager.addProject("Inbox");

projectManager.setActiveProject("Inbox"); // active by default

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

projectManager.addProject("Work");

projectManager.addTodo("Work", {
  title: "Finish The Contract",
  description: "Complete the Cyber School project",
  dueDate: "2026-09-30",
  priority: "high",
});

projectManager.addProject("Shopping");

projectManager.addTodo("Shopping", {
  title: "Buy gentle trousers",
  description: "Find some good affordable gentle trousers from town",
  dueDate: "2026-07-20",
  priority: "high",
});

projectManager.addTodo("Shopping", {
  title: "Buy cool shirts",
  description: "Find some good affordable cool shirts from town",
  dueDate: "2026-07-20",
  priority: "medium",
});

projectManager.addTodo("Shopping", {
  title: "Buy a bag",
  description: "Find some fancy bag from town",
  dueDate: "2026-07-20",
  priority: "low",
});


//console.log(projectManager.getProjects());

renderApp();