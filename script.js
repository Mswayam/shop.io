let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <div class="flex justify-between items-center mb-2">
        <span>${item.name} - ₹${item.price.toFixed(2)}</span>
        <button onclick="removeFromCart(${index})" class="text-red-500">Remove</button>
      </div>`;
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = `₹${total.toFixed(2)}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("hidden");
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener("scroll", () => {
  document.getElementById("scrollTop").style.display = window.scrollY > 300 ? "block" : "none";
});

// Cookie Consent
function acceptCookies() {
  document.cookie = "cookieConsent=true; max-age=31536000; path=/";
  document.getElementById("cookieConsent").classList.add("hidden");
}

window.onload = () => {
  if (!document.cookie.includes("cookieConsent=true")) {
    document.getElementById("cookieConsent").classList.remove("hidden");
  }
};
