import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
 
 const Card = ({ cardClass, texts }) => {
    return(
        <div className= {cardClass}>
            {texts.map((item, index) => (
                item.withIcon ? (
                    <h4 key={index} className={item.className}>
                        <FontAwesomeIcon icon={item.icon} className= {item.iconStyle}/>{item.text}
                    </h4>
                    
                ) : (
                    <h4 key={index} className={item.className}>{item.text}</h4>
                )
            ))}
        </div>
    );

 }
 export default Card;