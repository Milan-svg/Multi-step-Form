import React from "react";

function MobileView({ existingForm }) {
  return (
    <div className="w-full flex justify-center">
      <div className="mockup-phone bg-base-100 shadow-lg  w-[430px] h-[932px] overflow-hidden ">
        <div className="mockup-phone-camera mb-2"></div>
        <div className="mockup-phone-display p-4 overflow-y-auto space-y-4">
          {/* product image */}
          <div className="justify-center">
            <img
              src="/images/sample.jpg"
              alt="productImage"
              className="w-full max-w-[400px] object-contain rounded-lg shadow-xl"
            />
          </div>
          {/* product details */}
          <h1 className="text-lg font-bold">
            {existingForm.name} | {existingForm.subtitle}
          </h1>
          <h2 className="text-lg font-semibold"> Rs 2000</h2>
          {/* pricing map */}
          <div className="flex gap-2 p-4 overflow-x-auto">
            {existingForm.pricing.map((price) => (
              <div
                key={price.id}
                className="card bg-base-300 border-gray-800 p-4 shadow-lg space-y-1"
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
            <h1 className="text-md font-medium">{existingForm.description}</h1>
          </div>
          {/* Primary Benefits */}
          <div className="space-y-4">
            <h1 className="text-lg font-bold">Primary Benefits</h1>
            <h2 className="text-md font-semibold">Reduces Hair Fall</h2>
            <h2 className="text-md font-semibold">Reduces Hair Fall</h2>
            <h2 className="text-md font-semibold">Reduces Hair Fall</h2>
            <h2 className="text-md font-semibold">Reduces Hair Fall</h2>
            <h2 className="text-md font-semibold">Reduces Hair Fall</h2>
          </div>
          {/* Secondary Benefits */}
          <div className="space-y-4">
            <h1 className="text-lg font-bold">Secondary Benefits</h1>
            <div className="flex gap-2 overflow-x-auto">
              <div className="card bg-base-300 border-gray-800 p-10 shadow-lg space-y-1">
                <h1 className="text-md font-semibold">
                  Reduces Stress and Anxiety
                </h1>
              </div>
              <div className="card bg-base-300 border-gray-800 p-10 shadow-lg space-y-1">
                <h1 className="text-md font-semibold">
                  Reduces Stress and Anxiety
                </h1>
              </div>
              <div className="card bg-base-300 border-gray-800 p-10 shadow-lg space-y-1">
                <h1 className="text-md font-semibold">
                  Reduces Stress and Anxiety
                </h1>
              </div>
            </div>
          </div>
          {/* Dosage */}
          <div className="space-y-4">
            <h1 className="text-lg font-bold">Dosage</h1>
            <h1 className="text-md font-semibold">
              Twice a day | Empty Stomach
            </h1>
            <h1 className="text-md font-semibold">
              Twice a day | Empty Stomach
            </h1>
            <h1 className="text-md font-semibold">
              Twice a day | Empty Stomach
            </h1>
          </div>
          {/* Usage */}
          <div className="space-y-4">
            <h1 className="text-lg font-bold">Usage</h1>
            <h1 className="text-md font-semibold">Shampoo | Twice a week</h1>
            <h1 className="text-md font-semibold">Shampoo | Twice a week</h1>
            <h1 className="text-md font-semibold">Shampoo | Twice a week</h1>
          </div>
          {/* Primary Ingredients */}
          <div className="space-y-4">
            <h1 className="text-lg font-bold">Primary Ingredients</h1>
            <div className="grid grid-cols-2 gap-2">
              <img src="/images/bhringraj.png" />
              <img src="/images/bhringraj.png" />
              <img src="/images/bhringraj.png" />
              <img src="/images/bhringraj.png" />
            </div>
          </div>

          {/* Duration */}
          <h1 className="text-lg font-bold">Duration</h1>
          <h1 className="text-md font-semibold">3-6 months minimum.</h1>
        </div>
      </div>
    </div>
  );
}

export default MobileView;
