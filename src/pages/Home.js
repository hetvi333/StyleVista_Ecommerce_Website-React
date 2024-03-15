import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const { products } = useContext(ProductContext);
  // console.log(products);

  const WomensProducts = products.filter((item) => {
    return item.category === "women's clothing";
  });

  const mensProducts = products.filter((item) => {
    return item.category === "men's clothing";
  });

  const jewelProducts = products.filter((item) => {
    return item.category === "jewelery";
  });

  return (
    <>
      {/* hero section */}
      <Hero />

      <section className="pt-24 pb-4" id="jewelery">
        <div className="container mx-auto">
          {/* jewelery */}
          <div className="mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center uppercase underline mx-auto my-8 ">
              popular in jewelry
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
              {jewelProducts.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* women cloths */}
      <section className="pt-24 pb-4" id="women-clothing">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center uppercase underline mx-auto my-8">
              popular in women
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
              {WomensProducts.slice(0, 4).map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* men cloth */}
      <section className="pt-24 pb-4" id="mens-clothing">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center uppercase underline mx-auto my-8">
              popular in men
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
              {mensProducts.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
