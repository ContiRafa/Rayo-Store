// Variável global para armazenar o método de pagamento selecionado
let selectedPaymentMethod = "";

// Função para atualizar o método de pagamento selecionado
function selectPaymentMethod(method) {
  selectedPaymentMethod = method;
}

// Função para coletar as informações do cliente
function getCustomerInfo() {
  let primeironome = document.getElementById("primeironome").value;
  let segundonome = document.getElementById("segundonome").value;
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("telefone").value;
  let endereco = document.getElementById("endereco").value;
  let numerodacasa = document.getElementById("numerodacasa").value;
  let bairro = document.getElementById("bairro").value;
  let meiodepagamento = selectedPaymentMethod;

  return {
    primeironome,
    segundonome,
    email,
    telefone,
    endereco,
    numerodacasa,
    bairro,
    meiodepagamento,
  };
}

// Função para coletar os produtos selecionados
function getProducts() {
  let produtos = "";
  let total = 0;
  let products = document.querySelectorAll(".order-products .order-col");
  products.forEach((product) => {
    let productName = product.children[0].textContent;
    let productPrice = product.children[1].textContent;
    produtos += `*${productName}:* ${productPrice}\n`;
    total += parseFloat(productPrice.replace("R$", "").replace(",", "."));
  });

  return {
    produtos,
    total,
  };
}

// Função sendToWhatsapp
function sendToWhatsapp() {
  let number = "+5516988543993"; /*ENVIAR O PEDIDO PARA ESSE CELULAR*/
  let message = "";

  // Coletar as informações do cliente
  let customerInfo = getCustomerInfo();

  // Coletar os produtos selecionados
  let products = getProducts();

  // Montar a mensagem
  message += `*Informações do cliente:*\n`;
  message += `*Nome:* ${customerInfo.primeironome} ${customerInfo.segundonome}\n`;
  message += `*Email:* ${customerInfo.email}\n`;
  message += `*Telefone:* ${customerInfo.telefone}\n`;
  message += `*Endereço:* ${customerInfo.endereco}\n`;
  message += `*Número da casa:* ${customerInfo.numerodacasa}\n`;
  message += `*Bairro:* ${customerInfo.bairro}\n`;
  message += `*Meio de pagamento:* ${customerInfo.meiodepagamento}\n\n`;
  message += `*Produtos:*\n${products.produtos}\n`;
  message += `*Total:* R$${products.total.toFixed(2)}`;

  // Enviar a mensagem para o WhatsApp
  var url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank").focus();
}



//----------------------------------------------------------------------------------------------//

function addToCart(button) {
  // Encontra o elemento do produto mais próximo
  var productElement = button.closest('.product');
  
  // Lê o nome do produto
  var productName = productElement.querySelector('.nameproduct').textContent;
  
  // Lê o preço do produto e remove o símbolo de moeda para conversão
  var productPrice = parseFloat(productElement.querySelector('.productprice').textContent.replace('$', ''));
  
  // Cria uma variável para armazenar o nome e o preço do produto
  var productInfo = {
      name: productName,
      price: productPrice,
  };

  // Adiciona o produto à lista de produtos adicionados na tela
  var productList = document.getElementById('product-list');
  var productItem = document.createElement('li');
  productItem.textContent = `Produto: ${productInfo.name} - Preço: $${productInfo.price.toFixed(2)}`;
  productList.appendChild(productItem);

  // Atualiza o total da compra
  var totalElement = document.getElementById('total-amount');
  var currentTotal = parseFloat(totalElement.textContent.replace('$', '')) || 0;
  var newTotal = currentTotal + productInfo.price;
  totalElement.textContent = `$${newTotal.toFixed(2)}`;
}