import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {
  thunkCreateItem,
  thunkDeleteItem,
  thunkGetAllItems,
} from "../../../store/items";

export default function ItemTracker({vehicleId, userId}) {
  const dispatch = useDispatch();
  const getAllItems = useSelector((state) => state.items.allItems);
  const [item, setItem] = useState(null);

  const ownerItems = Object.values(getAllItems).filter(
    (item) => item.userId == userId
  );

  const thisPostItems = ownerItems.filter(
    (item) => item.vehicleId == vehicleId
  );

  let itemId;
  if (thisPostItems.length) {
    itemId = thisPostItems[0]?.id;
  }
  const deleteItem = async () => {
    const res = await dispatch(thunkDeleteItem(itemId));
    if (res.errors) {
      return setItem(true);
    } else {
      return setItem(false);
    }
  };

  const createItem = async () => {
    if (ownerItems.length >= 3) {
      alert("You have reached the 3 vehicle limit in your cart.");
      return;
    }

    const res = await dispatch(thunkCreateItem(vehicleId));
    dispatch(thunkGetAllItems());

    if (res.errors) return setItem(true);
  };

  useEffect(() => {
    dispatch(thunkGetAllItems());
  }, [dispatch, item]);

  return (
    <div id="add-remove-buttons">
      <button hidden={!thisPostItems.length} onClick={() => deleteItem()}>
        Remove From Cart
      </button>
      <button hidden={thisPostItems.length} onClick={() => createItem()}>
        Add To Cart
      </button>
    </div>
  );
}
