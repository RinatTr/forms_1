import React, { Component } from 'react';
import './Form.css';

const countries = require("./countries.json");
const diet = ["omnivore","vegetarian","vegan","kosher","gluten-free","diary-free"];

//the default of a submit event on the form is to do a POST request, refresh the page, and turn the url into a query string. Because we don’t want this behavior we use preventDefault
class Form extends Component {
  constructor() {
    super();
    this.state = {
      popup: "pop-up-hide",
      formConfirmed: false,
      name: null,
      bdate: null,
      country: null,
      diet: null,
      wannabe: null,
      breath: "",
      marital: "",
      stress: "",
      claus: "",
      cancer: false,
      heart: false,
      diabetes: false,
      siblings: false,
      siblingsNum: "",
      parents: false,
      parentsNum: "",
      grandparents: false,
      grandparentsNum: "",
      hs: false,
      ad: false,
      bd: false,
      md: false,
      phd: false,
      other: false,
      otherInput: ""
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

  handleChange = (event) => {
    let { name, value, type, checked } = event.target;
    (type === "checkbox") ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
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
    let { name,
          bdate,
          country,
          diet,
          wannabe,
          popup,
          formConfirmed,
          breath,
          marital,
          stress,
          claus,
          cancer,
          heart,
          diabetes,
          siblings,
          siblingsNum,
          parents,
          parentsNum,
          grandparents,
          grandparentsNum,
          hs,
          ad,
          bd,
          md,
          phd,
          other,
          otherInput } = this.state;
    if (formConfirmed) {
      return <p>THANK YOU FOR YOUR SUBMISSION.</p>
    } else {
    return (
      <div className="Form">
        <header className="Form-header">
          <p>
            <h2>ARE YOU READY TO FLY TO MARS?</h2>
          </p>
          <img alt="mars" src="https://space-facts.com/wp-content/uploads/mars-transparent-300x300.png" />
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
            <textarea type="text" placeholder="" name="wannabe" value={wannabe} id="wannabe" />
          </p>
          <div className="radios">
          <p>
            Can you hold your breath under water longer than 1 minute?
          </p>
            <div>
              <span><input type="radio" name="breath" value="yes" checked={breath === "yes"} onChange={this.handleChange} />Yes</span>
              <span><input type="radio" name="breath" value="no" checked={breath === "no"} onChange={this.handleChange} />No</span>
            </div>
          <p>
            What is your marital status?
          </p>
            <div>
              <span><input type="radio" name="marital" value="Married" checked={marital === "Married"} onChange={this.handleChange} />Married</span>
              <span><input type="radio" name="marital" value="Unmarried" checked={marital === "Unmarried"} onChange={this.handleChange} />Unmarried</span>
            </div>
          <p>
            When you are in a stressful or difficult situation, how do you most frequently react?
          </p>
            <div>
              <span><input type="radio" name="stress" value="Determination: ..." checked={stress === "Determination: ..."} onChange={this.handleChange} />Determination: I continue to confront the situation.</span>
              <span><input type="radio" name="stress" value="Defeat: ..." checked={stress === "Defeat: ..."} onChange={this.handleChange} />Defeat: I stop confronting the situation.</span>
              <span><input type="radio" name="stress" value="Anger: ..." checked={stress === "Anger: ..."} onChange={this.handleChange} />Anger: I become upset at the situation.</span>
              <span><input type="radio" name="stress" value="Resourcefulness: ..." checked={stress === "Resourcefulness: ..."} onChange={this.handleChange} />Resourcefulness: I seek help to confront the situation.</span>
            </div>
          <p>
            Are you claustrophobic?
          </p>
            <div>
              <span><input type="radio" name="claus" value="yes" checked={claus === "yes"} onChange={this.handleChange} />Yes</span>
              <span><input type="radio" name="claus" value="no" checked={claus === "no"} onChange={this.handleChange} />No</span>
              <span><input type="radio" name="claus" value="I don't know" checked={claus === "I don't know"} onChange={this.handleChange} />I don't know</span>
            </div>
          </div>
          <div className="checkboxes">
            <p>
              Does your family have a history of (check all that apply):
            </p>
            <div>
              <span>
              <input
                name="cancer"
                type="checkbox"
                checked={cancer}
                onChange={this.handleChange}
                /> Cancer
            </span>
            <span>
              <input
                name="heart"
                type="checkbox"
                checked={heart}
                onChange={this.handleChange}
                /> Heart Disease
            </span>
            <span>
              <input
                name="diabetes"
                type="checkbox"
                checked={diabetes}
                onChange={this.handleChange}
                /> Diabetes
            </span>
          </div>
            <p>
              Do you have any living (check all that apply):
            </p>
            <div>
              <span>
              <input
                name="siblings"
                type="checkbox"
                checked={siblings}
                onChange={this.handleChange}
                /> Siblings? <br /> {siblings ? <input type="text" placeholder="How many?" name="siblingsNum" value={siblingsNum} /> : ""}
            </span>
            <span>
              <input
                name="parents"
                type="checkbox"
                checked={parents}
                onChange={this.handleChange}
                /> Parents? <br /> {parents ? <input type="text" placeholder="How many?" name="parentsNum" value={parentsNum} /> : ""}
            </span>
            <span>
              <input
                name="grandparents"
                type="checkbox"
                checked={grandparents}
                onChange={this.handleChange}
                /> Grandparents? <br /> {grandparents ? <input type="text" placeholder="How many?" name="grandparentsNum" value={grandparentsNum} /> : ""}
            </span>
            </div>
            <p>
              Check all educational credentials you have received:
            </p>
            <div>
              <span>
              <input
                name="hs"
                type="checkbox"
                checked={hs}
                onChange={this.handleChange}
                /> High school diploma or GED equivalent
            </span>
            <span>
              <input
                name="ad"
                type="checkbox"
                checked={ad}
                onChange={this.handleChange}
                /> Associate's Degree
            </span>
            <span>
              <input
                name="bd"
                type="checkbox"
                checked={bd}
                onChange={this.handleChange}
                /> Bachelor's Degree
            </span>
            <span>
              <input
                name="md"
                type="checkbox"
                checked={md}
                onChange={this.handleChange}
                /> Master's Degree
            </span>
            <span>
              <input
                name="phd"
                type="checkbox"
                checked={phd}
                onChange={this.handleChange}
                /> PhD
            </span>
            <span>
              <input
                name="other"
                type="checkbox"
                checked={other}
                onChange={this.handleChange}
                /> Other <br />{other ? <input type="text" placeholder="please specify" name="otherInput" value={otherInput} /> : ""}
            </span>
            </div>
        </div>
        </form>
          <button onClick={this.handleSubmit}>SUBMIT</button>
          <div className={popup}>
            <div id="popup-text">
            <button onClick={this.handleClose} id="close"></button>
             Your Submission:
            <ul>
              <li>Name: <span>{name}</span></li>
              <li>Birth Date: <span>{bdate}</span></li>
              <li>Country: <span>{country}</span></li>
              <li>Dietary Preferences: <span>{diet}</span></li>
              <li>Do you want to be a Mars Explorer: <span>{wannabe}</span></li>
              <li>Can you hold your breath under water longer than 1 minute? <span>{breath}</span></li>
              <li>What is your marital status? <span>{marital}</span></li>
              <li>When you are in a stressful ... ? <span>{stress}</span></li>
              <li>Are you claustrophobic? <span>{claus}</span></li>
              <li>Family medical history: <span>{cancer? "cancer " : ""} {heart? "heart disease":""} {diabetes? "diabetes":""}</span></li>
              <li>Family living: <span>{siblings? siblingsNum+" siblings" : ""} {parents? parentsNum+" parents":""} {grandparents? grandparentsNum+" grandparents":""}</span></li>
              <li>Education: <span>{hs? "High school diploma":""} {ad? "Associate's Degree":""} {bd? "Bachelor's Degree":""} {md? "Master's Degree":""} {phd? "PhD":""} {other? "Other: "+otherInput:""}</span></li>
            </ul>
            </div>
            <div id="confirm"><button id="confirm" onClick={this.handleConfirm}>CONFIRM</button></div>
          </div>
      </div>
    );
  }

  }
}
//WHEN BACK:
//add check boxes
//watch props lecture.

//make the your submission as props.

export default Form;
