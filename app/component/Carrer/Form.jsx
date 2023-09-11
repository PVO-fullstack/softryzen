import React from "react";

export const Form = () => {
  return (
    <div>
      <h1>
        Don&apost miss your opportunity! Fill out the form right now and join
        our team!
      </h1>
      <form name="Carrer form">
        <label>
          Full name
          <input type="text" name="name" />
        </label>
        <label>
          E-mail
          <input type="email" name="email" />
        </label>
        <label>
          Position
          <input type="text" name="position" />
        </label>
        <label>
          Phone
          <input type="phone" name="phone" />
        </label>
        <textarea name="message" id="" cols="30" rows="10"></textarea>
        <input type="checkbox" name="confirm" id="" />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};
