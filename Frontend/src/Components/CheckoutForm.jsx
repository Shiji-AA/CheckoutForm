import { useState } from "react";
import axiosInstance from "../api/axiosInstance.jsx";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CheckoutForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [cardinformation, setCardinformation] = useState("");


  const validateFields = () => {
    if (!name.trim() || !street.trim() || !city.trim() || !country.trim() || !zip || !cardinformation.trim()) {
      toast.error("All fields are required.");
      return false;
    }

    const zipPattern = /^[0-9]{6}$/;
    if (!zipPattern.test(zip)) {
      toast.error("Zip code must be a 6-digit number.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateFields()) {
        return;
      }
  
    try {
      const response = await axiosInstance.post("/checkout", {
        name,
        street,
        city,
        country,
        zip,
        cardinformation,
      });
      if (response.data) {
        console.log(response.data, "response");
        toast.success(response.data.message);
        navigate("/postcheckout");
      }
    } catch (error) {
      if (error.response && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-500">
      <div className="leading-loose">
        <form
          className="max-w-xl m-4 p-10 bg-blue-200 rounded shadow-xl"
          onSubmit={handleSubmit}
        >
          <p className="text-gray-800 font-medium">Customer information</p>
          <div className="">
            <label className="block text-sm text-gray-900" htmlFor="cus_name">
              Name
            </label>
            <input
              className="w-full px-5 py-1 text-gray-900 bg-white rounded"
              id="cus_name"
              name="cus_name"
              type="text"
              required
              placeholder="Your Name"
              aria-label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <label className="block text-sm text-gray-900" htmlFor="cus_street">
              Street
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-white rounded"
              id="cus_street"
              name="cus_street"
              type="text"
              required
              placeholder="Street"
              aria-label="Street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <label className="block text-sm text-gray-900" htmlFor="cus_city">
              City
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-white rounded"
              id="cus_city"
              name="cus_city"
              type="text"
              required
              placeholder="City"
              aria-label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="inline-block mt-2 w-1/2 pr-1">
            <label
              className="block text-sm text-gray-900"
              htmlFor="cus_country"
            >
              Country
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-white rounded"
              id="cus_country"
              name="cus_country"
              type="text"
              required
              placeholder="Country"
              aria-label="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
            <label className="block text-sm text-gray-900" htmlFor="cus_zip">
              Zip
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-white rounded"
              id="cus_zip"
              name="cus_zip"
              type="text"
              required
              placeholder="Zip"
              aria-label="Zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
          <p className="mt-4 text-gray-800 font-medium">Payment information</p>
          <div className="">
            <label className="block text-sm text-gray-700" htmlFor="cus_card">
              Card
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-white rounded"
              id="cus_card"
              name="cus_card"
              type="text"
              required
              placeholder="Enter Payment information"
              aria-label="Card"
              value={cardinformation}
              onChange={(e) => setCardinformation(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <button
              className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
              type="submit"
            >
              Checkout Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutForm;
