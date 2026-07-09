import createProject from "../factories/project.js";

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

export default {
  addProject,
  getProjects,
  getProject,
};