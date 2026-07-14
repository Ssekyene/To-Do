export function openProjectDialog(onCreate) {
  const dialog = document.createElement("dialog");

  dialog.innerHTML = `
    <form method="dialog">

        <h2>New Project</h2>

        <input
            type="text"
            name="projectName"
            placeholder="Project name"
            required
        >

        <menu>
            <button value="cancel">
                Cancel
            </button>

            <button id="create-btn" value="default">
                Create
            </button>
        </menu>

    </form>
  `;

  document.body.appendChild(dialog);

  dialog.showModal();

  const form = dialog.querySelector("form");

  form.addEventListener("submit", (event) => {
      event.preventDefault();

      const projectName = form.projectName.value.trim();

      if (!projectName) return;
      
      onCreate(projectName);
      dialog.close();
      dialog.remove();

  });

  dialog.addEventListener("close", () => {
      dialog.remove();
  });

}