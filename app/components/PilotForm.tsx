"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "./Icon";

export default function PilotForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      "This is a visual preview. Your details were not sent or stored; connect a pilot sign-up service before launch.",
    );
  }

  return (
    <form className="pilot-form" onSubmit={handleSubmit}>
      <div className="pilot-form__heading">
        <span><Icon name="message" size={20} /></span>
        <div>
          <h3>Explore the doctor pilot</h3>
          <p>Tell us a little about your clinic.</p>
        </div>
      </div>
      <label>
        Your name
        <input autoComplete="name" name="name" placeholder="Dr. Your Name" required />
      </label>
      <div className="pilot-form__row">
        <label>
          Clinic
          <input autoComplete="organization" name="clinic" placeholder="Clinic name" required />
        </label>
        <label>
          Work email
          <input autoComplete="email" name="email" placeholder="you@clinic.com" required type="email" />
        </label>
      </div>
      <button className="button button--primary pilot-form__submit" type="submit">
        Request a conversation <Icon name="arrow" size={17} />
      </button>
      <p className="pilot-form__disclaimer">
        Preview only. Do not enter patient information. This form is not connected to a service.
      </p>
      {message ? <p className="pilot-form__message" role="status">{message}</p> : null}
    </form>
  );
}
