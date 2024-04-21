import React, { useState } from "react";
import Navbar from "./Navbar";
import "./1_Registrationform.css";



const RegistrationForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    team_name: "",
    Leader_name: "",
    Leader_Phone_number: "",
    Leader_email: "",
    Leader_roll_number: "",
    Member_1_name: "",
    Member_1_Phone_number: "",
    Member_1_Email: "",
    Member_1_Roll_number: "",
    Member_2_Name: "",
    Member_2_Phone_number: "",
    Member_2_Email: "",
    Member_2_Roll_number: "",
    Member_3_Name: "",
    Member_3_Phone_number: "",
    Member_3_Email: "",
    Member_3_Roll_number: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("https://gls24saic-default-rtdb.firebaseio.com/registration.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

  if(res){
    setFormData({
    team_name: "",
    Leader_name: "",
    Leader_Phone_number: "",
    Leader_email: "",
    Leader_roll_number: "",
    Member_1_name: "",
    Member_1_Phone_number: "",
    Member_1_Email: "",
    Member_1_Roll_number: "",
    Member_2_Name: "",
    Member_2_Phone_number: "",
    Member_2_Email: "",
    Member_2_Roll_number: "",
    Member_3_Name: "",
    Member_3_Phone_number: "",
    Member_3_Email: "",
    Member_3_Roll_number: "",
  });
  alert("Form Submitted Successfully. Thank you for registering");  
  setCurrentPage(1);}
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const formPages = [
    <PageTeamDetails
      formData={formData}
      handleInputChange={handleInputChange}
    />,
    <PageMember1Details
      formData={formData}
      handleInputChange={handleInputChange}
    />,
    <PageMember2Details
      formData={formData}
      handleInputChange={handleInputChange}
    />,
    <PageMember3Details
      formData={formData}
      handleInputChange={handleInputChange}
    />,
    <PageMember4Details
      formData={formData}
      handleInputChange={handleInputChange}
    />,
  ];
  
  return (
    <>
      <Navbar />
      <div className="bg">
        <div className="container">
          <div className="form-box">
            <h2>Register Member Details</h2>
            <form onSubmit={handleSubmit}>
              {formPages[currentPage - 1]}
              <div className="navigation-buttons">
                {currentPage > 1 && (
                  <button type="button" onClick={goToPreviousPage}>
                    Back
                  </button>
                )}
                {currentPage < formPages.length && (
                  <button type="button" onClick={goToNextPage}>
                    Next
                  </button>
                )}
                {currentPage === formPages.length && (
                  <button type="submit">Submit</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const PageTeamDetails = ({ formData, handleInputChange }) => (
  <>
    <h3>Team Details</h3>
    <div className="input-box">
      <input
        type="text"
        name="team_name"
        required
        value={formData.team_name}
        onChange={handleInputChange}
        placeholder="Team Name"
      />
      <label>Team Name</label>
    </div>
  </>
);

const PageMember1Details = ({ formData, handleInputChange }) => (
  <>
    <h3>Leader Details</h3>
    <div className="input-box">
      <input
        type="text"
        name="Leader_name"
        required
        placeholder="Name"
        value={formData.Leader_name}
        onChange={handleInputChange}
      />
      <label>Name</label>
    </div>
    <div className="input-box">
      <input
        type="tel"
        name="Leader_Phone_number"
        required
        placeholder="Phone Number"
        value={formData.Leader_Phone_number}
        onChange={handleInputChange}
      />
      <label>Phone Number</label>
    </div>
    <div className="input-box">
      <input
        type="email"
        name="Leader_email"
        required
        value={formData.Leader_email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <label htmlFor="Leader_email">Email</label>
    </div>
    <div className="input-box">
      <input
        type="text"
        required
        name="Leader_roll_number"
        placeholder="Roll number"
        value={formData.Leader_roll_number}
        onChange={handleInputChange}
      />
      <label>Roll number</label>
    </div>
  </>
);

// Similar implementation for PageMember2Details, PageMember3Details, and PageMember4Details
const PageMember2Details = ({ formData, handleInputChange }) => (
  <>
    <h3>Member 1 details</h3>
    <div className="input-box">
      <input
        type="text"
        required
        name="Member_1_name"
        value={formData.Member_1_name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <label>Name</label>
    </div>
    <div className="input-box">
      <input
        type="tel"
        required
        name="Member_1_Phone_number"
        placeholder="Phone Number"
        value={formData.Member_1_Phone_number}
        onChange={handleInputChange}
      />
      <label>Phone Number</label>
    </div>
    <div className="input-box">
      <input
        type="email"
        required
        name="Member_1_Email"
        placeholder="Email"
        value={formData.Member_1_Email}
        onChange={handleInputChange}
      />
      <label>Email</label>
    </div>
    <div className="input-box">
      <input
        type="text"
        required
        name="Member_1_Roll_number"
        placeholder="Roll number"
        value={formData.Member_1_Roll_number}
        onChange={handleInputChange}
      />
      <label>Roll number</label>
    </div>

  </>
);

const PageMember3Details = ({ formData, handleInputChange }) => (
  <>
    <h3>Member 2 Details</h3>
    <div className="input-box">
      <input
        type="text"
        name="Member_2_Name"
        value={formData.Member_2_Name}
        required
        onChange={handleInputChange}
        placeholder="Name"
      />
      <label>Name</label>
    </div>
    <div className="input-box">
      <input
        required
        type="tel"
        value={formData.Member_2_Phone_number}
        onChange={handleInputChange}
        name="Member_2_Phone_number"
        placeholder="Phone Number"
      />
      <label>Phone Number</label>
    </div>
    <div className="input-box">
      <input
        type="email"
        name="Member_2_Email"
        required
        value={formData.Member_2_Email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <label>Email</label>
    </div>
    <div className="input-box">
      <input
        type="text"
        name="Member_2_Roll_number"
        required
        value={formData.Member_2_Roll_number}
        onChange={handleInputChange}
        placeholder="Roll number"
      />
      <label>Roll number</label>
    </div>
  </>
);

const PageMember4Details = ({ formData, handleInputChange }) => (
  <>
    <h3>Member 3 Details </h3>
    <div className="input-box">
      <input
        required
        type="text"
        name="Member_3_Name"
        placeholder="Name"
        value={formData.Member_3_Name}
        onChange={handleInputChange}
      />
      <label>Name</label>
    </div>
    <div className="input-box">
      <input
        type="tel"
        name="Member_3_Phone_number"
        required
        value={formData.Member_3_Phone_number}
        onChange={handleInputChange}
        placeholder="Phone Number"
      />
      <label>Phone Number</label>
    </div>
    <div className="input-box">
      <input
        type="email"
        name="Member_3_Email"
        required
        placeholder="Email"
        value={formData.Member_3_Email}
        onChange={handleInputChange}
      />
      <label>Email</label>
    </div>
    <div className="input-box">
      <input
        type="text"
        value={formData.Member_3_Roll_number}
        required
        onChange={handleInputChange}
        name="Member_3_Roll_number"
        placeholder="Roll number"
      />
      <label>Roll number</label>
    </div>
  </>
);

export default RegistrationForm;
