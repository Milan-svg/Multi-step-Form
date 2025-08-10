import React, { useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const productsFromApi = await fetch(
  `${API_BASE_URL}/api/v1/products/get-products`
).then((res) => res.json());
//console.log("productsFromApi: ", productsFromApi); // used this to debug

const products = productsFromApi.data;

export default function ProductList() {
  const [expandedProduct, setExpandedProduct] = useState(null);

  const toggleExpand = (product) => {
    setExpandedProduct(expandedProduct?._id === product._id ? null : product);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Products List</h1>

      {/* Expanded Product Details */}
      {expandedProduct && (
        <div className="flex justify-between border border-gray-300 bg-base-100 rounded-lg p-4 mb-4 shadow-md">
          <div className="flex-1  space-y-2">
            <h2 className="text-xl font-bold">
              Product :{" "}
              <span className="font-bold text-lg">{expandedProduct.name}</span>
            </h2>
            <h1 className="text-lg font-bold">Description:</h1>
            <p className="text-gray-800 text-md">
              {expandedProduct.description}
            </p>
          </div>

          <div className="self-start">
            <span
              className={`px-3 py-1 text-md rounded-full self-start ${
                expandedProduct.active === true
                  ? "bg-green-100 text-green-800 border border-green-900"
                  : "bg-red-100 text-red-800 border border-red-900"
              }`}
            >
              {expandedProduct.active ? "Active" : "Inactive"}
            </span>
          </div>
        </div>
      )}

      {/* Product List */}
      <div className=" card bg-base-200 border border-base-300 rounded-lg overflow-hidden">
        <div className="bg-base-300 text-sm font-semibold grid grid-cols-3 p-3">
          <div>Product</div>
          <div>Description</div>
          <div>Status</div>
        </div>

        {products.map((product) => (
          <div
            key={product._id}
            className="grid grid-cols-3 items-start p-3 border-t relative hover:bg-base-100 cursor-pointer"
            onClick={() => toggleExpand(product)}
          >
            <div className="flex items-center justify-between pr-2">
              <h1 className="font-medium">{product.name}</h1>
            </div>

            <div className="text-sm text-black truncate">
              {product.description}
            </div>

            <div className="text-sm">
              <span
                className={`inline-block px-2 py-1 rounded-full ${
                  product.active === true
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {product.active ? "Active" : "Inactive"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
