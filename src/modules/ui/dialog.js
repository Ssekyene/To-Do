export function openProjectDialog(onCreate) {
  const dialog = document.createElement("dialog");

  dialog.innerHTML = `
    <form id="project-form">
      <h2>New Project</h2>

      <p class="dialog-subtitle">
        Organize your tasks into a new project.
      </p>

      <label for="project-name">
        Project Name
      </label>

      <input
        id="project-name"
        name="projectName"
        type="text"
        placeholder="e.g. Work"
        required
        autofocus
      />

      <menu class="dialog-actions">
        <button
          type="button"
          id="cancel-btn"
          class="cancel-btn"
        >
          Cancel
        </button>

        <button
          type="submit"
          class="primary-btn"
        >
          Create Project
        </button>
      </menu>
    </form>
`;

  document.body.appendChild(dialog);

  dialog.showModal();

  // close the dialog on outside click
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  const form = dialog.querySelector("#project-form");
  const cancelButton = dialog.querySelector("#cancel-btn");

  form.addEventListener("submit", (event) => {
      event.preventDefault();

      const projectName = form.projectName.value.trim();

      if (!projectName) return;
      
      onCreate(projectName);
      dialog.close();
      dialog.remove();

  });

  cancelButton.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("close", () => {
      dialog.remove();
  });

}


export function openTodoDialog(onCreate) {
  const dialog = document.createElement("dialog");

  dialog.innerHTML = `
    <form id="todo-form">

      <h2>New Todo</h2>

      <p class="dialog-subtitle">
        Add a task to your project.
      </p>

      <label for="todo-title">
        Title
      </label>

      <input
        id="todo-title"
        name="title"
        type="text"
        placeholder="e.g. Finish Webpack lesson"
        required
        autofocus
      >

      <label for="todo-description">
        Description
      </label>

      <textarea
        id="todo-description"
        name="description"
        placeholder="What needs to be done?"
        rows="4"
      ></textarea>

      <label for="todo-due-date">
        Due Date
      </label>

      <input
        id="todo-due-date"
        name="dueDate"
        type="date"
      >

      <label for="todo-priority">
        Priority
      </label>

      <select id="todo-priority" name="priority">
        <option value="low">Low</option>
        <option value="medium" selected>Medium</option>
        <option value="high">High</option>
      </select>

      <menu class="dialog-actions">

        <button
          type="button"
          id="cancel-btn"
          class="cancel-btn"
        >
          Cancel
        </button>

        <button
          type="submit"
          class="primary-btn"
        >
          Create Todo
        </button>

      </menu>

    </form>
  `;

  document.body.appendChild(dialog);

  dialog.showModal();

  // close the dialog on outside click
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  const form = dialog.querySelector("#todo-form");
  const cancelButton = dialog.querySelector("#cancel-btn");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const todoData = {
      title: form.title.value.trim(),
      description: form.description.value.trim(),
      dueDate: form.dueDate.value,
      priority: form.priority.value,
    };

    if (!todoData.title) return;

    onCreate(todoData);

    dialog.close();
  });

  cancelButton.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("close", () => {
    dialog.remove();
  });
}


export function openTodoDetailsDialog(todo, onSave) {
  const dialog = document.createElement("dialog");

  dialog.innerHTML = `
    <form id="todo-details-form">

      <h2>Edit Todo</h2>

      <label for="todo-title">
        Title
      </label>

      <input
        id="todo-title"
        name="title"
        type="text"
        value="${todo.title}"
        required
      >

      <label for="todo-description">
        Description
      </label>

      <textarea
        id="todo-description"
        name="description"
        rows="4"
      >${todo.description}</textarea>

      <label for="todo-due-date">
        Due Date
      </label>

      <input
        id="todo-due-date"
        name="dueDate"
        type="date"
        value="${todo.dueDate}"
      >

      <label for="todo-priority">
        Priority
      </label>

      <select
        id="todo-priority"
        name="priority"
      >
        <option
          value="low"
          ${todo.priority === "low" ? "selected" : ""}
        >
          Low
        </option>

        <option
          value="medium"
          ${todo.priority === "medium" ? "selected" : ""}
        >
          Medium
        </option>

        <option
          value="high"
          ${todo.priority === "high" ? "selected" : ""}
        >
          High
        </option>
      </select>

      <menu class="dialog-actions">

        <button
          type="button"
          id="cancel-btn"
          class="cancel-btn"
        >
          Cancel
        </button>

        <button
          type="submit"
          class="primary-btn"
        >
          Save Changes
        </button>

      </menu>

    </form>
  `;

  document.body.appendChild(dialog);

  dialog.showModal();

  // close the dialog on outside click
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  const form = dialog.querySelector("#todo-details-form");
  const cancelButton = dialog.querySelector("#cancel-btn");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const updatedData = {
      title: form.title.value.trim(),
      description: form.description.value.trim(),
      dueDate: form.dueDate.value,
      priority: form.priority.value,
    };

    if (!updatedData.title) return;

    onSave(updatedData);

    dialog.close();
  });

  cancelButton.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("close", () => {
    dialog.remove();
  });
}

export function openDeleteTodoDialog(todo, onConfirm) {
  const dialog = document.createElement("dialog");

  dialog.innerHTML = `
    <form id="delete-todo-form">

      <h2>Delete Todo?</h2>

      <p>
        Are you sure you want to delete
        <strong>${todo.title}</strong>?
      </p>

      <menu class="dialog-actions">

        <button
          type="button"
          id="cancel-btn"
          class="cancel-btn"
        >
          Cancel
        </button>

        <button
          type="submit"
          class="danger-btn"
        >
          Delete
        </button>

      </menu>

    </form>
  `;

  document.body.appendChild(dialog);

  dialog.showModal();

  // close the dialog on outside click
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  const form = dialog.querySelector("#delete-todo-form");
  const cancelButton = dialog.querySelector("#cancel-btn");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    onConfirm();

    dialog.close();
  });

  cancelButton.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("close", () => {
    dialog.remove();
  });
}