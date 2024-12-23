import "./App.css";
// import Banner from "./Component/Banner/Banner";
// import LIneChart from "./Component/LineChart/LIneChart";
// import MM from "./Component/LineChart/MM";
// import Navbar from "./Component/Navbar/Navbar";
import SimpleForm from "./Component/SimpleForm/SimpleForm";
import StataForm from "./Component/StateForm/StataForm";

function App() {
  return (
    <>
      <h1 className="text-5xl mt-3 p-3 mb-5 rounded-lg bg-yellow-800">
        Vite + React
      </h1>
      <SimpleForm></SimpleForm>
      <StataForm></StataForm>

      {/* <Navbar></Navbar>
      <Banner></Banner>
      <LIneChart></LIneChart>
      <MM></MM> */}
    </>
  );
}

export default App;
