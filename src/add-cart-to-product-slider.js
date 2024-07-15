document.addEventListener("DOMContentLoaded", async () => {
    await handleDummyCarousel();
});

function constructAddToCartBtn(parentNode) {
    // Function to handle the "Add to Cart" button click event
    const addToCartBtnClickHandler = async (event) => {
        console.log(event)
        const url = 'https://api-online.myer.com.au/v2/cart/add';
        await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({"orderItem":[{"partNumber":"447073570","quantity":"1.0","itemAttributes":[]}]}),
        })
        alert('Successfully added to cart. please check cart list or refresh the page to view')
    }

    // create a button element
    const button = document.createElement("button");
    button.innerText = "Add To Bag";
    // add some styles to the button
    button.style.backgroundColor = 'rgb(252, 87, 50)';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.padding = '10px';
    button.style.width = '100%';
    button.style.textAlign = 'center';
    button.style.textDecoration = 'none';
    button.style.display = 'inline-block';
    button.style.fontSize = '16px';
    button.style.margin = '10px 0';
    button.style.cursor = 'pointer';

    button.setAttribute("id", `add-to-cart-btn-${parentNode.getAttribute('data-dy-sku')}`);
    button.setAttribute("type", "button");

    // add onclick event to the button
    button.addEventListener("click", (event) => {
        addToCartBtnClickHandler(event);
    });

    return button;
}

function handleDummyCarousel() {
    const recomContainer = document.getElementById("product-recommendations");

    // Check if recomContainer is not null
    if (recomContainer) {
        if (recomContainer.shadowRoot === null) {
            return;
        }
        const clonedChild = recomContainer.shadowRoot.firstChild.cloneNode(true);
        clonedChild.classList.add('cloned');
        recomContainer.shadowRoot.appendChild(clonedChild);

        const titleEl = recomContainer.shadowRoot.querySelector('div.dyMonitor.cloned div div.dy-recommendations__title-container');
        if (titleEl) titleEl.innerText = "New Recommendation Section";

        const buttonGroupEl = recomContainer.shadowRoot.querySelector('div.dyMonitor.cloned div div.dy-recommendations__tab-container');
        if (buttonGroupEl) buttonGroupEl.remove();

        const parentCarousels = recomContainer.shadowRoot.querySelectorAll("div.dyMonitor.cloned div div.dy-recommendations__content-container");
        parentCarousels.forEach(carousel => {
            const carouselItems = carousel.querySelectorAll("a.dy-recommendation__product");
            carouselItems.forEach(item => {
                item.removeAttribute('href'); // Remove href attribute
                item.appendChild(constructAddToCartBtn(item));
            });
        });
    } else {
        console.log('Element with ID "product-recommendations" does not exist');
    }
}