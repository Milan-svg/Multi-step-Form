import React from "react";

function DesktopView({ existingForm }) {
  return (
    <div className="mockup-window border bg-base-200 max-w-[1280px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 p-8 sm:p-8">
        {/* product image */}
        <div className="w-full lg:w-1/2 ">
          <img
            src="/images/sample.jpg"
            alt="productImage"
            className="w-full max-w-[600px] object-contain "
          />
        </div>
        {/* product details */}
        <div className="w-full lg:w-1/2 space-y-8 sm:space-y-10">
          <h1 className="text-5xl font-bold">
            {existingForm.name} | {existingForm.subtitle}
          </h1>
          <h2 className="text-3xl font-semibold"> Rs 2000</h2>
          {/* pricing map */}
          <div className="flex flex-wrap gap-6 p-4">
            {existingForm.pricing.map((price) => (
              <div
                key={price.id}
                className="card bg-base-300 border-gray-800 p-10 shadow-lg space-y-1"
              >
                <h1>{price.weight} GM</h1>
                <h1>{price.duration} Month</h1>
                <h1>{price.quantity} Jar</h1>
                <h1>{price.price} Rs</h1>
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
            <h2 className="text-2xl font-semibold">Reduces Hair Fall</h2>
            <h2 className="text-2xl font-semibold">Reduces Hair Fall</h2>
            <h2 className="text-2xl font-semibold">Reduces Hair Fall</h2>
            <h2 className="text-2xl font-semibold">Reduces Hair Fall</h2>
            <h2 className="text-2xl font-semibold">Reduces Hair Fall</h2>
          </div>
          {/* Secondary Benefits */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">Secondary Benefits</h1>
            <div className="flex gap-10 overflow-x-auto">
              <div className="card bg-base-300 border-gray-800 p-10 shadow-lg space-y-1">
                <h1 className="text-2xl font-semibold">
                  Reduces Stress and Anxiety
                </h1>
              </div>
              <div className="card bg-base-300 border-gray-800 p-10 shadow-lg space-y-1">
                <h1 className="text-2xl font-semibold">
                  Reduces Stress and Anxiety
                </h1>
              </div>
              <div className="card bg-base-300 border-gray-800 p-10 shadow-xl space-y-1">
                <h1 className="text-2xl font-semibold">
                  Reduces Stress and Anxiety
                </h1>
              </div>
            </div>
          </div>
          {/* Dosage */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">Dosage</h1>
            <h1 className="text-2xl font-semibold">
              Twice a day | Empty Stomach
            </h1>
            <h1 className="text-2xl font-semibold">
              Twice a day | Empty Stomach
            </h1>
            <h1 className="text-2xl font-semibold">
              Twice a day | Empty Stomach
            </h1>
          </div>
          {/* Usage */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">Usage</h1>
            <h1 className="text-2xl font-semibold">Shampoo | Twice a week</h1>
            <h1 className="text-2xl font-semibold">Shampoo | Twice a week</h1>
            <h1 className="text-2xl font-semibold">Shampoo | Twice a week</h1>
          </div>
          {/* Primary Ingredients */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">Primary Ingredients</h1>
            <div className="grid grid-cols-2 md:grid-cols-2 p-4 gap-6">
              <img src="/images/bhringraj.png" />
              <img src="/images/bhringraj.png" />
              <img src="/images/bhringraj.png" />
              <img src="/images/bhringraj.png" />
            </div>
          </div>

          {/* Duration */}
          <h1 className="text-4xl font-bold">Duration</h1>
          <h1 className="text-2xl font-semibold">3-6 months minimum.</h1>
        </div>
      </div>
    </div>
  );
}

export default DesktopView;
