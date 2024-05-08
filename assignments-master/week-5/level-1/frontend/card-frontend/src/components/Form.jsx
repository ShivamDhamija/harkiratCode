import React, { useState } from "react";
import "./Form.css"; // Import CSS file for styling

function CardForm({ changeCard }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    // Define initial form fields and their default values
    username: "",
    gmail: "",
    // Add more form fields as needed
  });
  const [responseData, setResponseData] = useState(null);
  const toggleForm = (e) => {
    e.preventDefault();
    changeCard();
    setFormData({
      username: "",
      gmail: "",
    });
    setShowForm(!showForm);
  };
  const clearResponseData = () => {
    changeCard();
    setResponseData(null);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to register");
      }
      const responseData = await response.json();
      setResponseData(responseData);
      setFormData({
        username: "",
        gmail: "",
      });
      setShowForm(false);
    } catch (error) {
      console.error("Error registering:", error.message);
    }
  };

  return (
    <div>
      {!showForm && (
        <button className="btn" onClick={toggleForm}>
          Sign-in Admin
        </button>
      )}

      {showForm && (
        <div className="centered-div">
          <form className="content form" onSubmit={handleSubmit}>
            <h1>Sign-in new Admin</h1>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter User-Name"
              required
            />
            <br />
            <input
              type="email"
              name="gmail"
              value={formData.gmail}
              onChange={handleChange}
              placeholder="Enter User-Email"
              required
            />
            <br />
            <br />
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <button onClick={toggleForm} className="cancel-btn">
              Cancel
            </button>
          </form>
        </div>
      )}
      {responseData && (
        <div className="centered-div">
          <div className="content">
            <h3>JWT of Admin is : </h3>
            <pre>{responseData.jwt}</pre>
            <button onClick={clearResponseData} className="clear-btn">
              Clear JWT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardForm;
