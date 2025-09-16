 const Card = ({ cardClass, texts }) => {
    return(
        <div className= {cardClass}>
            {texts.map((item, index) => (
                <h4 key={index} className= {item.className}>{item.text}</h4>
            ))}
        </div>
    );

 }
 export default Card;