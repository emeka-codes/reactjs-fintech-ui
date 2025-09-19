import Button from "./Button.jsx";
import Card from "./Card.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";


const Hero= ({ img }) => {
    return(
        <div className="hero">
            <div className= "hero-left">
                <img src= {img} alt="logo" className="hero-logo"/>
            </div>
            <div className= "hero-middle">
                <h2>Secure, Grow and Benefit with us.</h2>
                <h5>Welcome to Ace Bank – Your Trusted Financial Partner
                Discover smarter banking tailored to your needs. From seamless digital transactions to personalized financial advice, we’re here to help you achieve your goals. <br /><br /> Join millions of satisfied customers who trust us to empower their financial journey. Experience banking that works for you.</h5>
                <Button btn= 'open-acct-btn' text="Open an account" />
            </div>

            <div className="hero-right">
                <Card 
                    cardClass= 'card1' 
                    texts= {[{text: "New Users", className: "firstText"}, {text: "60K +", className: "secondText"}, {text: "110%", className: "thirdText", iconStyle: "iconStyle", withIcon: true, icon: faCaretUp}]}
                />
                <div className= "hero-button">
                    <h6>Online banking</h6>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow-icon"/>
                </div>
                <div className= "hero-button">
                    <h6>Car Services</h6>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow-icon"/>
                </div>
                <div className= "hero-button">
                    <h6>Financial Reports</h6>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow-icon"/>
                </div>
            </div>
                

            </div>
        
    );
}

export default Hero;