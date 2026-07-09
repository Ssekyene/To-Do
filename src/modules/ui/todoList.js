import projectManager from "../managers/projectManager.js";

export default function renderTodoList(main) {
  main.replaceChildren();

  const project = projectManager.getActiveProject();

  const heading = document.createElement("h1");
  heading.textContent = project.name;

  main.appendChild(heading);

  const todos = project.getTodos();

  todos.forEach((todo) => {
    const card = document.createElement("div");

    card.classList.add("todo-card");

    card.innerHTML = `
      <h3>${todo.title}</h3>
      <p>${todo.dueDate || "No due date"}</p>
      <p>Priority: ${todo.priority}</p>
    `;

    main.appendChild(card);
  });
}