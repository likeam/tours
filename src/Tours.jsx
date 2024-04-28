import Tour from "./Tour"

const Tours = (props) => {

  const newTour = props.tour;

  return (
    <div >
    <Tour tourOne={newTour}/>
    </div>
  )
}
export default Tours