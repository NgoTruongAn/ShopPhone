const BASE_URL = "https://65056d34ef808d3c66f005cd.mockapi.io/Products";

function getProductList(name) {
  return axios({
    url: BASE_URL,
    method: "GET",

    
    params: {
      name: name || undefined,
    },
  });
}

