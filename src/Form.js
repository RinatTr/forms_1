import React, { Component } from 'react';
import './Form.css';

const countries = require("./countries.json");
const diet = ["omnivore","vegetarian","vegan","kosher","gluten-free","diary-free"];

//the default of a submit event on the form is to do a POST request, refresh the page, and turn the url into a query string. Because we don’t want this behavior we use preventDefault
class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      bdate: null,
      country: null,
      diet: null,
      wannabe: null,
      popup: "pop-up-hide",
      formConfirmed: false
    }
    this.handleChange = this.handleChange.bind(this)//so it will work in chrome
  }

  displayCountries() {
    return countries.map(country => {
      return <option key={country.name} value={country["name"]}>{country["name"]}</option>
    })
  }

  displayDiet() {
    return diet.map(diet => {
      return <option value={diet}>{diet}</option>
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  handleSubmit = () => {
    this.setState({
      popup: "pop-up-show"
    })
  }

  handleConfirm = () => {
    this.setState({
      formConfirmed: true
    })
  }

  handleClose = () => {
    this.setState({
      popup: "pop-up-hide"
    })
  }
  render() {
    let { name, bdate, country, diet, wannabe, popup, formConfirmed } = this.state;
    if (formConfirmed) {
      return <p>THANK YOU FOR YOUR SUBMISSION.</p>
    } else {
    return (
      <div className="Form">
        <header className="Form-header">
          <p>
            <h2>ARE YOU READY TO FLY TO MARS?</h2>
          </p>
          <img src="https://space-facts.com/wp-content/uploads/mars-transparent-300x300.png" />
        </header>
        <form onChange={this.handleChange}>
          <p>
            <label htmlFor="name"> Name </label>
            <input type="text" placeholder="enter name" name="name" value={name} id="name" />
          </p>
          <p>
            <label htmlFor="bdate"> Birth date </label>
            <input type="date" id="bdate" name="bdate" value={bdate} min="1900-01-01" max="2019-01-08" />
          </p>
          <p>
            <label htmlFor="country"> Country of Origin </label>
            <select name="country">
                {this.displayCountries()}
            </select>
          </p>
          <p>
            <label htmlFor="diet"> Dietary Preferences </label>
            <select name="diet">
                {this.displayDiet()}
            </select>
          </p>
          <p>
            <label htmlFor="wannabe"> Do you want to be a Mars Explorer? </label>
            <br />
            <textarea type="text" placeholder="" name="wannabe" value={this.state.wannabe} id="wannabe" />
          </p>
        </form>
          <button onClick={this.handleSubmit}>SUBMIT</button>
          <div className={popup}>
            <div id="text">
            <button onClick={this.handleClose} id="close"></button>
             Your Submission:
            <ul>
              <li>Name: {name}</li>
              <li>Birth Date: {bdate}</li>
              <li>Country: {country}</li>
              <li>Dietary Preferences: {diet}</li>
              <li>Do you want to be a Mars Explorer: {wannabe}</li>
            </ul>
            </div>
            <div id="confirm"><button id="confirm" onClick={this.handleConfirm}>CONFIRM</button></div>

            </div>
      </div>
    );
  }

  }
}

//
export default Form;
