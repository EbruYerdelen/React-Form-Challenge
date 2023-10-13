import React from "react";

export default function Form() {
  const [forms, setForms] = React.useState({
    mail: "",
    password1: "",
    password2: "",
    joinCheckbox: "",
  });

  console.log(forms);
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setForms((prevForms) => {
      return {
        ...prevForms,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  let confirming;
  let thanking;
  function handleSubmit(event) {
    event.preventDefault();
    confirming =
      forms.password1 === forms.password2
        ? console.log("Successfully signed up")
        : console.log("Passwords do not match");

    thanking = forms.joinCheckbox
      ? console.log("Thanks for signin up for our newsletter!")
      : forms.joinCheckbox;
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="mail"
          value={forms.mail}
          placeholder="Email address"
          className="form--input"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password1"
          value={forms.password1}
          placeholder="Password"
          className="form--input"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password2"
          value={forms.password2}
          placeholder="Confirm password"
          className="form--input"
          onChange={handleChange}
        />

        <div className="form--marketing">
          <input
            name="joinCheckbox"
            checked={forms.joinCheckbox}
            id="okayToEmail"
            type="checkbox"
            onChange={handleChange}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit" onSubmit={handleSubmit}>
          Sign up
        </button>
      </form>
    </div>
  );
}
