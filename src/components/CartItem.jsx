import toast from 'react-hot-toast';
import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux';
import { remove} from "../redux/Slices/CartSlice"


const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch()

  // const addToCart=()=>{
  //   dispatch(add(post));
  //   toast.success("Item added to Cart")
  // }
  const removeFromCart =()=>{
    dispatch(remove(item.id))
    toast.success("Item Removed from Cart")
  }
  return <div>
    <div>
      <div>
        <img src={item.image}/>
      </div>
      <div>
        <h1>
          {item.title}
        </h1>
        <h1>
          {item.description}
        </h1>
        <div>
          <p>{item.price}</p>
          <div
          onClick={removeFromCart}>
            <FcDeleteDatabase/>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default CartItem;
