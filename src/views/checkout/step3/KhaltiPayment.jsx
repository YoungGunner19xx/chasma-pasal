/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFormikContext } from "formik";
import React from "react";

const KhaltiPayment = () => {
  const { values, setValues } = useFormikContext();
  const Khalti = (
    <svg
      width="64"
      height="64"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M24.87 7.45h15.42a1.57 1.57 0 0 1 1.56 1.74l-2.35 22a2.1 2.1 0 0 1-1 1.58l-12.28 7.4a2.6 2.6 0 0 1-2.69 0l-12.29-7.36a2.1 2.1 0 0 1-1-1.58l-2.35-22a1.58 1.58 0 0 1 1.57-1.78h15.41"
      />
      <path
        fill="none"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m8.29 12.88l-5.43.58l1.12 10.45l5.42-.58m10.39-11.17v18.92m10.17 0l-7.79-9.46l7.79-9.4m-7.79 9.4h-2.38"
      />
    </svg>
  );
  return (
    <div
      className={`checkout-fieldset-collapse ${
        values.type === "Khalti" ? "is-selected-payment" : ""
      }`}
    >
      <div className="checkout-field margin-0">
        <div className="checkout-checkbox-field">
          <input
            checked={values.type === "Khalti"}
            id="modeKhalti"
            name="type"
            onChange={(e) => {
              if (e.target.checked) {
                setValues({ ...values, type: "Khalti" });
              }
            }}
            type="radio"
          />
          <label className="d-flex w-100" htmlFor="modeKhalti">
            <div className="d-flex-grow-1 margin-left-s">
              <h4 className="margin-0">Khalti</h4>
              <span className="text-subtle d-block margin-top-s">
                Pay with Khalti
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center", // Vertically center-align the logo
              }}
            >
              {Khalti}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default KhaltiPayment;
