import React, { useState } from "react";
import "./CreateCard.css";
export default function Card({ card }) {
  const [showPopUp, setShowPopUp] = useState(false);
  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{card.name}</h2>
      <p style={styles.description}>{card.description}</p>
      <h3 style={styles.interestsHeader}>Interests: {card.intrest}</h3>
      <div style={styles.socialLinks}>
        <a
          href={card.linkdin}
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...styles.link, marginLeft: "0px" }}
        >
          LinkedIn
        </a>
        <br />
        <a
          href={card.twitter}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          Twitter
        </a>
      </div>
      <div>
        <button className="update" onClick={togglePopUp}>
          Update{" "}
        </button>
        {showPopUp && <UpdateCard card={card} onClose={togglePopUp} />}
      </div>
    </div>
  );

  function UpdateCard({ card, onClose }) {
    const [formData, setFormData] = useState({
      ...card,
    });
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
          id: formData._id,
        };
        const response = await fetch("http://localhost:3000/updateCard", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(newFormData),
        });
        if (!response.ok) {
          throw new Error("Failed to register");
        }
        setFormData({});
        onClose();
      } catch (error) {
        console.error("Error registering:", error.message);
      }
    };
    return (
      <div className="centered-div">
        <h2 style={{ color: "black" }} className="content">
          Update card
        </h2>
        <form className="form-container content" onSubmit={handleSubmit}>
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
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}
const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px",
    maxWidth: "400px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f8f9fa",
  },
  name: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
  },
  description: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "15px",
  },
  socialLinks: {
    display: "flex",
    marginBottom: "15px",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    display: "inline-block",
    margin: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  interestsHeader: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#333",
  },
  interestsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  interestItem: {
    fontSize: "14px",
    marginBottom: "5px",
    color: "#555",
  },
};
