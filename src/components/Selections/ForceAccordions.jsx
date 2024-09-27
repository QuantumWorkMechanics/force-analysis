import { useState } from "react";

function ForceAccordions({ forces, setForces }) {
  const [newForce, setNewForce] = useState("");
  const VALS = [1, 2, 3, 4, 5];
  const SEL_LIMIT = 5;

  function handleAddForce() {
    if (newForce.length == 0) return;
    let temp = [...forces];
    temp.unshift({ name: newForce, score: 0, active: false });
    setForces(temp);
  }

  function handleValSelect(val, force) {
    // console.log(forces);
    let temp = [...forces];

    let current = temp.filter((x) => {
      //   console.log(x);
      //   console.log(force);
      return x.name == force;
    })[0];
    // console.log(current);
    if (val == "X") {
      current.score = 0;
      current.active = false;
      sortSelections(temp);
      setForces(temp);
      return;
    } else {
      if (temp.filter((x) => x.active).length >= SEL_LIMIT && !current.active) return;
      current.score = val;
      current.active = true;
    }

    //console.log(temp);
    sortSelections(temp);
    setForces(temp);
  }

  function sortSelections(arr) {
    arr.sort((a, b) => {
      if (a.active != b.active) {
        return b.active - a.active;
      } else {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }
    });
  }

  return (
    <div className="gap-1 m-2  relative h-full ">
      <div className=" ">
        <div
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className="add-force btn btn-outline text-xs bg-blue-100 text-primary border-4 border-accent m-4  "
        >
          ADD FORCE
        </div>
      </div>
      {/* <div className="w-full h-0 border-2"></div> */}
      {/* <div className="h-24 bg-primary border-b-2 absolute w-full z-40"></div> */}

      <div className="flex flex-col gap-1 overflow-y-scroll h-1/2 ">
        {forces.map((force, i) => {
          return (
            <div
              key={force.name + "_" + i}
              className={"collapse collapse-arrow  bg-blue-100 border-2  w-full  " + (force.active && " border-4 border-accent ")}
            >
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium text-primary">{force.name}</div>
              <div className="collapse-content flex flex-wrap gap-1 ">
                {VALS.map((val) => {
                  return (
                    <button
                      onClick={() => handleValSelect(val, force.name)}
                      key={"val" + val + force.name}
                      className={"btn  btn-primary text-white " + (val == force.score && " btn-active bg-[#0da7db] ")}
                    >
                      {val}
                    </button>
                  );
                })}
                <button
                  onClick={() => handleValSelect("X", force.name)}
                  key={"valRemove" + force.name}
                  className="bg-red-400 text-white btn btn-outline btn-sm"
                >
                  X
                </button>
              </div>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Add a new force</h3>
                  <input
                    type="text"
                    value={newForce}
                    placeholder="Enter Force"
                    onChange={(e) => setNewForce(e.target.value)}
                    className="input w-full max-w-xs bg-slate-200 border-primary"
                  />
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button onClick={handleAddForce} className="btn">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ForceAccordions;
