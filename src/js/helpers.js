
const fetchDataFromCategory = async(category, limit) => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}?limit=${limit}`);
    const data = await res.json();

    return data
}

const numToPrice = function(number) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD"}).format(number)
}


const insertMarkup = async (category, limit = 3) => {
    const mensProductsData = await fetchDataFromCategory(`${category}`, limit);

    const mainEl = document.querySelector("main");

    let finalMarkup = `
    <section class="products-section" id="${category}">
        <h2 class="category">${category.toUpperCase()}</h2>
        <div class="products">
    `

    mensProductsData.forEach((product) => {
        const {image, price, title} = product;

        const markup = `
        <article class="product-card">
            <img class="product-img" src="${image}" alt="Placeholder img" />

            <div class="product-details">
                <p class="product-title">${title}</p>
                <p class="product-price">${numToPrice(price)}</p>
            </div>
            <button class="buy-now-btn">buy now</button>
        </article>
        `
        finalMarkup += markup
    })

    finalMarkup += `
        </div>
        </section>

        
        <div class="color-right"></div>
        <div class="color-left"></div>
    `
    mainEl.insertAdjacentHTML("beforeend", finalMarkup)
}


export {insertMarkup}
