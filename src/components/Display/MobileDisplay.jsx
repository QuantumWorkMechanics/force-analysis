import Results from "./Results";

function MobileDisplay({ posForces, negForces }) {
  return (
    <div className="flex flex-col h-full">
      <div className="w-full bg-blue-100 h-1/3">Main Area</div>
      <div className="flex w-full h-2/3 gap-6 bg-slate-200">
        <Results forces={posForces.filter((x) => x.active)} isPos={true} />
        <Results forces={negForces.filter((x) => x.active)} isPos={false} />
      </div>
    </div>
  );
}

export default MobileDisplay;
