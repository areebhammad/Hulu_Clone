import Thumbnail from "./Thumbnail";

function Results({results}
) {
  return (
  <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:flex-grow-0 flex-wrap justify-center">
    {results.map( result => (
      <Thumbnail key= {result.id} result = {result}/>
    ))}
  </div>
  );
}

export default Results;
