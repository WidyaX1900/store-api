const productList = document.getElementById("productList");
const searchForm = document.getElementById("searchForm");
const keyword = document.getElementById("keyword");
const productImage = document.getElementById("productImage");
const productInfo = document.getElementById("productInfo");

async function getDatas(resource) {
  let data = await fetch(resource);
  let result = await data.json();

  return result;
}

function consumeData(products) {
  for (let i = 0; i < products.length; i++) {
    let content = `
        <div class="col-4 p-3">
                <div class="card rounded p-3">
                    <img src="${products[i].images[0]}" class="img-fluid" height="200px">
                    <h5 class="mt-3">${products[i].title}</h5>
                    <p>
                        ${products[i].description}
                    </p>
                    <button type="button" class="btn btn-info detail-btn"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${products[i].id}">
                        <i class="fa-solid fa-eye"></i>
                        View
                    </button>
                </div>
            </div>    
        `;
    productList.innerHTML += content;
  }
}

// Menampilkan data ke halaman index
getDatas("https://dummyjson.com/products/").then((data) => {
  const products = data.products;
  consumeData(products);
});

// Mencari data produk
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  productList.innerHTML = "";
  getDatas("https://dummyjson.com/products/search?q=" + keyword.value).then(
    (data) => {
      const result = data.products;
      consumeData(result);
    }
  );
});

// Menampilkan info produk
productList.addEventListener("click", (e) => {
  if (e.target.classList.contains("detail-btn")) {
    const id = e.target.dataset.id;
    getDatas("https://dummyjson.com/products/" + id).then((data) => {
      productImage.setAttribute("src", data.images[0]);
      let content = `
        <h5 class="mb-3">${data.title}</h5>
        <div class="mb-3">
            <strong>Brand:</strong> ${data.brand}
        </div>
        <div class="mb-3">
            <strong>Category:</strong> ${data.category}
        </div>
        <div class="mb-3">
            <strong>Description:</strong> ${data.description}
        </div>
    `;
      productInfo.innerHTML = content;
    });
  }
});
