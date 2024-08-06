import { Route ,Routes} from "react-router-dom";
import Nabvar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"


const App = () => {
  return (
    <div>
      <div className=" bg-slate-900">
      <Nabvar/>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
};

export default App;
