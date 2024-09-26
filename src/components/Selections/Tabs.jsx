function Tabs({ tab, setTab }) {
  return (
    <div role="tablist" className="tabs tabs-boxed md:my-2 ">
      <a role="tab" className={"tab " + (tab == "pos" && " tab-active ")} onClick={() => setTab("pos")}>
        Positive
      </a>
      <a role="tab" className={"tab " + (tab == "neg" && " tab-active ")} onClick={() => setTab("neg")}>
        Negative
      </a>
    </div>
  );
}

export default Tabs;
