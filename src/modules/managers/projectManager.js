import createProject from "../factories/project.js";
import createTodo from "../factories/todo.js";

const projects = [];

function addProject(name) {
  const project = createProject(name);

  projects.push(project);

  return project;
}

function getProjects() {
  return projects;
}

function getProject(name) {
  return projects.find((project) => project.name === name);
}

function addTodo(projectName, todoData) {
  const project = getProject(projectName);

  if (!project) return;

  const todo = createTodo(todoData);

  project.addTodo(todo);

  return todo;
}

export default {
  addProject,
  getProjects,
  getProject,
  addTodo,
};