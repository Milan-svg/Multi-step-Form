import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "B Feral Gold Malt",
    description:
      "A versatile herb that enhances fertility and aids in treating insomnia. It has a calming effect on the nervous system and is known for its aromatic properties.",
    status: "Active",
  },
  {
    id: 2,
    name: "Amrutam Amla Churna",
    description:
      "Amrutam's Amla Churna is a pure and authentic Ayurvedic recipe that is an excellent source of Vitamin C.",
    status: "Inactive",
  },
];

export default function ProductList() {
  const [expandedProduct, setExpandedProduct] = useState(null);

  const toggleExpand = (product) => {
    setExpandedProduct(expandedProduct?.id === product.id ? null : product);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Products List</h1>

      {/* Expanded Product Details */}
      {expandedProduct && (
        <div className=" card border border-gray-300 bg-base-100 rounded-lg p-4 mb-4 shadow-md space-y-2">
          <h2 className="text-xl font-bold">{expandedProduct.name}</h2>
          <p className="text-gray-600 text-sm">{expandedProduct.description}</p>
          <span
            className={`px-3 py-1 text-md rounded-full self-start ${
              expandedProduct.status === "Active"
                ? "bg-green-100 text-green-800 border border-green-900"
                : "bg-red-100 text-red-800 border border-red-900"
            }`}
          >
            {expandedProduct.status}
          </span>
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
            key={product.id}
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
                  product.status === "Active"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {product.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
