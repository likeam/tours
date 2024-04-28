import "./Tours"
import './index.css'


const Tour = ({id, image, info, price, name}) => {
  
  return (
   <article className="single-tour">
    <img src={image} alt={name} />
    <footer>
      <div className="info-btn">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p>{info}</p>
      <button className="delete-btn">Not Intrested</button>
    </footer>
   </article>
  )
}
export default Tour