const Loader = () => {
  return (
    <div className="position-fixed w-100 h-100 bg-slate-400 bg-opacity-70 flex justify-center  z-50 align-items-center">
      <div className="position-fixed w-100 h-100 flex justify-center z-10 align-items-center">
        <i className="fa-solid fa-spinner fa-4x opacity-100 fa-spin-pulse text-danger"></i>
      </div>

      <div>
        <h1 className="text-4xl text-danger mt-28 font-semibold opacity-100 ">
          Loading please wait...
        </h1>
      </div>
    </div>
  );
};

export default Loader;
