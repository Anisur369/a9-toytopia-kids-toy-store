import { Link } from "react-router-dom";

const Card = ({
  toyId,
  pictureURL,
  toyName,
  rating,
  availableQuantity,
  price,
}) => {
  return (
    <div className="card w-full md:w-80 bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
      <figure className="px-6 pt-6">
        <img
          src={pictureURL}
          alt={toyName}
          className="rounded-xl h-48 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-lg font-semibold">{toyName}</h2>
        <div className="flex gap-2 text-sm text-gray-500">
          <span className="badge badge-success">⭐ {rating}</span>
          <span className="badge badge-info">Qty: {availableQuantity}</span>
        </div>
        <p className="text-md font-bold text-primary mt-2">${price}</p>
        <div className="card-actions mt-4">
          <Link to={`/details/${toyId}`}>
            <button className="btn btn-sm btn-outline btn-primary">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
