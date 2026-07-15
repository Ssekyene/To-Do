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