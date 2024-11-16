window.onload = (event) => {
    // https://dummyjson.com/docs/products#products-all - This is a dummy API that returns a list of products
    fetch('//dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            let loadingDiv = document.getElementById("loading");
            loadingDiv.style.display = "none";

            let div = document.getElementById("out");
            let result = "";
            data.products.forEach((product, i) => {
                result += "<div>";
                result += "<h3>Id " + product.id + ": " + product.title + "</h3>";
                product.images.forEach((image, j) => {
                    result += "<img src='" + image + "'  style='width: 5rem;' />";
                });
                result += "<article>" + product.description + "</article>";
                result += "</div>";
            });
            div.innerHTML = result;

        });
};
