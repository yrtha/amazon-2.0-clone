import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };

    //push item to redux
    dispatch(addItemToBasket(product));
  };

  const removeItemFromBasket = () =>{
      //remove item from redux
      dispatch(removeFromBasket({id}))
  }

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />

      <div className="cols-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="my-2 text-xs line-clamp-3 ">{description}</p>
        <Currency quantity={price} currency="USD" />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              src="https://links.papareact.com/fdw"
              alt=""
              className="w-12"
              loading="lazy"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="mt-auto button">
          Add To Basket
        </button>

        <button onClick={removeItemFromBasket} className="mt-auto button">
          Remove To Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
