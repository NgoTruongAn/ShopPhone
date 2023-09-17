function renderProductsList(productsList) {
  var content = "";
  for (var i = 0; i < productsList.length; i++) {
    var product = productsList[i];
    var contentTr = `
        <tr>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>
            <img src="${product.img}" alt="" width="300" height="150" />
           </td>
            <td>${product.desc}</td>
            <td>${product.type}</td>
            <td>
                <button class="btn btn-warning" onclick="editProduct(${product.id})">Edit</button>
                <button class="btn btn-danger" onclick="delProduct(${product.id})">Delete</button>
            </td>
        </tr>
        `;

    content += contentTr;
  }

  document.querySelector("#tableListProduct").innerHTML = content;
}

function getInfor() {
  var name = document.querySelector("#name").value;
  var price = document.querySelector("#price").value;
  var screen = document.querySelector("#screen").value;
  var backCamera = document.querySelector("#backCamera").value;
  var frontCamera = document.querySelector("#frontCamera").value;
  var img = document.querySelector("#img").value;
  var desc = document.querySelector("#desc").value;
  var type = document.querySelector("#type").value;

  return new Product(name, price, screen, backCamera, frontCamera, img, desc, type);
}
