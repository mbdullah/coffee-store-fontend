import React from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { name, photo, price, supplier, quantity, taste, details, _id } =
    useLoaderData();
  const handleUpdatedCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

    // Updated Coffee from db
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="my-20">
      <Link to="/" className="text-white text-3xl font-bold">Back to home</Link>
      <div className="bg-[#F4F3F0] my-10 px-24 py-16 rounded">
        <div className="text-center mb-8 space-y-4">
          <h2 className="text-5xl font-semibold text-[#374151]">
            Update Coffee
          </h2>
        </div>

        <form onSubmit={handleUpdatedCoffee} className="text-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="rounded-box">
              <label className="label mb-2 font-medium">Name</label>
              <input
                defaultValue={name}
                name="name"
                type="text"
                className="input w-full bg-white h-12"
                placeholder="Enter Coffee Name"
              />
            </fieldset>
            <fieldset className="rounded-box">
              <label className="label mb-2 font-medium">Quantity</label>
              <input
                defaultValue={quantity}
                name="quantity"
                type="text"
                className="input w-full bg-white h-12"
                placeholder="Enter Coffee Quantity"
              />
            </fieldset>
            <fieldset className="rounded-box">
              <label className="label mb-2 font-medium">Supplier</label>
              <input
                defaultValue={supplier}
                name="supplier"
                type="text"
                className="input w-full bg-white h-12"
                placeholder="Enter Coffee Supplier"
              />
            </fieldset>
            <fieldset className="rounded-box">
              <label className="label mb-2 font-medium">Taste</label>
              <input
                defaultValue={taste}
                name="taste"
                type="text"
                className="input w-full bg-white h-12"
                placeholder="Enter Coffee Taste"
              />
            </fieldset>
            <fieldset className="rounded-box">
              <label className="label mb-2 font-medium">Price</label>
              <input
                defaultValue={price}
                name="price"
                type="text"
                className="input w-full bg-white h-12"
                placeholder="Enter Coffee Price"
              />
            </fieldset>
            <fieldset className="rounded-box">
              <label className="label mb-2 font-medium">Details</label>
              <input
                defaultValue={details}
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
              defaultValue={photo}
              name="photo"
              type="text"
              className="input w-full bg-white h-12"
              placeholder="Enter Photo URL"
            />
          </fieldset>
          <input
            className="bg-[#D2B48C] border border-[#331A15] btn text-[#331A15] h-12 w-full mt-6"
            type="submit"
            value="Update Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
