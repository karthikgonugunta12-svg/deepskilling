import React from "react";

function App() {
  const office = {
    name: "Smart Office",
    rent: 55000,
    address: "Hyderabad"
  };

  const officeList = [
    {
      name: "Smart Office",
      rent: 55000,
      address: "Hyderabad"
    },
    {
      name: "Tech Park",
      rent: 75000,
      address: "Bangalore"
    },
    {
      name: "Business Hub",
      rent: 45000,
      address: "Chennai"
    }
  ];

  return (
    <div style={{ margin: "20px" }}>
      <h1>Office Space Rental App</h1>

      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
        alt="Office Space"
        width="400"
        height="250"
      />

      <h2>Office Details</h2>

      <p><b>Name:</b> {office.name}</p>

      <p>
        <b>Rent:</b>{" "}
        <span
          style={{
            color: office.rent < 60000 ? "red" : "green"
          }}
        >
          ₹{office.rent}
        </span>
      </p>

      <p><b>Address:</b> {office.address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {officeList.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
            width: "350px"
          }}
        >
          <h3>{item.name}</h3>

          <p>
            <b>Rent:</b>{" "}
            <span
              style={{
                color: item.rent < 60000 ? "red" : "green"
              }}
            >
              ₹{item.rent}
            </span>
          </p>

          <p>
            <b>Address:</b> {item.address}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;