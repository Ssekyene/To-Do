import "./styles.css";
import renderApp from "./modules/ui/render.js";
import projectManager from "./modules/managers/projectManager.js";

// Create the default project when the app starts
projectManager.addProject("Inbox");

renderApp();