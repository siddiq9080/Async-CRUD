const Banner = () => {
  return (
    <div className="pt-3 z-10">
      <div className="row ">
        <div className="col-md-4 d-none d-md-block px-0">
          {" "}
          <div
            className="bg-no-repeat opacity-70"
            style={{
              backgroundImage: `url(" https://i.pinimg.com/564x/29/6b/53/296b53ee5a4d62a7963d225077d09cbf.jpg")`,
              height: 400,
              width: "100%",

              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <div className="col-md-4 px-0">
          <div
            className="bg-no-repeat opacity-70 "
            style={{
              backgroundImage: `url("https://i.pinimg.com/736x/5b/73/26/5b73263ee7c1836c145ca404bb999736.jpg")`,
              height: 400,
              width: "100%",

              backgroundPosition: "center",
            }}
          >
            <div className="text-center pt-4 opacity-100">
              <i className="font-bold text-5xl  text-center">Cartoons Mania</i>
            </div>
          </div>
        </div>

        <div className="col-md-4 px-0 d-none d-md-block">
          <div
            className="bg-no-repeat opacity-70 "
            style={{
              backgroundImage: `url("https://i.pinimg.com/564x/5b/b1/e7/5bb1e76e5ac9533e4831036a33a83e06.jpg")`,
              height: 400,
              width: "100%",
              objectFit: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
