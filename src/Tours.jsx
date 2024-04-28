import Tour from "./Tour"
import './index.css'

const Tours = ({tour}) => {

  const newTour = tour;

  return (
    <section >
    <div className="title">
      <h2>Ours Tours</h2>
      <div className="underline"></div>
    </div>
    <div>
      {tour.map((tu) =>{
        return <Tour key={tu.id} {...tu}>

        </Tour>
      })}
    </div>
    </section>
  )
}
export default Tours