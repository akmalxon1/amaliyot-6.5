async function getPromise() {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=10");
    const data = await response.json();

    data.forEach((item, index) => {
      const box = document.createElement("div");
      box.className = "box";

      const id = document.createElement("p");
      id.textContent = item.id;
      box.appendChild(id);

      const title = document.createElement("p");
      title.textContent = item.title;
      box.appendChild(title);

      const price = document.createElement("p");
      price.textContent = item.price;
      box.appendChild(price);

      const description = document.createElement("p");
      description.textContent = item.description;
      box.appendChild(description);

      const category = document.createElement("p");
      category.textContent = item.category;
      box.appendChild(category);

      const image = document.createElement("img");
      image.setAttribute("src", `${item.image}`);
      box.appendChild(image);

      const rating = document.createElement("div"); rating.rate  = document.createElement("p");
      rating.rate.textContent = item.rating.rate;
      box.appendChild( rating.rate );

  

      image.style = "width: 100px";


      document.body.appendChild(box);
    });
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

getPromise();
