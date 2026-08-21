import { useState } from "react";

const CheckoutForm = ({ onSubmit }) => {

    const [form, setForm] = useState({
        name: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (

        <div className="card shadow-sm p-4">

            <h3 className="mb-4">
                Shipping Address
            </h3>

            <input
                className="form-control mb-3"
                placeholder="Full Name"
                name="name"
                onChange={handleChange}
            />

            <input
                className="form-control mb-3"
                placeholder="Phone"
                name="phone"
                onChange={handleChange}
            />

            <textarea
                className="form-control mb-3"
                placeholder="Address"
                name="address"
                rows="3"
                onChange={handleChange}
            />

            <input
                className="form-control mb-3"
                placeholder="City"
                name="city"
                onChange={handleChange}
            />

            <input
                className="form-control mb-3"
                placeholder="State"
                name="state"
                onChange={handleChange}
            />

            <input
                className="form-control mb-3"
                placeholder="Pincode"
                name="pincode"
                onChange={handleChange}
            />

            <button
                className="btn btn-success w-100"
                onClick={() => onSubmit(form)}
            >
                Continue
            </button>

        </div>

    );

};

export default CheckoutForm;