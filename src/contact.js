export default function loadContact() {
  const content = document.querySelector("#content");

  const contact = document.createElement("div");
  contact.classList.add("contact");

  const title = document.createElement("h1");
  title.textContent = "Contact Us";

  const phone = document.createElement("p");
  phone.textContent = "📞 +256 700 123 456";

  const email = document.createElement("p");
  email.textContent = "✉️ info@gumite.com";

  const address = document.createElement("p");
  address.textContent = "📍 Kampala, Uganda";

  contact.append(title, phone, email, address);

  //content.appendChild(contact);
  return contact;
}