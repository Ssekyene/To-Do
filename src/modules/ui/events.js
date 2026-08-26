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
    // using event delegation
    todoList.addEventListener("click", (event) => {
      
      // delete
      const deleteButton = event.target.closest(".delete-todo-btn");
      if (deleteButton) {
        const todoCard = deleteButton.closest("[data-todo-id]");

        const todoId = todoCard.dataset.todoId;

        projectManager.deleteTodo(todoId);

        renderApp();

        return;
      }

      // complete
      const checkbox = event.target.closest(".todo-checkbox");
      if (checkbox) {
        const todoCard = checkbox.closest("[data-todo-id]");
        const todoId = todoCard.dataset.todoId;
        const todo = projectManager.getTodoById(todoId);

        if(!todo) return;

        todo.toggleComplete();

        renderApp();

        return;
      }

      // open details
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