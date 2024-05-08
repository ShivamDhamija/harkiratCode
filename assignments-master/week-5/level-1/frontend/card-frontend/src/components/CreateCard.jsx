import React, { useState } from "react";
import "./CreateCard.css";
function Form({ changeForm }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    linkdin: "",
    twitter: "",
    intrest: "",
    token: "",
  });
  const [responseData, setResponseData] = useState(null);
  const toggleForm = (e) => {
    e.preventDefault();
    changeForm();
    setShowForm(!showForm);
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
      const newFormData = {
        values: {
          name: formData.name,
          description: formData.description,
          linkdin: formData.linkdin,
          twitter: formData.twitter,
          intrest: formData.intrest,
        },
        token: formData.token,
      };
      const response = await fetch("http://localhost:3000/postCard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(newFormData),
      });
      if (!response.ok) {
        throw new Error("Failed to register");
      }
      const responseData = await response.json();
      setResponseData(responseData);
      setFormData({
        name: "",
        description: "",
        linkdin: "",
        twitter: "",
        intrest: "",
        token: "",
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
          Create New Card
        </button>
      )}
      {showForm && (
        <div className="centered-div">
          <form onSubmit={handleSubmit} className="content form-container">
            <h1>Create new Card</h1>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              required
            />
            <br />
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter Description"
              required
            />
            <br />
            <input
              type="text"
              name="linkdin"
              value={formData.linkdin}
              onChange={handleChange}
              placeholder="Enter Linkdin"
              required
            />
            <br />
            <input
              type="text"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
              placeholder="Enter Twitter"
              required
            />
            <br />
            <input
              type="text"
              name="intrest"
              value={formData.intrest}
              onChange={handleChange}
              placeholder="Enter Intrest"
              required
            />
            <br />
            <input
              type="text"
              name="token"
              value={formData.token}
              onChange={handleChange}
              placeholder="Enter Admin Token"
              required
            />
            <br />
            <br />
            <button type="submit">Submit</button>
            <button className="cancel" onClick={toggleForm}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Form;
