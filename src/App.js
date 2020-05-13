import React from "react";
import "./App.scss";
import ProductCard from "./components/ProductCard";
import ShoppingCartItem from "./components/ShoppingCartItem";

// Render the products dinamically with a loop
import products from "./products";


function App() {
  const purchasedItems = [];

  function handleRemove() {
    console.log("handleRemove");
  }

  function handleChange() {
    console.log("handleChange");
  }

  return (
    <main className="container-fluid">
      <div className="row">

        <div className="col col-6 col-lg-8 p-4">
          <section className="row row-cols-1">
            <div className="col">
              <h1 className="mb-4">Shop</h1>
            </div>

            <div className="col">
              <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    img={product.img}
                    title={product.title}
                    price={product.price}
                    handleAddToCart={() => {
                      console.log("Add to cart");
                    }}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>

        <aside className="col col-6 col-lg-4 p-4">
          <div className="row flex-column">
            <div className="col shopping__cart__header">
              <h2 className="h3 mt-2">Shopping Cart</h2>
              <hr className="mb-3" />
            </div>
            {purchasedItems.map((purchasedItem) => (
              <ShoppingCartItem
                title={purchasedItem.title}
                price={purchasedItem.price}
                img={purchasedItem.img}
                handleRemove={handleRemove}
                handleChange={handleChange}
              />
            ))}
            <div className="col shopping__cart__footer">
              <div className="row row-cols-1 flex-column">
                <div className="col">
                  <div className="d-flex justify-content-between">
                    <h4 className="h5">Total</h4>
                    <h4>
                      <strong>306€</strong>
                    </h4>
                  </div>
                  <hr />
                </div>
                <div className="col">
                  <button
                    type="btn"
                    className="btn btn-primary btn-block btn-lg"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>

          </div>
        </aside>
      </div>
    </main>
  );
}

export default App;
