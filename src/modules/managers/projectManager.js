import createProject from "../factories/project.js";
import createTodo from "../factories/todo.js";

const projects = [];
let activeProject = null;

function setActiveProject(projectId) {
  activeProject = getProjectById(projectId);
}

function getActiveProject() {
  return activeProject;
}

function addProject(name) {
  const project = createProject(name);

  projects.push(project);

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

  return todo;
}

export default {
  addProject,
  getProjects,
  getProjectById,
  addTodo,
  setActiveProject,
  getActiveProject,
};