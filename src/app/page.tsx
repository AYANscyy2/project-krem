import React from "react";

function App() {
  return (
    <div
      className="min-h-screen font-sans text-[#784b29]"
      style={{ backgroundColor: "#f6f5f0" }}
    >
      <div className="w-full absolute top-0 px-6 py-4">
        <div
          className="flex justify-between items-center text-sm"
          style={{ color: "#784b29" }}
        >
          <div className="font-medium tracking-wide">
            OUPSI- JUSTE TROP BON.
          </div>
          <div className="font-medium tracking-wide text-center">
            8A RUE BLAINVILLE OUEST, SAINTE-THÉRÈSE
          </div>
          <div className="font-medium tracking-wide">(514) 978-KREM</div>
        </div>
      </div>

      <div className="flex flex-col h-screen items-center justify-center px-6 py-16">
        <div className="text-center relative mb-12">
          <h1 className="text-6xl font-[900] absolute left-16   -rotate-4 leading-none tracking-tight">
            COMPTOIR
          </h1>
          <h1 className="text-[164px]  font-black leading-none tracking-tight  mt-12">
            KREM &
          </h1>
          <h1 className="text-[164px] font-black leading-none tracking-tight mt-2">
            KANEL
          </h1>
        </div>

        <div className="w-full max-w-2xl"></div>
      </div>
    </div>
  );
}

export default App;
