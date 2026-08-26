import projectManager from "../managers/projectManager.js";
import { openProjectDialog, openTodoDialog, openTodoDetailsDialog } from "./dialog.js";

export default function registerEvents(renderApp) {
  const newProjectButton = document.querySelector("#new-project-btn");
  const projectList = document.querySelector("#project-list");
  const newTodoButton = document.querySelector("#new-todo-btn");
  const todoList = document.querySelector("#todo-list");

  if (newProjectButton) {
    newProjectButton.addEventListener("click", () => {
      openProjectDialog((projectName) => {
        const project = projectManager.addProject(projectName);
        projectManager.setActiveProject(project.id);
        
        renderApp();
      });
    });
  }

  if (projectList) {
    projectList.addEventListener("click", (event) => {
      const projectItem = event.target.closest("[data-project-id]");

      if (!projectItem) return;

      const projectId = projectItem.dataset.projectId;

      projectManager.setActiveProject(projectId);

      renderApp();
    });
  }

  if (newTodoButton) {
    newTodoButton.addEventListener("click", () => {
      openTodoDialog((todoData) => {
        const project = projectManager.getActiveProject();
        projectManager.addTodo(project.id, todoData);
        
        renderApp();
      });

    });
  }

  if (todoList) {
    todoList.addEventListener("click", (event) => {
      const todoCard = event.target.closest("[data-todo-id]");

      if (!todoCard) return;

      const todoId = todoCard.dataset.todoId;

      const todo = projectManager.getTodoById(todoId);

      if(!todo) return;
      
      openTodoDetailsDialog(todo, (updatedData) => {
        projectManager.updateTodo(todoId, updatedData);

        renderApp();
      });

    });
  }

}