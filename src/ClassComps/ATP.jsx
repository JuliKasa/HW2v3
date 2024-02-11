import { Component } from "react";

export default class ATP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Surname: "",
      Grade: "",
      nameMessege: false,
      surnameMessege: false,
      gradeMessege: false,
      checkMessege: false
    };
  }
  

  turnOn = (fieldName) => {
    this.setState({ [fieldName]: true });
  };

  turnOff = (fieldName, event) => {
    this.setState({ [fieldName]: false });
  
    if (fieldName === 'gradeMessege') {
      const gradeValue = parseInt(event.target.value, 10);
      if (gradeValue <= 555) {
        this.setState({ checkMessege: true });
      } else {
        this.setState({ checkMessege: false });
      }
    }
  };
  
  render() {
    return (
      <>
        <p style={{ fontSize: '200%', fontWeight: 'bold' }}>Q2</p>
  
        <div id="divATP" style={{ border: 'solid orange 2px' }}>
          <h2>Insert a New Student</h2>
          <form id="atpForm">
            <div className="form-group">
              <label>Name:</label>
              <br></br>
              {this.state.nameMessege && (
                <p style={{ color: 'red', fontSize: '14px' }}>Enter Your Name</p>
              )}
  
              <input
                type="text"
                className="form-control"
                id="nameTB"
                onFocus={() => this.turnOn('nameMessege')}
                onBlur={() => this.turnOff('nameMessege')}
              ></input>
            </div>
            <br></br>
            <div className="form-group">
              <label>Surname: </label>
              <br></br>
              {this.state.surnameMessege && (
                <p style={{ color: 'red', fontSize: '14px' }}>Enter Your Surname</p>
              )}
  
              <input
                type="text"
                className="form-control"
                id="surnameTB"
                onFocus={() => this.turnOn('surnameMessege')}
                onBlur={() => this.turnOff('surnameMessege')}
              ></input>
            </div>
            <br></br>
            <div className="form-group">
              <label>Grade: </label>
              <br></br>
              {this.state.gradeMessege && (
                <p style={{ color: 'red', fontSize: '14px' }}>
                  {this.state.checkMessege ? 'Try Next Year' : 'Welcome!'}
                </p>
              )}
  
              <input
                type="text"
                className="form-control"
                id="gradeTB"
                onFocus={() => this.turnOn('gradeMessege')}
                onBlur={(event) => this.turnOff('gradeMessege', event)}  // למה הוולקאם מופיע בלחיצה אם הגדרתי שזה יהיה רק ביציאה?
                 
              ></input>
            </div>
           
          </form>
        </div>
      </>
    );
  }
}
