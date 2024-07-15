// Call this listener when the DOM is loaded
document.addEventListener("DOMContentLoaded", async () => {
    await handleScrapping();
});

// Function to handle the scrapping of the product details first and then save it to the server
async function handleScrapping() {
    // Extract the product data
    const productData = await extractProductInfo();

    // If product data is available then save it to the server
    if (productData && Object.keys(productData).length > 0) {
        const response = await saveProductData(productData);
        console.log("Response: ", response);
    }
}

async function extractProductInfo() {
    const productData = {};
    try {
        // Get product name
        productData["name"] = document.querySelector("span[data-automation='product-title']")?.innerHTML;
        // Get review and review count
        productData["review"] = document.querySelector("div[itemprop='ratingValue']")?.innerHTML;
        productData["reviewCount"] = document.querySelector('meta[itemprop="reviewCount"]').getAttribute('content');

        // Get all the nodes color and loop through to get the color and image url
        let colorThumbnails = document.querySelectorAll('.css-5kov97 > a');
        productData["colorVarient"] = Array.from(colorThumbnails).map(thumbnail => {
            return {
                color: thumbnail.getAttribute('value'),
                url: thumbnail.querySelector('img').getAttribute('src')
            };
        });

        // Get all the size variants and loop through to get the text and value
        let sizeVariants = document.querySelectorAll('.css-16fbgeu .css-rn8mzq');
        productData["sizeVarient"] = Array.from(sizeVariants).map(variant => {
            return {
                value: variant.querySelector('input').value,
                text: variant.querySelector('span').textContent
            };
        });

        // Get all the price info and loop through to get the currency and value
        const priceTextContent = document.querySelector("div[data-automation='price-text-container'] h3")?.innerHTML;
        if (priceTextContent) {
            productData["priceInfo"] = {
                currency: priceTextContent.charAt(0),
                value: priceTextContent.slice(1)
            };
        }
    } catch (err) {
        console.log("Extraction Err", err);
    }

    console.log("Product Info", JSON.stringify(productData))
    return productData;
}

// Save the product data to the server
async function saveProductData(data) {
    const response = await fetch("http://dummy-host-url/api/dummy-post-product-method", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        console.error("Error: " + response.statusText);
        return;
    }

    return await response.json();
}