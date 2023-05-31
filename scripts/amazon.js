let productsHTML = "";
const productsGrid = document.querySelector(".products-grid");

products.forEach((element) => {
  productsHTML += `<div class="product-container">
          <div class="product-image-container">
            <img
              class="product-image"
              src= ${element.image}
            />
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${element.name}
          </div>

          <div class="product-rating-container">
            <img
              class="product-rating-stars"
              src="images/ratings/rating-${element.rating.stars * 10}.png"
            />
            <div class="product-rating-count link-primary">${
              element.rating.count
            }</div>
          </div>

          <div class="product-price">$${(element.priceCents / 100).toFixed(
            2
          )}</div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button class="add-to-cart-button button-primary" data-product-id="${
            element.id
          }"
            >Add to Cart</button>
        </div>`;
});
productsGrid.innerHTML = productsHTML;

const allAddToCartButtons = document.querySelectorAll(".add-to-cart-button");
allAddToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId; // this productId gets converted from data-product-id
    const existingProduct = cart.find((item) => item.productId === productId);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
      });
    }

    console.log(cart);
  });
});
