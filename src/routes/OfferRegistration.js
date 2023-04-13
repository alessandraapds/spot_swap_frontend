import React from "react";

const OfferRegistration = () => {
  return (
    <div class="container">
      <h2>Register your offer</h2>
      <form>
        {/* Offer name */}
        <div class="form-group">
          <label for="offerName">Name</label>
          <input
            type="text"
            class="form-control"
            id="offerName"
            aria-describedby="emailHelp"
            placeholder="Give your offer a name"
            required
          />
        </div>

        {/* Address */}
        <div class="form-group">
          <label for="address">Address</label>
          <input
            type="text"
            class="form-control"
            id="address"
            placeholder="Tell us the address"
            required
          />
        </div>

        {/* -- Offer size */}
        <div class="form-group">
          <label for="offerSize">Offer size</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="offerSize"
            value="option1"
            required
          />
          <label class="form-check-label" for="inlineRadio1">
            Small
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label class="form-check-label" for="inlineRadio2">
            Medium
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="option3"
          />
          <label class="form-check-label" for="inlineRadio3">
            Big
          </label>
        </div>

        {/* Price */}
        <div class="form-group">
          <label for="price">Price</label>
          <input
            type="number"
            class="form-control"
            id="price"
            placeholder="Only numbers"
            required
          />
        </div>

        {/* Available from */}
        <div class="form-group">
          <label for="availableFrom">Available from</label>
          <input
            type="datetime-local"
            class="form-control"
            id="availableFrom"
            placeholder="Tell us the address"
            required
          />
        </div>

        {/* Available until */}
        <div class="form-group">
          <label for="address">Available until</label>
          <input
            type="datetime-local"
            class="form-control"
            id="address"
            placeholder="Tell us the address"
            required
          />
        </div>

        {/* Picture
        <div class="form-group">
          <label for="exampleFormControlFile1">Choose a picture: </label>
          <input
            type="file"
            class="form-control-file"
            id="exampleFormControlFile1"
          />
        </div> */}

        <button type="submit" class="btn btn-primary">
          List my offer
        </button>
      </form>
    </div>
  );
};

export default OfferRegistration;
