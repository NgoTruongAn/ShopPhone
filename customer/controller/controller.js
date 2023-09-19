function renderProductsList(productsList) {
  var content = "";
  for (var i = 0; i < productsList.length; i++) {
    var product = productsList[i];
    var contentTr = `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card cardPhone">
        <img src="${product.img}" alt="" width="230" height="240" />
        <div class="card-body">
            <div>
              <h3 class="cardPhone__title">${product.name}</h3>
            </div>
            <div>
              <p class="cardPhone__text">${product.desc}</p>
            </div>
          <div class="d-flex justify-content-between">
            <div class="cardPhone__title">
              <h3 >${product.price}$</h3>
            </div>
            <div>
              <button class=btnPhone-shadow>
                <i class="fa fa-shopping-cart"></i>Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
        `;

    content += contentTr;
  }
  document.querySelector("#row").innerHTML = content;
}

function fetchProductsList() {
  getProductList()
    .then(function (res) {
      console.log("res", res.data);
      renderProductsList(res.data);
    })
    .catch(function (err) {
      console.log("err", err);
    });
}

fetchProductsList();
//Lọc type
function selectType() {
  getProductList()
  .then(function (res) {
    console.log("res", res);
    var productsList = res.data;
    const selectValue = document.getElementById("selectList").value;
    var result = productsList.filter(function (sp) {
      return sp.type === (selectValue);

    });
    renderProductsList(result);
  })
  .catch(function (err) {
    console.log("err", err);
  });
}

