const produtos = document.querySelectorAll('.produto');

const selectContainer = document.querySelector('.select-container');
const redBorder = document.querySelector('.red-border');

  produtos.forEach(produto => {
    produto.addEventListener('mouseover', () => {
      produto.style.transform = 'scale(1.012)';
      
    });

    produto.addEventListener('mouseout', () => {
      produto.style.transform = 'scale(1)';
    });
  });



selectContainer.addEventListener('click', () => {
    redBorder.style.width = `${selectContainer.offsetWidth}px`;
});
function compra(productName, productPrice) {
  // Incrementa o contador do carrinho
  let cartCountElement = document.getElementById('cart-count');
  let currentCount = parseInt(cartCountElement.textContent);
  cartCountElement.textContent = currentCount + 1;

  // Adiciona o item à lista do carrinho
  let cartItemsElement = document.getElementById('cart-items');
  let newItem = document.createElement('li');

  let itemName = document.createElement('span');
  itemName.className = 'cart-item-name';
  itemName.textContent = productName;

  let itemPrice = document.createElement('span');
  itemPrice.className = 'cart-item-price';
  itemPrice.textContent = productPrice;

  newItem.appendChild(itemName);
  newItem.appendChild(itemPrice);
  cartItemsElement.appendChild(newItem);
}

// Adiciona evento para mostrar/ocultar o dropdown do carrinho
document.getElementById('cart-button').addEventListener('click', function(event) {
  event.stopPropagation();
  let cartDropdown = document.getElementById('cart-dropdown');
  if (cartDropdown.style.display === 'block') {
      cartDropdown.style.display = 'none';
  } else {
      cartDropdown.style.display = 'block';
  }
});

// Esconde o dropdown se clicar fora dele
document.addEventListener('click', function(event) {
  let cartDropdown = document.getElementById('cart-dropdown');
  if (!event.target.closest('.cart-container')) {
      cartDropdown.style.display = 'none';
  }
});