import React, { useState } from "react";
import Input from "../global/Input";
import { Modal } from "../global/Modal";

const ChangeAddress = () => {
  const [addressState, setAddressState] = useState("default");
  const [addressCountry, setAddressCountry] = useState("default");

  return (
    <div>
      <form className="flex flex-col" style={{ gap: "1rem" }}>
        <Input
          errorMessage={""}
          label={"Enter Name"}
          value={""}
          onChange={""}
        />
        <Input
          errorMessage={""}
          label={"Enter House No., street, colony"}
          value={""}
          onChange={""}
        />
        <Input
          errorMessage={""}
          label={"Enter City"}
          value={""}
          onChange={""}
        />
        <Input
          errorMessage={""}
          label={"Enter Zip Code"}
          value={""}
          onChange={""}
        />
        <Input
          errorMessage={""}
          label={"Enter Mobile number"}
          value={""}
          onChange={""}
        />
        <div className="flex">
          <div class="custom-select mr-5">
            <select
              class="bg-regal-blue text-white text-xl"
              value={addressState}
              onChange={(e) => setAddressState(e.target.value)}
            >
              <option value="default">Choose State</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Kerela">Kerela</option>
            </select>
          </div>
          <div class="custom-select">
            <select
              class="bg-regal-blue text-white text-xl"
              value={addressCountry}
              onChange={(e) => setAddressCountry(e.target.value)}
            >
              <option value="default">Choose Country</option>
              <option value="India">India</option>
              <option value="Brazil">Brazil</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

function AddressCard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      style={{ border: "1px solid #000022" }}
      className="p-8 flex justify-between align-items-center shadow-lg w-full mb-5"
    >
      <div className="flex flex-col justify-center text-white">
        <h6 className="text-lg font-semibold mb-3">
          Deliver to: <span className="font-normal">Admin User, 560078</span>
        </h6>
        <p className="text-md">Some more text here, Bangalore.</p>
      </div>

      <div className="btn btn-outline-cyan" onClick={() => setShowModal(true)}>
        Change
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalTitle="Change Address"
        modalBody={<ChangeAddress />}
      />
    </div>
  );
}

export default AddressCard;
