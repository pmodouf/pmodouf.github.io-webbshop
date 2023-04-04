const product = JSON.parse(localStorage.getItem('product'));

const productImage = document.createElement('img');
productImage.src = product.image;

const productName = document.createElement('h2');
productName.textContent = product.name;

const productPrice = document.createElement('p');
productPrice.textContent = `Price: ${product.price}`;

const confirmationMessage = document.querySelector('#confirmation-message');
confirmationMessage.appendChild(productImage);
confirmationMessage.appendChild(productName);
confirmationMessage.appendChild(productPrice);

const formData = JSON.parse(localStorage.getItem("formData"));

const nameElement = document.createElement("p");
nameElement.innerText = `Name: ${formData.name}`;
document.querySelector("#product").appendChild(nameElement);

const emailElement = document.createElement("p");
emailElement.innerText = `Email: ${formData.email}`;
document.querySelector("#product").appendChild(emailElement);

const phoneElement = document.createElement("p");
phoneElement.innerText = `Phone: ${formData.phone}`;
document.querySelector("#product").appendChild(phoneElement);

const addressElement = document.createElement("p");
addressElement.innerText = `Address: ${formData.address}`;
document.querySelector("#product").appendChild(addressElement);

const postalCodeElement = document.createElement("p");
postalCodeElement.innerText = `Postal Code: ${formData.postalCode}`;
document.querySelector("#product").appendChild(postalCodeElement);

const cityElement = document.createElement("p");
cityElement.innerText = `City: ${formData.city}`;
document.querySelector("#product").appendChild(cityElement);


