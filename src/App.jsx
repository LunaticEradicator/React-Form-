import React from "react";

export default function App() {
  const [formData, setFormData] = React.useState(
    {
      emailId: "",
      password: "",
      confirmPassword: "",
      isNewsletter: false
    }
  )

  console.log(formData)

  function handleClick(event) {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();

    // if (formData.password === formData.confirmPassword) {
    //   console.log('Successfully Signed In')
    // }
    // else {
    //   console.log('Passwords do not match')
    //   return;
    // }

    formData.password === formData.confirmPassword ? console.log('Successfully Signed In') : console.log('Passwords do not match');

    if (formData.isNewsletter === true && formData.password === formData.confirmPassword) {
      console.log('Thanks for signing up for our newsletter');
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>

      <div className="emailId-div">
        <label htmlFor="emailId"></label>
        <input
          type="text"
          name="emailId"
          id="emailId"
          placeholder="Email ID"
          onChange={handleClick}
          value={formData.emailId} // for Controlling State
        />
      </div>

      <div className="password-div">
        <label htmlFor="password"></label>
        <input type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleClick}
          value={formData.password}
        />
      </div>

      <div className="confirmPassword-div">
        <label htmlFor="emailId"></label>
        <input type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleClick}
          value={formData.confirmPassword}
        />
      </div>

      <div className="newsletter-div">
        <input type="checkbox"
          name="isNewsletter"
          id="isNewsletter"
          onChange={handleClick}
          checked={formData.isNewsletter}
        />
        <label htmlFor="isNewsletter">I want to join the newsletter</label>
      </div>

      <div className="signUp">
        <button>Sign Up</button>
      </div>

    </form>
  )
}