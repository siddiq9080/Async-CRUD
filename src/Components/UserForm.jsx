import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "animate.css";

const initial = {
  name: "",
  userName: "",
  email: "",
  number: "",
  image: "",
  web: "",
};

const UserForm = ({ addUser, editData, editUser }) => {
  const [formState, setFormState] = useState(initial);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      editUser(formState, editData.id);
    } else {
      addUser(formState);
    }
    setFormState(initial);
  };

  useEffect(() => {
    if (editData) {
      setFormState(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="md:w-7/12 mx-auto  shadow-2xl  pt-4">
        <form
          action=""
          className="form-control bg-white bg-opacity-10 shadow-lg rounded-2xl p-4 "
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="form-label  text-white text-lg ">
            Name :{" "}
          </label>

          <div className="input-group">
            <i className="fa-solid fa-person  fa-2x text-dark px-2 py-1 bg-slate-800 text-white"></i>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="form-control text-lg focus:bg-slate-800 bg-slate-700 hover:bg-slate-800 placeholder-white text-white border-none"
              value={formState.name}
              onChange={handleChange}
            />
          </div>

          <label
            htmlFor="userName "
            className="form-label text-white text-lg mt-3 "
          >
            User Name :{" "}
          </label>

          <div className="input-group">
            <i className="fa-solid fa-user fa-2x text-dark px-2 py-1  bg-slate-800 text-white"></i>
            <input
              type="text"
              id="userName"
              name="userName"
              className="form-control focus:bg-slate-800 bg-slate-700 hover:bg-slate-800 placeholder-white text-white border-none "
              placeholder="Enter your user name"
              value={formState.userName}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="email" className="form-label text-white text-lg mt-3">
            Email :
          </label>

          <div className="input-group">
            <i className="fa-solid fa-envelope fa-2x text-dark px-2 py-1  bg-slate-800 text-white"></i>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email here"
              className="form-control bg-slate-700 focus:bg-slate-800 hover:bg-slate-800 placeholder-white text-white border-none"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <label
            htmlFor="number"
            className="form-label text-white text-lg mt-3"
          >
            Phone Number :
          </label>
          <div className="input-group">
            <i className="fa-solid fa-phone   fa-2x text-dark px-2 py-1 bg-slate-800 text-white"></i>
            <input
              type="tel"
              name="number"
              id="number"
              className="form-control bg-slate-700 focus:bg-slate-800 hover:bg-slate-800 placeholder-white text-white border-none"
              placeholder="Enter your mobile no here"
              value={formState.number}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="image" className="form-label text-white text-lg mt-3">
            Image URL :
          </label>
          <div className="input-group">
            <i className="fa-solid fa-image fa-2x  text-dark px-2 py-1 bg-slate-800 text-white"></i>
            <input
              type="url"
              name="image"
              id="image"
              className="form-control bg-slate-700 focus:bg-slate-800 hover:bg-slate-800 placeholder-white text-white border-none"
              placeholder="Enter Image URL here"
              value={formState.image}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="web" className="form-label text-white text-lg mt-3">
            Website Data :{" "}
          </label>
          <div className="input-group">
            <i className="fa-brands fa-chrome fa-2x  text-dark px-2 py-1 bg-slate-800 text-white "></i>

            <input
              type="url"
              name="web"
              id="web"
              placeholder="Enter website link here"
              className="form-control bg-slate-700 focus:bg-slate-800 hover:bg-slate-800 placeholder-white text-white border-none"
              value={formState.web}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-center gap-3">
            <button
              type="submit"
              className="btn btn-primary w-11/12 mt-4 transition-all hover:scale-110 duration-300"
            >
              {editData ? "EDIT" : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
UserForm.propTypes = {
  addUser: PropTypes.func.isRequired,
  editData: PropTypes.object,
  editUser: PropTypes.func.isRequired,
};

export default UserForm;
