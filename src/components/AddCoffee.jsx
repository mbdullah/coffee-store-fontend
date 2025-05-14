import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

    // send data in to db
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added Successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="my-20">
      <h3 className="text-white text-3xl font-bold">Back to home</h3>
      <div className="bg-[#F4F3F0] my-10 px-24 py-16 rounded">
        <div className="text-center mb-8 space-y-4">
          <h2 className="text-5xl font-semibold text-[#374151]">
            Add New Coffee
          </h2>
          <p className="text-lg text-[#1B1A1A] opacity-70">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <form onSubmit={handleAddCoffee} className="text-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="rounded-box">
              <label className="label mb-2 font-medium">Name</label>
              <input
                name="name"
                type="text"
                className="input w-full bg-white h-12"
                placeholder="Enter Coffee Name"
              />
            </fieldset>
            <fieldset className="rounded-box">
              <label className="label mb-2 font-medium">Quantity</label>
              <input
                name="quantity"
                type="text"
                className="input w-full bg-white h-12"
                placeholder="Enter Coffee Quantity"
              />
            </fieldset>
            <fieldset className="rounded-box">
              <label className="label mb-2 font-medium">Supplier</label>
              <input
                name="supplier"
                type="text"
                className="input w-full bg-white h-12"
                placeholder="Enter Coffee Supplier"
              />
            </fieldset>
            <fieldset className="rounded-box">
              <label className="label mb-2 font-medium">Taste</label>
              <input
                name="taste"
                type="text"
                className="input w-full bg-white h-12"
                placeholder="Enter Coffee Taste"
              />
            </fieldset>
            <fieldset className="rounded-box">
              <label className="label mb-2 font-medium">Price</label>
              <input
                name="price"
                type="text"
                className="input w-full bg-white h-12"
                placeholder="Enter Coffee Price"
              />
            </fieldset>
            <fieldset className="rounded-box">
              <label className="label mb-2 font-medium">Details</label>
              <input
                name="details"
                type="text"
                className="input w-full bg-white h-12"
                placeholder="Enter Coffee Details"
              />
            </fieldset>
          </div>
          <fieldset className="rounded-box mt-6">
            <label className="label mb-2 font-medium">Photo</label>
            <input
              name="photo"
              type="text"
              className="input w-full bg-white h-12"
              placeholder="Enter Photo URL"
            />
          </fieldset>
          <input
            className="bg-[#D2B48C] border border-[#331A15] btn text-[#331A15] h-12 w-full mt-6"
            type="submit"
            value="Add Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
