// Imports.
import React from "react";
import CalculatorTitle from "./calculatorTitle.js";
import OutputScreen from "./outputScreen.js";
import Button from "./button.js";

class Calculator extends React.Component {
  constructor() {
    super();

    // set our default state
    this.state = {
      question: "",
      answer: "",
    };

    // Bind our handleClick method (sets 'this' explicitly
    // to refer to this component) We did this because 'this'
    // would refer to the source of the click events
    this.handleClick = this.handleClick.bind(this);
  }
  // our method to handle all click events from our buttons
  handleClick(event) {
    // get the value from the target element (button)
    const value = event.target.value;

    switch (value) {
      case "=": {
        // if it's an equal sign, use the eval module
        // to evaluate the question ,convert the answer
        // (in number) to String
        if (this.state.question !== "") {
          var ans = "";
          try {
            ans = eval(this.state.question);
          } catch (err) {
            this.setState({ answer: "Math Error" });
          }
          if (ans === undefined) this.setState({ answer: "Math Error" });
          // update answer in our state.
          else this.setState({ answer: ans, question: "" });
        }
      }
      case "Clear": {
        // if it's the Clears sign, just clean our
        // question and answer in the state
        this.setState({ question: "", answer: "" });
      }

      case "Delete": {
        var str = this.state.question;
        str = str.substring(0, str.length - 1);
        this.setState({ question: str });
      }

      default: {
        // for every other command, update the answer in the state
        this.setState({ question: (this.state.question += value) });
      }
    }
  }

  render() {
    return (
      <div className="frame">
        <CalculatorTitle value="GeeksforGeeks Calculator" />
        <div class="mainCalc">
          <OutputScreen />
          <div className="button-row">
            <Button label={"Clear"} />
            <Button label={"Delete"} />
            <Button label={"."} />
            <Button label={"/"} />
          </div>
          <div className="button-row">
            <Button label={"7"} />
            <Button label={"8"} />
            <Button label={"9"} />
            <Button label={"*"} />
          </div>
          <div className="button-row">
            <Button label={"4"} />
            <Button label={"5"} />
            <Button label={"6"} />
            <Button label={"-"} />
          </div>
          <div className="button-row">
            <Button label={"1"} />
            <Button label={"2"} />
            <Button label={"3"} />
            <Button label={"+"} />
          </div>
          <div className="button-row">
            <Button label={"0"} />
            <Button label={"="} />
          </div>
        </div>
      </div>
    );
  }
}

// Export Calculator Component.
export default Calculator;
