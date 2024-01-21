import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.5/+esm";

console.log("find.js working");

document
  .getElementById("FindForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("find function called");

    const city = document.getElementById("cityInput").value;
    console.log(city);

    axios
      .post("http://localhost:3002/findStay", { city })
      .then((response) => {
        const data = response.data;
        console.log(data);

        // Call a function to display the retrieved data
        displayData(data);
      })
      .catch((error) => {
        console.error("Error during data retrieval:", error);
        // Handle errors as needed
      });
  });

// Function to display the retrieved data
function displayData(data) {
  const resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = "";

  if (data.length === 0) {
    resultContainer.innerHTML = "<p>No data found for the given city.</p>";
  } else {
    const ul = document.createElement("ul");

    data.forEach((item) => {
      const li = document.createElement("li");

      // Extracting required properties
      const stayName = item.sname || "N/A";
      const city = item.city || "N/A";
      const latitude = item.lati || "N/A";
      const longitude = item.longi || "N/A";
      const hostelType = item.stayType || "N/A";
      const phoneNumber = item.phno || "N/A";
      const amount = item.amount || "N/A";

      li.innerHTML = `
      <pre>
      Stay Name       : ${stayName}
      City            : ${city}
      Latitude        : ${latitude}
      Longitude       : ${longitude}
      Hostel Type     : ${hostelType}
      Phone Number    : ${phoneNumber}
      Amount(monthly) : ${amount}
      </pre>      
      `;
      li.style.fontSize = "18px";

      ul.appendChild(li);
    });

    resultContainer.appendChild(ul);
  }
}
