import Checkout from "./model.js";

const checkOut = async (req, res) => {
  const { name, street, city, country, zip, cardinformation } = req.body;

  try {
    const newCheckout = new Checkout({
      name,
      street,
      city,
      country,
      zip,
      cardinformation,
    });
    await newCheckout.save();
    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export { checkOut };
