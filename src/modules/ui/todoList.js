import projectManager from "../managers/projectManager.js";
import { formatTodoDate } from "../utils/date.js";


export default function renderTodoList(main) {
  main.replaceChildren();

  const project = projectManager.getActiveProject();

  const pageContent = document.createElement("div");
  pageContent.className = "page-content";

  const header = document.createElement("div");
  header.classList.add("page-header");

  const headerSection = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = project.name;

  const description = document.createElement("p");
  description.textContent = "Your tasks";

  headerSection.append(heading, description);

  const addTodoButton = document.createElement("button");
  addTodoButton.id = "new-todo-btn";
  addTodoButton.classList.add("add-todo-btn");
  addTodoButton.textContent = "+ Add task";

  header.append(headerSection, addTodoButton);

  main.appendChild(header);

  const todos = project.todos;
  const todoList = document.createElement("div");
  todoList.id = "todo-list";

  todos.forEach((todo) => {
    const card = document.createElement("article");

    card.classList.add(
      "todo-card",
      todo.priority
    );

    if (todo.completed) {
      card.classList.add("completed");
    }
    card.dataset.todoId = todo.id;

    card.innerHTML = `
      <div class="todo-card-content">
        <input
          type="checkbox"
          class="todo-checkbox"
          aria-label="Mark ${todo.title} as complete"
          ${todo.completed ? "checked": ""}
        >

        <div>
          <h3>${todo.title}</h3>

          <p>
            ${todo.description || "No description"}
          </p>

          <span class="todo-date">
            ${formatTodoDate(todo.dueDate) || "No due date"}
          </span>
        </div>

      </div>

      <div class="todo-card-actions">
        <span class="priority-label">
          ${todo.priority}
        </span>

        <button
          type="button"
          class="edit-todo-btn"
          title="Edit"
          aria-label="Edit ${todo.title}"
        >
          <i data-lucide="pencil"></i>
        </button>

        <button
          type="button"
          class="delete-todo-btn"
          title="Delete"
          aria-label="Delete ${todo.title}"
        >
          <i data-lucide="trash-2"></i>
        </button>
        
      </div>
    `;

    todoList.append(card);
  });

  pageContent.appendChild(todoList);

  const footer = document.createElement("footer");
  footer.className = "app-footer";

  footer.innerHTML = `
    <span>© 2026 Robert Ssekyene</span>
    <span>·</span>
    <a
      href="https://github.com/Ssekyene"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
  `;

  main.append(pageContent, footer);
}