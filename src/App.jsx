import { useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import { useEffect } from "react";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {

  const [loading, setLoading] = useState(true);
  const [tour, setTour] = useState([]);

  const fetchTours = async () => {
  setLoading(true);
  try {
    const response = await fetch(url);
  const tours = await response.json();
  setTour(tours);
  setLoading(false);
  } catch (err) {    
    console.log(err);
    setLoading(false);
  }
  };

  useEffect(() =>{
    fetchTours();
  }, [])



  if(loading){
    return(
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <>
      <Tours tour={tour} />
    </>
  )
}
export default App