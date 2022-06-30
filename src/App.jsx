import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

function App() {
  return (
    <div className="w-full flex-block container-sm bg-slate-100">
      <Navbar />
      <Header />
      <Main />
    </div>
  );
}

export default App;
