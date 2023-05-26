import React from "react";

class Salam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().getHours(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date().getHours(),
    });
  }

  render() {
    const { time } = this.state;
    let SalamMessage;

    if (time >= "06:00" && time < "11:00") {
      SalamMessage = "Selamat Pagi";
    } else if (time >= "12:00" && time < "15:00") {
      SalamMessage = "Selamat Siang";
    } else if (time >= "18:00" && time < "24:00") {
      SalamMessage = "Selamat Malam";
    } else {
      SalamMessage = "Selamat Tidur";
    }

    return (
      <div>
        <h1>{Hallo}</h1>
      </div>
    );
  }
}

export default Salam;
