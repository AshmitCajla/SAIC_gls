import React, { useState } from 'react';
import Navbar from './0_1_Navbar';
import "./1_Registrationform.css";

const backendURL = "http://localhost:3000/submitFormData";


const RegistrationForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    teamName: "",
    leader: {
      name: "",
      phoneNumber: "",
      email: "",
      rollNumber: "",
      year: "",
    },
    member1: {
      name: "",
      phoneNumber: "",
      email: "",
      rollNumber: "",
      year: "",
    },
    member2: {
      name: "",
      phoneNumber: "",
      email: "",
      rollNumber: "",
      year: "",
    },
    member3: {
      name: "",
      phoneNumber: "",
      email: "",
      rollNumber: "",
      year: "",
    },
  });
  const RadioInput = ({ name, options }) => (
    <div className="gap-[2.5vw]">
      {options.map((option, index) => (
        <div className={`mr-[2.5vw] ${index !== options.length - 1 ? 'mb-[2.5vw]' : ''}`} key={index}>
          <input type="radio" id={`year${index + 1}`} name={name} value={option} />
          <label className="font-size-[5vw]" htmlFor={`year${index + 1}`}>{option}</label>
        </div>
      ))}
    </div>
  );

const PageTeamDetails = () => (
  <>
    <h3>Team Details</h3>
    <div className="input-box">
      <input type="text" name="entry.547408808" placeholder="Team Name" />
      <label htmlFor="entry.547408808">Team Name</label>
    </div>
  </>
);

const PageMember1Details = () => (
  <>
    <h3>Leader Details</h3>
    <div className="input-box">
      <input type="text" name="entry.1303614714" placeholder="Name" />
      <label htmlFor="entry.1303614714">Name</label>
    </div>
    <div className="input-box">
      <input type="tel" name="entry.1423445826" placeholder="Phone Number" />
      <label htmlFor="entry.1423445826">Phone Number</label>
    </div>
    <div className="input-box">
      <input type="email" name="entry.1815601350" placeholder="Email" />
      <label htmlFor="entry.1815601350">Email</label>
    </div>
    <div className="input-box">
      <input type="text" name="entry.649626201" placeholder="Roll number" />
      <label htmlFor="entry.649626201">Roll number</label>
    </div>
    <div className="Radio-box">
      <label htmlFor="entry.1344723250">Year</label>
      <RadioInput name="entry.1344723250" options={["1st", "2nd", "3rd", "4th"]} />
    </div>
  </>
);


const PageMember2Details = () => (
  <>
    <h3>Member 1 details</h3>
    <div className="input-box">
      <input type="text" name="entry.1907605039" placeholder="Name" />
      <label htmlFor="entry.1907605039">Name</label>
    </div>
    <div className="input-box">
      <input type="tel" name="entry.1053052574" placeholder="Phone Number" />
      <label htmlFor="entry.1053052574">Phone Number</label>
    </div>
    <div className="input-box">
      <input type="email" name="entry.1533877589" placeholder="Email" />
      <label htmlFor="entry.1533877589">Email</label>
    </div>
    <div className="input-box">
      <input type="text" name="entry.283846411" placeholder="Roll number" />
      <label htmlFor="entry.283846411">Roll number</label>
    </div>
    <div className="Radio-box">
      <label htmlFor="entry.717914590">Year</label>
      <RadioInput name="entry.717914590" options={["1st", "2nd", "3rd", "4th"]} />
    </div>
  </>
);

const PageMember3Details = () => (
  <>
    <h3>Member 2 Details</h3>
    <div className="input-box">
      <input type="text" name="entry.1531098243" placeholder="Name" />
      <label htmlFor="entry.1531098243">Name</label>
    </div>
    <div className="input-box">
      <input type="tel" name="entry.838716293" placeholder="Phone Number" />
      <label htmlFor="entry.838716293">Phone Number</label>
    </div>
    <div className="input-box">
      <input type="email" name="entry.556954673" placeholder="Email" />
      <label htmlFor="entry.556954673">Email</label>
    </div>
    <div className="input-box">
      <input type="text" name="entry.932514893" placeholder="Roll number" />
      <label htmlFor="entry.932514893">Roll number</label>
    </div>
    <div className="Radio-box">
      <label htmlFor="entry.611352063">Year</label>
      <RadioInput name="entry.611352063" options={["1st", "2nd", "3rd", "4th"]} />
    </div>
  </>
);

const PageMember4Details = () => (
  <>
    <h3>Member 3 Details </h3>
    <div className="input-box">
      <input type="text" name="entry.1959963827" placeholder="Name" />
      <label htmlFor="entry.1959963827">Name</label>
    </div>
    <div className="input-box">
      <input type="tel" name="entry.1351312002" placeholder="Phone Number" />
      <label htmlFor="entry.1351312002">Phone Number</label>
    </div>
    <div className="input-box">
      <input type="email" name="entry.1952046817" placeholder="Email" />
      <label htmlFor="entry.1952046817">Email</label>
    </div>
    <div className="input-box">
      <input type="text" name="entry.1259905927" placeholder="Roll number" />
      <label htmlFor="entry.1259905927">Roll number</label>
    </div>
    <div className="Radio-box">
      <label htmlFor="entry.70427367">Year</label>
      <RadioInput name="entry.70427367" options={["1st", "2nd", "3rd", "4th"]} />
    </div>
  </>
);

  const handleInputChange = (event, section) => {
    const { name, value } = event.target;
    if (section === "teamName") {
      // Direct update for teamName since it's a string
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    } else {
      // Nested update for members information
      setFormData(prevData => ({
        ...prevData,
        [section]: {
          ...prevData[section],
          [name]: value
        },
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(backendURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Form submitted successfully!");
      } else {
        console.error("Failed to submit form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };
  

  return (
    <>
      <Navbar />
      <div className="bg">
        <div className="container">
          <div className="form-box">
            <h2>Register Member Details</h2>
            <form onSubmit={handleSubmit}>
              {currentPage === 1 && (
                <PageTeamDetails
                  formData={formData.teamName}
                  handleInputChange={(event) => handleInputChange(event, "teamName")}
                />
              )}
              {currentPage === 2 && (
                <PageMember1Details
                  formData={formData.leader}
                  handleInputChange={(event) => handleInputChange(event, "leader")}
                />
              )}
              {currentPage === 3 && (
                <PageMember2Details
                  formData={formData.member1}
                  handleInputChange={(event) => handleInputChange(event, "member1")}
                />
              )}
              {currentPage === 4 && (
                <PageMember3Details
                  formData={formData.member2}
                  handleInputChange={(event) => handleInputChange(event, "member2")}
                />
              )}
              {currentPage === 5 && (
                <PageMember4Details
                  formData={formData.member3}
                  handleInputChange={(event) => handleInputChange(event, "member3")}
                />
              )}
              <div className="navigation-buttons">
                {currentPage > 1 && (
                  <button type="button" onClick={() => setCurrentPage(currentPage - 1)}>
                    Back
                  </button>
                )}
                {currentPage < 5 && (
                  <button type="button" onClick={() => setCurrentPage(currentPage + 1)}>
                    Next
                  </button>
                )}
                {currentPage === 5 && <button type="submit">Submit</button>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;