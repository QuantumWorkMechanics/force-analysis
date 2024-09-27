import { useState } from "react";
import Display from "./Display/Display";
import Selections from "./Selections/Selections";
import MobileDisplay from "./Display/MobileDisplay";
import logo from "../assets/GreyLogo.png";

function Layout({ posForces, negForces, setPosForces, setNegForces }) {
  const [tab, setTab] = useState("pos");
  return (
    <div className="md:grid grid-cols-5 font-noto">
      {tab != "res" && (
        <>
          <div className="col-span-1   w-full z-40 border-r border-2 bg-primary h-screen ">
            <Selections
              posForces={posForces}
              negForces={negForces}
              setNegForces={setNegForces}
              setPosForces={setPosForces}
              tab={tab}
              setTab={setTab}
            />
          </div>

          <div className="col-span-4  max-sm:hidden bg-gradient-to-r from-[#0e223d] to-[#0a4676]  ">
            <Display posForces={posForces} negForces={negForces} setNegForces={setNegForces} setPosForces={setPosForces} />
          </div>
        </>
      )}
      {tab == "res" && (
        <div className="   mobile-res h-[90vh] bg-gradient-to-r from-[#0e223d] to-[#0a4676] ">
          <Display posForces={posForces} negForces={negForces} setNegForces={setNegForces} setPosForces={setPosForces} />
        </div>
      )}
      <div className="md:hidden w-full bottom-0 fixed h-20 bg-slate-50 flex flex-col justify-center z-50">
        <div role="tablist" className="tabs tabs-boxed md:my-2 ">
          <a role="tab" className={"tab " + (tab == "pos" && " tab-active ")} onClick={() => setTab("pos")}>
            Positive
          </a>
          <a role="tab" className={"tab " + (tab == "neg" && " tab-active ")} onClick={() => setTab("neg")}>
            Negative
          </a>
          <a role="tab" className={"tab " + (tab == "res" && " tab-active ")} onClick={() => setTab("res")}>
            Results
          </a>
        </div>
      </div>
      {tab != "res" && <img className="absolute z-50 w-[200px] right-4 max-sm:top-4 md:bottom-4" src={logo} alt="" />}
      {tab == "res" && (
        <div className="flex justify-center">
          <img className="absolute z-50 w-[100px] bottom-20" src={logo} alt="" />
        </div>
      )}
    </div>
  );
}

export default Layout;
