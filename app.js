class Product {
	constructor(name, price, year) {
		this.name = name;
		this.price = price;
		this.year = year;
	}
}

class ui {
	addProduct(product) {
        const list = document.getElementById("product-list")
        const element = document.createElement("div")
        element.innerHTML = `
                <div class="list-body">
                    <strong>Product Name</strong>: ${product.name}
                    <strong>Product price</strong>: ${product.price}
                    <strong>Product Year</strong>: ${product.year}
                    <a href="#" class="delete" name="delete">Delete</a>
                </div>
        `
        list.appendChild(element) 
    }

    resetForm() {
        document.getElementById("product-form").reset();
    }

	delete(element) {
        if(element.name === "delete") {
            console.log(element.parentElement.parentElement.remove());  
        }
    }

	showMessage() {}
}

document.getElementById("product-form")
    .addEventListener("submit", (e) => {
        const name = document.getElementById("product-name").value
        const price = document.getElementById("product-price").value
        const year = document.getElementById("product-year").value

        const product = new Product(name, price, year)

        const UI = new ui()
        UI.addProduct(product)
        UI.resetForm()
        

        e.preventDefault()
    });
document.getElementById("product-list").addEventListener("click", (e) => {
    const UI = new ui()
    UI.delete(e.target)
})