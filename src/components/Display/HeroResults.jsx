import { useState } from "react";

function HeroResults() {
  const [isFilled, setIsFilled] = useState(false);
  const [goal, setGoal] = useState("");
  const [bullets, setBullets] = useState([]);
  const [showBulletInput, setShowBulletInput] = useState(false);

  function handleAdd() {
    document.getElementById("my_modal_1").showModal();
  }

  return (
    <>
      <div className="relative flex flex-col h-full justify-center items-center">
        {goal && <h2 className="font-bold text-3xl text-primary">{goal}</h2>}
        {bullets.length > 0 && (
          <div className="ml-8">
            {bullets.map((el, j) => {
              return (
                <div className="text-lg flex items-center gap-2" key={"bulletDisplay" + el.bullet + j}>
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <div>{el.bullet}</div>
                </div>
              );
            })}
          </div>
        )}
        {!isFilled && (
          <div onClick={handleAdd} className="btn w-fit btn-outline bg-primary text-white">
            Add Goal/Action
          </div>
        )}
        {isFilled && (
          <div onClick={handleAdd} className="absolute  bottom-3 right-3 btn w-fit btn-outline bg-primary text-white">
            Edit
          </div>
        )}
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Goal Below</h3>
          <div className="flex w-full justify-between ">
            <input
              type="text"
              value={goal}
              placeholder="Enter Goal/Action"
              onChange={(e) => setGoal(e.target.value)}
              className="input w-full max-w-xs bg-slate-200 border-primary"
            />
            <div
              className="btn "
              onClick={() => {
                let temp = [...bullets];
                temp.push({ bullet: "" });
                console.log(temp);
                setBullets(temp);
              }}
            >
              Add Bullet
            </div>
          </div>
          <div className="divider"></div>

          <ul>
            {bullets.length > 0 &&
              bullets.map((bullet, i) => {
                return (
                  <li key={"bullet" + bullet + i} className="flex items-center gap-2 w-full justify-between m-1">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <input
                      type="text"
                      value={bullet.bullet}
                      placeholder="Enter Goal/Action"
                      onChange={(e) => {
                        let temp = [...bullets];
                        temp[i].bullet = e.target.value;
                        setBullets(temp);
                      }}
                      className="input w-full max-w-xs bg-slate-200 border-primary"
                    />
                    <div
                      onClick={() => {
                        let temp = [...bullets];
                        temp.splice(i, 1);
                        setBullets(temp);
                      }}
                      className="btn place-self-end"
                    >
                      X
                    </div>
                  </li>
                );
              })}
          </ul>
          <div className="divider"></div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}

              <button className="btn" onClick={() => setIsFilled(true)}>
                Done
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default HeroResults;
