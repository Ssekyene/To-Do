export default function renderSidebar() {
    const sidebar = document.querySelector("#sidebar");
    sidebar.replaceChildren();
    const title = document.createElement("h1");
    title.textContent = "To-Do";
    sidebar.appendChild(title);

}