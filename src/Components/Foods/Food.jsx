const Food = ({ food }) => {
  console.log(`coming from food =>`, food);
  const { strCategory, strCategoryDescription, strCategoryThumb, idCategory } =
    food;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="">
        <img className="w-full" src={strCategoryThumb} alt="food" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{strCategory}</h2>
        <p> {strCategoryDescription.slice(0, 300)}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Food;
