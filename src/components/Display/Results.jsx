function Results({ forces, isPos }) {
  console.log(forces);
  return (
    <div className=" w-full h-full flex flex-col justify-center p-2 font-bold">
      {/* <div className="absolute h-full w-1/5 bg-rose-50"></div> */}
      {forces.map((force, i) => {
        return (
          <>
            <div className="w-full my-5">
              {/* <div key={"force" + force.name + i}>{force.name}</div> */}

              <div className="grid grid-cols-6 h-10 md:h-14 w-full">
                {isPos &&
                  [5, 4, 3, 2, 1, 0].map((el, j) => {
                    if (el == 0) {
                      return <div key={"if" + force.name + j} className="arrows r-arrow bg-opacity-90 "></div>;
                    } else {
                      return (
                        <>
                          <div key={"else" + force.name + j} className={" h-8 md:h-14 " + (el <= force.score && " bg-[#0da7db] bg-opacity-90 ")}>
                            {" "}
                            {/* <div className="absolute h-14 w-14 ml-0 rotate-45 bg-primary bg-opacity-70"></div> */}
                            <div
                              className={
                                " absolute text-white m-1 h-20 text-left w-40 " +
                                ((el != force.score || el < 3 || force.score < 3) && !(force.score != 3 && force.score < 3 && el == 3) && " hidden ")
                              }
                            >
                              {force.name}
                            </div>
                          </div>
                        </>
                      );
                    }
                  })}
                {!isPos &&
                  [6, 1, 2, 3, 4, 5].map((el, j) => {
                    if (el == 0) {
                      return <div key={"if" + force.name + j} className="l-arrow arrows   ml-[1.1rem]"></div>;
                    } else {
                      return (
                        <div key={"else" + force.name + j} className={" h-8 md:h-14 " + (el <= force.score && " bg-[#ffbc17] bg-opacity-90 ")}>
                          {el == 1 && <div className=" absolute text-white m-1 h-20 text-left w-52 ">{force.name}</div>}
                          {el == 1 && <div key={force.name + j} className="bg-opacity-90 l-arrow arrows  ml-[1.1rem]"></div>}
                        </div>
                      );
                    }
                  })}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Results;
