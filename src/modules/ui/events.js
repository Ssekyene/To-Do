import { openProjectDialog } from "./dialog.js";

export default function registerEvents() {
  const button = document.querySelector("#new-project-btn");

  if (!button) return;

  button.addEventListener("click", () => {

    openProjectDialog((projectName) => {
      console.log(projectName);
    });

});
}