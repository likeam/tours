const Tour = (props) => {
  const tourTwo = props.tourOne;
  console.log(tourTwo);
  return (
    <div key={props.tourOne.id}>
      <h1>{tourTwo[1].name}</h1>
    </div>
  )
}
export default Tour