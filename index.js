 async function fetchProductImages() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      const grid = document.getElementById("grid");

    
      grid.style.display = "grid";
      grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(250px, 1fr))";
      grid.style.gap = "10px";
      grid.style.padding = "10px";

      data.products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";  

        const img = document.createElement("img");
        img.src = product.thumbnail || product.images[0];
        img.alt = product.title;

        img.style.width = "50%";
        img.style.height = "100px";
        img.style.objectFit = "cover";
        img.style.display = "block";
        img.style.margin = "0 auto";
        img.style.borderRadius = "10px";
        card.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
        card.appendChild(img);
        
        const title = document.createElement("h3");
        title.textContent = product.title;
        title.style.fontSize = "16px";
        // title.style.margin = "10px 0 0 0";
        title.style.textAlign = "center"; 
        card.appendChild(title);

        const price = document.createElement("p");
        price.textContent = `$${product.price}`;  
        price.style.fontSize = "14px";
        price.style.color = "#950c0cff"; 
        price.style.textAlign = "center";
        card.appendChild(price);

        const rating = document.createElement("p");
        rating.textContent = `Rating: ${product.rating}`; 
        rating.style.fontSize = "14px";
        rating.style.color = "#ffa500"; 
        rating.style.textAlign = "center";
        card.appendChild(rating);
        
        grid.appendChild(card);
      });
    }

    fetchProductImages();