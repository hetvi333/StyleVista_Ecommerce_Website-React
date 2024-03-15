import React, { useContext } from "react";

// import useParam
import { useParams } from "react-router-dom";

//contexts
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  // get product id from url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get the single product basded on the id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if the product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const { title, price, description, image } = product;

  return (
    <section className=" pt-36 pb-10 md:py-32 flex  h-screen items-center">
      <div className=" container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className=" flex flex-1 justify-center items-center mb-6 md:mb-0 ">
            <img
              className=" max-w-[200px] md:max-w-sm"
              src={image}
              alt={image.title}
            />
          </div>
          <div className=" flex-1 text-center md:text-left">
            <h1 className=" text-[18px] md:text-[20px]  font-semibold mb-2 max-w-[450px]">
              {title}
            </h1>
            <div className=" text-xl text-red-500 font-medium mb-4 md:mb-6">
              ${price}
            </div>
            <p className="mb-4 md:mb-8">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className=" bg-primary py-2 px-8 mb-3 md:py-4 text-white "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
