import Profile from "./profile/Profile.js";
import NavComponent from "./profile/Header.js"
import PropTypes from 'prop-types'
import FooterComponent from "./profile/Footer.js"
import './App.css';

function App() {

  let message = `Hello Ndoumbe TOURE`;
  const handleName = () => {

     alert(message);
  } 

  return (
    <div className="App">
       <NavComponent/>
      <header className="App-header">
         <div>
           <Profile fullName = "Ndoumbe TOURE" alertMe = {handleName}  bio = "Etudinte"  profession = "Etudinte en full stack js"/>
         </div>
         <FooterComponent/>
      </header>
    </div>
  );
}

App.propTypes = {

  
  fullName : PropTypes.string,
  bio : PropTypes.string,
  profession : PropTypes.string,

};

export default App;
