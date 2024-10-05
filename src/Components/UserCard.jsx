import PropTypes from "prop-types";

const UserCard = ({
  name,
  userName,
  email,
  number,
  image,
  web,
  id,
  loadEditData,
  deleteUser,
}) => {
  return (
    <div className="card bg-slate-800 text-white">
      <img
        src={image}
        alt={name}
        className="card-img-top object-contain"
        style={{ height: 250 }}
      />
      <div className="card-body">
        <h1 className="text-4xl font-semiBold text-center card-text mb-3">
          {userName}
        </h1>

        <h1 className="text-lg my-1"> Cartoon : {name} </h1>
        <h1 className="text-lg my-1">Email : {email} </h1>
        <h1 className="text-lg my-1">Phone : {number} </h1>
        <a
          href={web}
          className="text-yellow-300 hover:text-yellow-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          {web}
        </a>
        <div className="flex justify-center gap-3 my-3">
          <button
            className="btn bg-yellow-300  hover:bg-yellow-500 w-50 transition-all hover:scale-110"
            onClick={() =>
              loadEditData({ id, name, userName, email, number, image, web })
            }
          >
            Edit
          </button>
          <button
            className="btn bg-red-500 text-white hover:bg-red-700 w-50 transition-all hover:scale-110"
            onClick={() => deleteUser(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string,
  userName: PropTypes.string,
  email: PropTypes.string,
  number: PropTypes.string,
  image: PropTypes.string,
  web: PropTypes.string,
  id: PropTypes.string,
  loadEditData: PropTypes.func,
  deleteUser: PropTypes.func,
};

export default UserCard;
