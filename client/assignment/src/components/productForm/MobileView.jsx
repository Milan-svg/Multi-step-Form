import React from "react";

function MobileView({ existingForm, handleSubmit }) {
  return (
    <div className="w-full flex justify-center">
      <div className="mockup-phone bg-base-100 shadow-lg  w-[430px] h-[832px] flex flex-col overflow-hidden ">
        <div className="mockup-phone-camera mb-2 mx-auto"></div>
        <div className="mockup-phone-display p-4 overflow-y-auto space-y-4 flex-1">
          {/* product image */}
          <div className="justify-center">
            <div className="carousel w-full">
              {existingForm.images?.map((image, index) => (
                <div
                  key={index}
                  id={`item${index + 1}`}
                  className="carousel-item w-full"
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full max-w-[600px] object-contain rounded-lg shadow-xl"
                  />
                </div>
              ))}
            </div>
            {/* <img
              src="/images/sample.jpg"
              alt="productImage"
              className="w-full max-w-[400px] object-contain rounded-lg shadow-xl"
            /> */}
          </div>
          {/* product details */}
          <h1 className="text-lg font-bold">
            {existingForm.name} | {existingForm.subtitle}
          </h1>
          <h2 className="text-lg font-semibold">
            ₹ {existingForm.pricing[0].price}
          </h2>
          {/* pricing map */}
          <div className="flex gap-2 p-4 overflow-x-auto">
            {existingForm.pricing.map((price, index) => (
              <div
                key={index}
                className="card bg-base-300 border-gray-800 p-4 shadow-lg space-y-1"
              >
                <h1 className="text-lg font-bold">{price.weight} GM</h1>
                <h1 className="text-lg font-bold">{price.duration} Month</h1>
                <h1 className="text-lg font-bold">{price.quantity} Jar</h1>
                <h1 className="text-lg font-bold">{price.price} Rs</h1>
              </div>
            ))}
          </div>
          {/* description */}
          <div>
            <h1 className="text-md font-medium">{existingForm.description}</h1>
          </div>
          {/* Primary Benefits */}
          <div className="space-y-4">
            <h1 className="text-lg font-bold">Primary Benefits</h1>
            {existingForm.primaryBenefits.map((benefit, index) => (
              <h2 key={index} className="text-md font-semibold">
                {benefit}
              </h2>
            ))}
          </div>
          {/* Secondary Benefits */}
          <div className="space-y-4">
            <h1 className="text-lg font-bold">Secondary Benefits</h1>
            <div className="flex gap-2 overflow-x-auto">
              {existingForm.secondaryBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="card flex justify-center items-center bg-base-300 border-gray-800 p-10 shadow-lg space-y-1 "
                >
                  <h1 className="text-md font-semibold">{benefit}</h1>
                </div>
              ))}
            </div>
          </div>
          {/* Dosage */}
          <div className="space-y-4">
            <h1 className="text-lg font-bold">Dosage</h1>
            {existingForm.dosage.map((dose, index) => (
              <h1 key={index} className="text-md font-semibold">
                {dose}
              </h1>
            ))}
          </div>
          {/* Usage */}
          <div className="space-y-4">
            <h1 className="text-lg font-bold">Usage</h1>
            {existingForm.usage.map((use, index) => (
              <h1 key={index} className="text-md font-semibold">
                {use.field1} | {use.field2}
              </h1>
            ))}
          </div>
          {/* Primary Ingredients */}
          <div className="space-y-4">
            <h1 className="text-lg font-bold">Primary Ingredients</h1>
            <div className="grid grid-cols-2 gap-2">
              {existingForm.primaryIngredients.map((ingredient, index) => (
                <div className="flex flex-col">
                  <img
                    className="rounded-xl shadow-lg max-w-[200px]"
                    src={ingredient.image}
                  />
                  <span className=" text-md font-semibold text-center mt-1">
                    {ingredient.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Duration */}
          <div className="space-y-4">
            <h1 className="text-lg font-bold">Duration</h1>
            {existingForm.duration.map((d, index) => (
              <h1 key={index} className="text-md font-semibold">
                {d}
              </h1>
            ))}
          </div>
          <div className="w-full flex justify-center mt-4">
            <button
              type="button"
              className="btn btn-success  btn-wide"
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileView;
