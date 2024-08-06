import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {cart}=useSelector((state)=>state)
  return (
    <div>
      <nav className=" flex justify-between h-20 items-center max-w-6xl mx-auto">
        <NavLink>
          <div className="  bg-slate-900 h-[70px] w-[70px] ml-5">
            <img src="https://th.bing.com/th/id/OIP.zSwAOSlFhatRWnSXI2jbcQHaH0?w=176&h=186&c=7&r=0&o=5&pid=1.7" />
          </div>
        </NavLink>

        <div className="flex gap-4 items-center font-medium text-slate-100 mr-5"> 
          <NavLink to="/">
            <p>Home</p>
          </NavLink>    

          <NavLink to="/cart">
          <div className="relative text-2xl">
          <FaShoppingCart />
            {
              cart.length > 0 &&
              <span className=" absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
              justify-center items-center animate-bounce rounded-full text-white">
              {cart.length}</span>
            }
          </div>
 

          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
