import Button from './Button.jsx';

function Navbar({ img }) {
    const navItems = ["Home", "About", "Contact", "Blog", "Careers"]
    const navList = navItems.map(item => <li key={item}><a href={"#"+item}>{item}</a></li>)
    
    return (
        <div className="navbar">
            <div className="nav-left">
                <img src= {img} alt="logo" className="nav-logo"/>
                <h3 className= 'ace-bank-nav-text'>Ace Bank</h3>
            </div>
            <ul className="nav-items">
                {navList}
            </ul>
            <div className= "nav-right">
                <Button btn= 'login-btn' text="Login" />
                <Button btn= 'signup-btn' text="Sign Up" />
            </div>
        </div>

    );
}      
export default Navbar;