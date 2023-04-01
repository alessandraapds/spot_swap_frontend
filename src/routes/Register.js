import React from "react";

const Register = () => {
  return (
    <div class="container">
      <div>Register your offer</div>
      <form>
        <div>
          Offer Name:
          <input
            name="name"
            id="name"
            placeholder="Give a name to your parking spot"
          />
        </div>
        <div>
          Address:
          <input
            name="name"
            id="name"
            placeholder="Give a name to your parking spot"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
