export function Welcome() {
  return (
    <div className="p-4 pt-2">
      <h1 className="text-6xl text-center">PacerPlan</h1>
      <p className="text-center">The L/(V)STP solution for Dovedale</p>
      <div className="text-center mt-3 mb-5">
        <button className="bg-sky-100 p-6 rounded-lg hover:bg-sky-200">
          Make a timetable 
        </button>
      </div>
      <hr className="text-zinc-300" />
      <div className="text-center mt-5">
        <h2 className="text-4xl">Features</h2>
      </div>
    </div>
  );
}

