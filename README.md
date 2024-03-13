2 pages - Home page and cart.  All data is fake data

Home page displays image, name, price, add button, remove button

cart displays total, number of items in the cart

There is a navigation bar on all pages

home page pulls in the fake data, maps through it and passes it to the SingleProduct component(name/price/image).  cart and setCart are pulled into Home from the App component, and are passed to the SingleProduct component.

SingleProduct lays out the data on the page using data passed in from the Home page(name/price/image).  It pulls in the cart and setCart sent from the app, through Home.  It uses cart to conditionally render the buttons on the page.  If something is in the Cart then the remove button shows and vice versa.

Cart starts out in the App being empty.  it gets passed to Home, then passed again to SingleProduct.  On the Home page you can add or remove products(name/image/price) from the Cart when the button is clicked.  Each transaction shows up in the Cart, along with the total and the number of items in the Cart.

The Problem:  too much passing around of state, even to components that don't use it

Solution: context api
