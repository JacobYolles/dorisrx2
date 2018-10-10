import React from "react";
import API from "../../utilities/API";



class Input extends React.Component {

  state = {
    drugs: [],
  }

componentDidMount() {
  // alert("here")
  API.getDrugs()
  .then(res => this.setState({
    drugs: res.data
  }))
  .catch(err => console.log(err))
}


  render() {
    return (
      <div>
        <h1>Daily Prescription Log</h1>
        <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
          ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
          quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
          diam, sit amet facilisis lectus blandit at.
    </p>
      </div>

    )
  }


}

export default Input;

// const Input = () => (
//   <div>
//     <h1>Enter Your Prescription Information</h1>
//     <p>
//       Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
//       ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
//       quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
//       imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
//       diam, sit amet facilisis lectus blandit at.
//     </p>
//   </div>
// );

// export default Input;
