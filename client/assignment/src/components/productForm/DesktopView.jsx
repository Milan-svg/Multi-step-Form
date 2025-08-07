import React from "react";

function DesktopView({ existingForm, handleSubmit }) {
  return (
    <div className="mockup-window border bg-base-200 max-w-[1280px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 p-8 sm:p-8">
        {/* product image */}
        <div className="w-full lg:w-1/2 ">
          <div className="carousel w-full">
            {existingForm.images.map((image, index) => (
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
        </div>
        {/* product details */}
        <div className="w-full lg:w-1/2 space-y-8 sm:space-y-10">
          <h1 className="text-5xl font-bold">
            {existingForm.name} | {existingForm.subtitle}
          </h1>
          <h2 className="text-3xl font-semibold">
            ₹ {existingForm.pricing[0].price}
          </h2>
          {/* pricing map */}
          <div className="flex flex-wrap gap-6 p-4">
            {existingForm.pricing.map((price, index) => (
              <div
                key={index}
                className="card bg-base-300 border-gray-800 p-10 shadow-lg space-y-1"
              >
                <h1 className="text-lg font-bold">{price.weight} GM</h1>
                <h1 className="text-lg font-bold">{price.duration} Month</h1>
                <h1 className="text-lg font-bold">{price.quantity} Jar</h1>
                <h1 className="text-lg font-bold">₹ {price.price} Rs</h1>
              </div>
            ))}
          </div>
          {/* description */}
          <div>
            <h1 className="text-3xl font-medium">{existingForm.description}</h1>
          </div>
          {/* Primary Benefits */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">Primary Benefits</h1>
            {existingForm.primaryBenefits.map((benefit, index) => (
              <h2 key={index} className="text-2xl font-semibold">
                {benefit}
              </h2>
            ))}
          </div>
          {/* Secondary Benefits */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">Secondary Benefits</h1>
            <div className="flex gap-10 overflow-x-auto">
              {existingForm.secondaryBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="card flex justify-center items-center bg-base-300 border-gray-800 p-10 shadow-lg space-y-1"
                >
                  <h1 className="text-2xl font-semibold">{benefit}</h1>
                </div>
              ))}
            </div>
          </div>
          {/* Dosage */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">Dosage</h1>
            {existingForm.dosage.map((dose, index) => (
              <h1 key={index} className="text-2xl font-semibold">
                {dose}
              </h1>
            ))}
          </div>
          {/* Usage */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">Usage</h1>
            {existingForm.usage.map((use, index) => (
              <h1 key={index} className="text-2xl font-semibold">
                {use.field1} | {use.field2}
              </h1>
            ))}
          </div>
          {/* Primary Ingredients */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">Primary Ingredients</h1>
            <div className="grid grid-cols-2 md:grid-cols-2 p-4 gap-6">
              {existingForm.primaryIngredients.map((ingredient, index) => (
                <div className="flex flex-col">
                  <img
                    className="rounded-xl shadow-lg"
                    src={ingredient.image}
                  />
                  <span className=" text-lg font-semibold text-center mt-1">
                    {ingredient.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Duration */}
          <h1 className="text-4xl font-bold">Duration</h1>
          <h1 className="text-2xl font-semibold">{existingForm.duration}</h1>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-success self-start mx-auto m-4 btn-wide"
        onClick={() => handleSubmit()}
      >
        Submit
      </button>
    </div>
  );
}

export default DesktopView;
