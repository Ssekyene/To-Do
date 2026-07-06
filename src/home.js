export default function loadHome() {
  const content = document.querySelector("#content");

  const home = document.createElement("div");
  home.classList.add("home");

  const title = document.createElement("h1");
  title.textContent = "Welcome to Gumite Restaurant";

  const tagline = document.createElement("p");
  tagline.textContent =
    "Fresh food, warm hospitality, and unforgettable dining experiences.";

  const description = document.createElement("p");
  description.textContent =
    "Experience delicious local and international cuisine prepared with fresh ingredients and served in a warm, welcoming atmosphere.";

  const image = document.createElement("img");

  image.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4";
  image.alt = "Restaurant interior";

  const hours = document.createElement("p");
  hours.textContent ="Open Daily: 8:00 AM - 11:00 PM";

  home.append(title, image, tagline, description, hours);

  //content.appendChild(home);

  return home;
}