export default function loadMenu() {
  const content = document.querySelector("#content");

  const menu = document.createElement("div");
  menu.classList.add("menu");

  const title = document.createElement("h1");
  title.textContent = "Our Menu";

  /*const item1 = document.createElement("p");
  item1.textContent = "🍔 Beef Burger - $8";

  const item2 = document.createElement("p");
  item2.textContent = "🍕 Margherita Pizza - $12";

  const item3 = document.createElement("p");
  item3.textContent = "🍝 Spaghetti Bolognese - $10";

  const item4 = document.createElement("p");
  item4.textContent = "🥤 Fresh Juice - $3"; */

  function createMenuItem(name, price) {
  const item = document.createElement("div");

  item.classList.add("menu-item");

  item.innerHTML = `
    <h3>${name}</h3>
    <p>${price}</p>
  `;

  return item;
}

menu.append(
  title,
  createMenuItem("Beef Burger", "$8"),
  createMenuItem("Margherita Pizza", "$12"),
  createMenuItem("Spaghetti Bolognese", "$10"),
  createMenuItem("Fresh Juice", "$3")
);

  //content.appendChild(menu);
  return menu;
}