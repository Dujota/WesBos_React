import React, { Component } from "react";

export class AddFishForm extends Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = event => {
    //1 stop form from submitting
    event.preventDefault();
    //2 grab all the data from the inputs and save it into an object
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    };
    //3 update state with our addFish method that is passed down from our App component
    this.props.addFish(fish);

    //4 refresh the form
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} placeholder="Name" type="text" />
        <input
          name="price"
          ref={this.priceRef}
          placeholder="Price"
          type="text"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Description" />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Image"
        />
        <button type="submit"> + Add Fish</button>
      </form>
    );
  }
}
export default AddFishForm;
