import { useState } from "react";
import ForceAccordions from "./ForceAccordions";
import Tabs from "./Tabs";
//import { positiveForces } from "../../assets/forces";

function Selections({ posForces, negForces, setPosForces, setNegForces, tab, setTab }) {
  // const [tab, setTab] = useState("pos");
  console.log(tab);

  return (
    <>
      <div className="max-sm:hidden   z-50 bg-primary   w-full border-b-2">
        <Tabs tab={tab} setTab={setTab} />
      </div>
      <div className="h-[90%] overflow-scroll relative">
        <div className="">
          {tab == "pos" && <ForceAccordions forces={posForces} setForces={setPosForces} />}
          {tab == "neg" && <ForceAccordions forces={negForces} setForces={setNegForces} />}
        </div>
        {/* <div className="md:hidden fixed mb-0 bg-slate-200 w-full">
        <Tabs tab={tab} setTab={setTab} />
      </div> */}
      </div>
    </>
  );
}

export default Selections;
