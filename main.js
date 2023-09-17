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

//xóa SP
function delProduct(id) {
  delProductByID(id)
    .then(function (res) {
      fetchProductsList();
      console.log("sản phẩm bị xóa", res.data);
    })
    .catch(function (err) {
      console.log("err", err);
    });
}

//Thêm sản phẩm
function addProduct() {
  var sp = getInfor();
  console.log("sp: ", sp);

  addNewProduct(sp)
    .then(function (res) {
      console.log("res", res);
      $("#myModal").modal("hide");

      fetchProductsList();
    })
    .catch(function (err) {
      console.log(err);
    });
}

function editProduct(id) {
  getProductByID(id)
    .then(function (res) {
      console.log("res", res.data);
      var sp = res.data;

      document.querySelector("#name").value = sp.name;
      document.querySelector("#price").value = sp.price;
      document.querySelector("#screen").value = sp.screen;
      document.querySelector("#backCamera").value = sp.backCamera;
      document.querySelector("#frontCamera").value = sp.frontCamera;
      document.querySelector("#img").value = sp.img;
      document.querySelector("#desc").value = sp.desc;
      document.querySelector("#type").value = sp.type;

      $("#myModal").modal("show");
    })
    .catch(function (err) {
      console.log("err", err);
    });
}

function updateProduct() {
  var sp = getInfor();
  console.log("sp: ", sp);

  updateProductByID(sp.id, sp)
    .then(function (res) {
      console.log("res", res);

      $("#myModal").modal("hide");

      fetchProductsList();
    })
    .catch(function (err) {
      console.log("err", err);
    });
}

// function searchProductByName() {
//   var name = document.querySelector("#txtSearch").value.trim()?.toLowerCase();
//   getProductList()
//     .then(function (res) {
//       console.log("res", res);
//       var productsList = res.data;
//       var result = productsList.filter(function (sp) {
//         return sp.tenSP.toLowerCase().includes(name);
//       });

//       renderProductsList(result);
//     })
//     .catch(function (err) {
//       console.log("err", err);
//     });
// }

// //tìm kiếm bằng sự kiện nhấn nút enter
// document
//   .querySelector("#txtSearch")
//   .addEventListener("keydown", function (event) {
//     console.log("event", event);
//     // event laf 1 object chứa thông tin về sự kiện
//     // event.target: trả ra cái element phát sinh ra sự kiện
//     // event.key: trả ra phím vừa mới nhấn
//     // khi nào người dùng nhấn enter mới bắt đầu tìm kiếm, tất cả những phím ko phải enter sẽ return

//     if (event.key !== "Enter") return;

//     var name = event.target.value;
//     getProductList(name)
//       .then(function (res) {
//         console.log("res: ", res.data);
//         renderProductsList(res.data);
//       })
//       .catch(function (err) {
//         console.log("err", err);
//       });
//   });

// // bắt sự kiện thay đổi của select box bằng sự kiện onchange
