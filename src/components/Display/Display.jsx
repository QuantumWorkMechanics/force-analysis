import HeroResults from "./HeroResults";
import Results from "./Results";

function Display({ posForces, negForces }) {
  function getAvg(arr) {
    return arr.filter((x) => x.active).reduce((acc, current) => (acc += current.score), 0);
  }

  return (
    <>
      <div className="w-full h-1/6">
        <h1 className="text-accent font-bold md:text-[40pt] text-noto ml-10">Force Field Analysis</h1>
      </div>
      <div className="h-3 grid grid-cols-8 w-full z-40 text-white">
        {" "}
        <div className=" col-span-3 col-start-1 row-start-1  ">
          <div className="grid grid-cols-6 ">
            <div className="relative  w-full h-10 ">
              5<div className="absolute  w-full h-[60vh] border-r border-dashed"></div>
            </div>
            <div className="relative  w-full h-[60vh] ">
              <div className="-ml-1">4</div>
              <div className="absolute  w-full h-[60vh] border-r border-dashed"></div>
            </div>
            <div className="relative  w-full h-[60vh] ">
              <div className="-ml-1">3</div>
              <div className="absolute  w-full h-[60vh] border-r border-dashed"></div>
            </div>
            <div className="relative  w-full h-[60vh] ">
              <div className="-ml-1">2</div>
              <div className="absolute  w-full h-[60vh] border-r border-dashed"></div>
            </div>
            <div className="relative  w-full h-[60vh] ">
              <div className="-ml-1">1</div>
              <div className="absolute  w-full h-screen "></div>
            </div>
          </div>
        </div>
        <div className=" col-span-3 col-start-6 row-start-1  ">
          <div className="grid grid-cols-6 ">
            <div className="relative  w-full h-10 text-right">
              <div className="absolute  w-full h-screen "></div>
            </div>
            <div className="relative  w-full h-10 text-right">
              <div className="-mr-1">1</div>
              <div className="absolute  w-full h-[60vh] border-r border-dashed"></div>
            </div>
            <div className="relative  w-full h-10 text-right">
              <div className="-mr-1">2</div>
              <div className="absolute  w-full h-[60vh] border-r border-dashed"></div>
            </div>
            <div className="relative  w-full h-10 text-right">
              <div className="-mr-1">3</div>
              <div className="absolute  w-full h-[60vh] border-r border-dashed"></div>
            </div>
            <div className="relative  w-full h-10 text-right">
              <div className="-mr-1">4</div>
              <div className="absolute  w-full h-[60vh] border-r border-dashed"></div>
            </div>
            <div className="relative  w-full h-10 text-right">
              5<div className="absolute  w-full h-[60vh] "></div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-2/3 grid grid-cols-8 w-full ">
        <div className="col-span-3 h-full col-start-1 z-50 ">
          <Results forces={posForces.filter((x) => x.active)} isPos={true} />
        </div>
        <div className=" row-start-1 row-span-2 col-start-4 col-span-2 bg-blue-100 rounded-lg ">
          <HeroResults />
        </div>

        <div className="col-start-6 h-full col-span-3 z-50">
          <Results forces={negForces.filter((x) => x.active)} isPos={false} />
        </div>
      </div>
      <div className="w-full  h-1/6 flex justify-around text-white font-bold">
        <div className="bg-secondary h-10 p-2 rounded border-2 z-50">Score: {getAvg(posForces)}</div>
        <div>Get Results</div>
        <div className="bg-accent h-10 p-2 rounded border-2 z-50  ">Score: {getAvg(negForces)}</div>
      </div>
    </>
  );
}

export default Display;
