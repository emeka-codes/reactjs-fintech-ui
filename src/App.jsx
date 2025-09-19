
import './App.css';
import Navbar from './Mynavbar.jsx';
import Hero from './Hero.jsx';
import logo from './assets/AceBankLogo.png';
import aboutImage from './assets/AceBankAboutUsPicture.png';
import heroImage from './assets/AceBankHeroPhoto.png';
import aceBankFeatures1 from './assets/AceBankFeatures1.jfif';
import aceBankFeatures2 from './assets/AceBankFeatures2.jfif';
import aceBankFeatures3 from './assets/AceBankFeatures3.jfif';
import AppStoreLogo from './assets/AppStoreLogo.jpg';
import GooglePlayLogo from './assets/GooglePlayLogo2.jpg';
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

      <section className= "services">
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
      </section>

      <section className= "about">
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
              <div className= "service-button2">
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
      </section>

      <section className= "impact">
        <h2>Our Impact in <br />Numbers</h2>
        <h5>2 M + Active <br /> Customers</h5>
        <h5>60+ Customers</h5>
        <h5>20+ Global <br />Partners</h5>
      </section>

      <section id="features">
        <div className="top-features">
            <h2>Explore Our Standout Features</h2>
        </div>
        <div className="bottom-features">
            <div className="first-card">
                <div className="bg-pic">
                    <img src={aceBankFeatures3}/>
                </div>
                <div className="sme">
                    <h6>Small and Medium<br />Enterprises</h6>
                    <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' />
                </div>

            </div>
            <div className="second-card">
                <div className="bg-pic">
                    <img src={aceBankFeatures2}/>
                </div>
                <div className="sme">
                    <h6>Corporate Banking</h6>
                    <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' />
                </div>
            </div>
            <div className="third-card">
                <div className="bg-pic">
                    <img src={aceBankFeatures1}/>
                </div>
                <div className="sme">
                    <h6>Personal Banking</h6>
                    <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' />
                </div>

            </div>
            <div className="fourth-card">
                <div className="bg-pic">
                    <img src={aboutImage}/>
                </div>
                <div className="sme">
                    <h6>Investment Banking</h6>
                    <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' />
                </div>
            </div>
        </div>
      </section>

      <section id="mobile-app">
        <div className="left-mobile-app">
            <h2>Download Our<br />Mobile App </h2>
            <h5>Ace Bank is available for Android, IOS and Web. Open an account today</h5>
        </div>
        <div className="right-mobile-app">
            <div className="google-play">
              <img src={GooglePlayLogo}/>
            </div>
            <div className="app-store">
              <img src={AppStoreLogo}/>
            </div>
        </div>
      </section>


    </>
  );
}

export default App;
