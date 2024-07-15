## Getting Started

There are two tasks in this assignment:

```bash
Task 1: Scrap the product data from the given URL and store it in a database.
Task 2: Replicate a slider(under product details page), and add an Add to cart button underneath each element
```

Open this [url](https://www.myer.com.au/p/converse-chuck-taylor-all-star-hi-sneaker) to see the product details page to scrap.

## Instructions to run the Task 1:
#Approach 1:
1. Clone the repository and checkout to branch test-product.
2. Open the index.html file in the browser.
3. Look into the browser console to see the scrapped data. Also, you will notice that a dummy API has been called to store the scrapped data.
4. Currently, scrapped product name, review, review count, colorVarient, sizeVarient and Price info.
5. And done!


#Approach 2:
1. Clone the repository and checkout to branch test-product.
2. Copy the methods: ```handleScrapping()```, ```extractProductInfo()``` and ```saveProductData()``` from the ```scrap-product-details.js``` file.
3. Open this [url](https://www.myer.com.au/p/converse-chuck-taylor-all-star-hi-sneaker) and inspect the browser console.
4. Paste the copied methods in the browser console tab and hit enter.
5. Call the ```handleScrapping()``` method in the console.
6. Look into the browser console to see the scrapped data. Also, you will notice that a dummy API has been called to store the scrapped data.
7. Currently, scrapped product name, review, review count, colorVarient, sizeVarient and Price info.
8. And done!

## Instructions to run the Task 2:
1. Copy the methods: ```constructAddToCartBtn()``` and ```handleDummyCarousel()``` from the ```add-cart-to-product-slider.js``` file.
2. Open this [url](https://www.myer.com.au/p/converse-chuck-taylor-all-star-hi-sneaker) and inspect the browser console.
3. Paste the copied methods in the browser console tab and hit enter.
4. Call the ```handleDummyCarousel()``` method in the console.
5. You will see a cloned slider section titled with ``` New Recommendation Section ``` below the ```Others also viewed``` carousal section.
6. You will see an Add to cart button underneath each product element in the slider section.
7. Click on the Add to cart button to save the product data in the cart.
8. When successfully added to the cart, you will see a success alert message.
9. Look into the add to cart section to see the added products. (You might need to refresh the page to see the added products in the cart)
10. And done!

