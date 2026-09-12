import createProject from "../factories/project.js";
import createTodo from "../factories/todo.js";
import { saveData, loadData } from "../storage/storage.js"; 

// initialise all the project defaults here
let projects = [];
let activeProjectId = "";

// load existing projects
const loaded = load();
console.log("Loaded?", loaded);

if (!loaded) {
  console.log("Loaded?", loaded);
  // add default projects when the app starts
  const inbox = addProject("Inbox");
  
  setActiveProject(inbox.id); // active by default
  console.log("active project:", getActiveProject().name);
  
  addTodo(inbox.id, {
    title: "Finish The Odin Project",
    description: "Complete the Todo List project",
    dueDate: "2026-07-15",
    priority: "high",
  });
  
  addTodo(inbox.id, {
    title: "Buy groceries",
    priority: "low",
  });
  
  
  //another project
  const work = addProject("Work");
  
  addTodo(work.id, {
    title: "Finish The Contract",
    description: "Complete the Cyber School project",
    dueDate: "2026-09-13",
    priority: "high",
  });
  
  
  //another project
  const shopping = addProject("Shopping");
  
  addTodo(shopping.id, {
    title: "Buy gentle trousers",
    description: "Find some good affordable gentle trousers from town",
    dueDate: "2026-07-20",
    priority: "high",
  });
  
  addTodo(shopping.id, {
    title: "Buy cool shirts",
    description: "Find some good affordable cool shirts from town",
    dueDate: "2026-07-20",
    priority: "medium",
  });
  
  addTodo(shopping.id, {
    title: "Buy a bag",
    description: "Find some fancy bag from town",
    dueDate: "2026-07-20",
    priority: "low",
  });
}

function setActiveProject(projectId) {
  activeProjectId = projectId;
  save();
}

function getActiveProject() {
  return getProjectById(activeProjectId);
}

function addProject(name) {
  const project = createProject(name);

  projects.push(project);

  save();

  return project;
}

function getProjects() {
  return projects;
}

function getProjectById(projectId) {
  return projects.find((project) => project.id === projectId);
}

function addTodo(projectId, todoData) {
  const project = getProjectById(projectId);

  if (!project) return;

  const todo = createTodo(todoData);

  project.addTodo(todo);

  save();

  return todo;
}

function getTodoById(todoId) {
  const project = getActiveProject();

  if (!project) return;

  return project.getTodo(todoId);
}


function updateTodo(todoId, updatedData) {
  const todo = getTodoById(todoId);

  if (!todo) return;

  todo.update(updatedData);

  save();
}

function deleteTodo(todoId) {
  const project = getActiveProject();

  if (!project) return;
  
  project.removeTodo(todoId);

  save();
}

function restoreTodo(todoData) {
  return createTodo(todoData);
}

function save() {
  saveData({
    projects,
    activeProjectId,
  });

}

function load() {
  const data = loadData();

  if (!data) return false;

  projects = data.projects.map((projectData) => {
    // recreate project
    const project = createProject(projectData.name, projectData.id);

    // Restore todos with their methods
    projectData.todos.forEach(todoData => {
      const todo = createTodo(todoData);
      project.addTodo(todo);
    });

    return project;
  });

  console.log(data);
  activeProjectId = data.activeProjectId || projects[0]?.id || "";
  setActiveProject(activeProjectId);

  return true;
}

export default {
  addProject,
  getProjects,
  getProjectById,
  addTodo,
  setActiveProject,
  getActiveProject,
  getTodoById,
  updateTodo,
  deleteTodo,
  restoreTodo,
  save,
  load,
};