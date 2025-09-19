
import './App.css';
import Navbar from './Mynavbar.jsx';
import Hero from './Hero.jsx';
import logo from './assets/AceBankLogo.png';
import aboutImage from './assets/AceBankAboutUsPicture.png';
import heroImage from './assets/AceBankHeroPhoto.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';
import Card from './Card.jsx';



function App(){
  const values= ["Integrity", "Transparency", "Innovation", "Customer Satisfaction"];
  const valuesList= values.map((value) => <li key={value}>{value}</li>);
  return (
    <>
      <Navbar img={logo} />
      <Hero img={heroImage} />

      <div className= "services">
        <div className= "left-service">
          <h2>What Exactly Do We Offer?</h2>
          <h5>At Ace Bank, we provide a full suite of financial solutions tailored to meet your needs. From secure savings accounts and flexible loans to cutting-edge digital banking services and personalized wealth management, we're here to help you achieve your financial goals with ease and confidence</h5>
          <div className= "service-button">
              <h6>Learn more</h6>
              <FontAwesomeIcon icon={faArrowRight} className="arrow-icon"/>
          </div>
        </div>
         <div className= "right-service">
          <Card cardClass= "service-card" texts= {[{text: "Loans & Credit", className:"loan-card", withIcon: true, icon: faDollarSign, iconStyle: "loan-style"}]}/>
          <Card cardClass= "service-card" texts= {[{text: "Wealth Management", className: "wealth-card", withIcon: true, icon: faSackDollar, iconStyle: "wealth-style" }]}/>
          <Card cardClass= "service-card" texts= {[{text: "Checking Accounts", className:"checking-card",withIcon: true, icon: faWallet, iconStyle: "checking-style"}]}/>
          <Card cardClass= "service-card" texts= {[{text: "International Banking", className: "international-card", withIcon: true, icon: faPlaneUp, iconStyle: "international-style"}]}/>

          
         </div>
      </div>

      <div className= "about">
        <div className= "about-title">
          <h2>What Are We All About</h2>
        </div>
        <div className= "about-body">
          <div className= "about-body-left">
            <img src={aboutImage} alt="about-image" className="about-image"/>
          </div>
          <div className= "about-body-right">
            <div className='mission'>
              <h3>Our Mission</h3>
              <h5>At Ace Bank, our mission is to empower individuals, businesses and our customers at large by providing innovative financial solutions and quality services.</h5>
            </div>
            <div className='vision'>
              <h3>Our Vision</h3>
              <h5>To be the leading and dominant financial institution in the World.</h5>
            </div>
            <div className='values'>
              <h3>Our Core Values</h3>
              <ul>{valuesList}</ul>
            </div>
            <div className='about-body-right-bottom'>
              <div className= "service-button">
              <h6>Learn more</h6>
              <FontAwesomeIcon icon={faArrowRight} className="arrow-icon"/>
              </div>
              <div className='about-us-button'>
                <h6>About Us</h6>
                <FontAwesomeIcon icon={faArrowRight} className="about-icon"/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
