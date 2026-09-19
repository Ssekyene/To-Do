import projectManager from "../managers/projectManager.js";
import { 
  openProjectDialog, 
  openTodoDialog, 
  openTodoDetailsDialog, 
  openDeleteTodoDialog, 
  openRenameProjectDialog,
  openDeleteProjectDialog,
 } from "./dialog.js";

export default function registerEvents(renderApp) {
  const newProjectButton = document.querySelector("#new-project-btn");
  const projectList = document.querySelector("#project-list");
  const newTodoButton = document.querySelector("#new-todo-btn");
  const todoList = document.querySelector("#todo-list");
  const projectsSection = document.querySelector(".projects-section");

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
    // using event delegation
    projectList.addEventListener("click", (event) => {

      // handle project actions button click
      const actionsButton = event.target.closest(".project-actions-btn");

      if (actionsButton) {
        event.stopPropagation();

        const projectId = actionsButton.dataset.projectId;

        const menu = projectList.querySelector(
          `.project-actions-menu[data-project-id="${projectId}"]`
        );

        if (!menu) return;

        // hide all the unchosen menus
        projectList.querySelectorAll(".project-actions-menu").forEach((item) => {
          if (item !== menu) {
            item.hidden = true;
          }
        });

        // toggle menu visibility ie hide/show
        if (!menu.hidden) {
          menu.hidden = true;
          return;
        }

        menu.hidden = false;
        menu.style.visibility = "hidden";

        const buttonRect = actionsButton.getBoundingClientRect();

        let top = buttonRect.bottom + 4;
        let left = buttonRect.right - menu.offsetWidth;

        // Keep the menu inside the viewport horizontally.
        if (left < 8) {
          left = 8;
        }

        if (left + menu.offsetWidth > window.innerWidth - 8) {
          left = window.innerWidth - menu.offsetWidth - 8;
        }

        // Open above the button when there isn't enough room below it.
        if (top + menu.offsetHeight > window.innerHeight - 8) {
          top = buttonRect.top - menu.offsetHeight - 4;
        }

        menu.style.top = `${top}px`;
        menu.style.left = `${left}px`;
        menu.style.visibility = "visible";

        // first defer the document event listener handler to 
        // prevent the first click any where on the document from hiding the menu
        setTimeout(() => {
          document.addEventListener(
            "click",
            () => {
              menu.hidden = true;
            },
            { once: true }
          );
        }, 0);

        return;
      }

      // handle a rename button click
      const renameButton = event.target.closest(".rename-project-btn");

      if (renameButton) {
        event.stopPropagation();

        const projectId = renameButton.dataset.projectId;
        const project = projectManager.getProjectById(projectId);

        if (!project) return;

        openRenameProjectDialog(project, (newName) => {
          projectManager.renameProject(projectId, newName);
          renderApp();
        });

        return;
      }

      // handle a delete project click
      const deleteButton = event.target.closest(".delete-project-btn");

      if (deleteButton) {
        event.stopPropagation();

        const projectId = deleteButton.dataset.projectId;
        const project = projectManager.getProjectById(projectId);

        if (!project) return;

        openDeleteProjectDialog(project, () => {
          // Protect the very first project from deletion
          if (project === projectManager.getProjects()[0]) {
            alert(`Oops! Sorry, you can't delete ${project.name} project. However, you can modify it.`);
          }
          projectManager.deleteProject(projectId);
          renderApp();
        });

        return;
      }


      // handle a project navigation click ie opening a certain project
      const projectItem = event.target.closest("[data-project-id]");

      if (!projectItem) return;

      const projectId = projectItem.dataset.projectId;

      projectList.querySelectorAll(".project-actions-menu").forEach((menu) => {
        menu.hidden = true;
      });

      projectManager.setActiveProject(projectId);

      renderApp();
    });
  }

  if (projectsSection) {
  projectsSection.addEventListener("scroll", () => {
    projectList.querySelectorAll(".project-actions-menu").forEach((menu) => {
      menu.hidden = true;
    });
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

        const todo = projectManager.getTodoById(todoId);

        if(!todo) return;

        openDeleteTodoDialog(todo, () => {
          projectManager.deleteTodo(todoId);

          renderApp();
        });

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

        projectManager.save();

        renderApp();

        return;
      }


      // edit
      const editButton = event.target.closest(".edit-todo-btn");
      if (editButton) {
        const todoCard = editButton.closest("[data-todo-id]");
        if (!todoCard) return;

        const todoId = todoCard.dataset.todoId;

        const todo = projectManager.getTodoById(todoId);
        if (!todo) return;

        openTodoDetailsDialog(todo, (updatedData) => {
          projectManager.updateTodo(todoId, updatedData);

          renderApp();
        });

        return;
      }

    });
  }

}