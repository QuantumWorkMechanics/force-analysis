import HeroResults from "./HeroResults";
import Results from "./Results";
import ScrollIcon from "./ScrollIcon";

function Display({ posForces, negForces, tab }) {
  function getSum(arr) {
    return arr.filter((x) => x.active).reduce((acc, current) => (acc += current.score), 0);
  }

  return (
    <>
      <div className="w-full h-1/3 md:h-1/6">
        <h1 className="text-accent font-bold md:text-[40pt] text-noto ml-10">Force Field Analysis</h1>
        {tab == "res" && (
          <div className="md:hidden mx-2 bg-blue-100 rounded-lg h-[90%] ">
            <HeroResults total={getSum(posForces) - getSum(negForces)} />
          </div>
        )}
      </div>
      <div className="h-3 grid grid-cols-6 md:grid-cols-8  w-full z-40 text-white max-sm:mt-4">
        {" "}
        <div className=" col-span-3 col-start-1 row-start-1  ">
          <div className="grid grid-cols-6 ">
            <div className="relative  w-full h-10 ">
              5<div className="absolute  w-full h-[42vh] md:h-[60vh] border-r border-dashed"></div>
            </div>
            <div className="relative  w-full   ">
              <div className="-ml-1">4</div>
              <div className="absolute  w-full h-[42vh] md:h-[60vh] border-r border-dashed"></div>
            </div>
            <div className="relative  w-full   ">
              <div className="-ml-1">3</div>
              <div className="absolute  w-full h-[42vh] md:h-[60vh] border-r border-dashed"></div>
            </div>
            <div className="relative  w-full  md:h-[60vh] ">
              <div className="-ml-1">2</div>
              <div className="absolute  w-full h-[42vh] md:h-[60vh] border-r border-dashed"></div>
            </div>
            <div className="relative  w-full  md:h-[60vh] ">
              <div className="-ml-1">1</div>
              <div className="absolute  w-full md:h-screen "></div>
            </div>
          </div>
        </div>
        <div className=" col-span-3 col-start-4 md:col-start-6 row-start-1  ">
          <div className="grid grid-cols-6 ">
            <div className="relative  w-full h-10 text-right">
              <div className="absolute  w-full md:h-screen "></div>
            </div>
            <div className="relative  w-full h-10 text-right">
              <div className="-mr-1">1</div>
              <div className="absolute  w-full  h-[42vh] md:h-[60vh] border-r border-dashed"></div>
            </div>
            <div className="relative  w-full h-10 text-right">
              <div className="-mr-1">2</div>
              <div className="absolute  w-full h-[42vh] md:h-[60vh] border-r border-dashed"></div>
            </div>
            <div className="relative  w-full h-10 text-right">
              <div className="-mr-1">3</div>
              <div className="absolute  w-full h-[42vh] md:h-[60vh] border-r border-dashed"></div>
            </div>
            <div className="relative  w-full h-10 text-right">
              <div className="-mr-1">4</div>
              <div className="absolute  w-full h-[42vh] md:h-[60vh] border-r border-dashed"></div>
            </div>
            <div className="relative  w-full h-10 text-right">
              5<div className="absolute  w-full h-[50vh] md:h-[60vh] "></div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/2 md:h-2/3 grid grid-cols-6 md:grid-cols-8 w-full max-sm:border-b max-sm:overflow-scroll">
        <div className="w-10 -mt-4 md:hidden absolute flex justify-center w-screen z-50">
          <div className="bg-slate-50 rounded border-2 w-6 flex justify-cinte z-50">
            <ScrollIcon className="z-50" />
          </div>
        </div>
        <div className="col-span-3 h-full col-start-1 z-50 ">
          <Results forces={posForces.filter((x) => x.active)} isPos={true} />
        </div>
        <div className="max-sm:hidden row-start-1 row-span-2 col-start-4 col-span-2 bg-blue-100 rounded-lg z-50">
          <HeroResults total={getSum(posForces) - getSum(negForces)} />
        </div>

        <div className="col-start-4 md:col-start-6 h-full col-span-3 z-50">
          <Results forces={negForces.filter((x) => x.active)} isPos={false} />
        </div>
      </div>
      <div className="w-full max-sm:absolute max-sm:bottom-28 md:h-1/6 flex  justify-around text-white font-bold">
        <div className="bg-secondary  max-sm:text-sm h-8 max-sm:mt-2 md:h-10 p-1 md:p-2 rounded border-2 z-50">Score: {getSum(posForces)}</div>
        <div>Results</div>
        <div className="bg-accent  max-sm:text-sm h-8 max-sm:mt-2 md:h-10 p-1 md:p-2 rounded border-2 z-50 ">Score: {getSum(negForces)}</div>
      </div>
    </>
  );
}

export default Display;
