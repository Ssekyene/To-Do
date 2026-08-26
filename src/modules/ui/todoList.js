import projectManager from "../managers/projectManager.js";

export default function renderTodoList(main) {
  main.replaceChildren();

  const project = projectManager.getActiveProject();

  const header = document.createElement("div");
  header.classList.add("todo-header");

  const heading = document.createElement("h1");
  heading.textContent = project.name;

  const addTodoButton = document.createElement("button");
  addTodoButton.id = "new-todo-btn";
  addTodoButton.textContent = "+ New Todo";

  header.append(heading, addTodoButton);

  main.appendChild(header);

  const todos = project.getTodos();
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
          ${todo.completed ? "checked": ""}
        >

        <div>
          <h3>${todo.title}</h3>

          <p>
            ${todo.description || "No description"}
          </p>

          <span class="todo-date">
            ${todo.dueDate || "No due date"}
          </span>
        </div>

      </div>

      <div class="todo-card-actions">
        <span class="priority-label">
          ${todo.priority}
        </span>

        <button
          type="button"
          class="delete-todo-btn"
          aria-label="Delete ${todo.title}"
        >
          Delete
        </button>
        
      </div>
    `;

    todoList.append(card);
  });

  main.appendChild(todoList);
}