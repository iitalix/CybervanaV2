import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import BrandCard from "../../BrandCards";
import OpenModalButton from "../../OpenModalButton";
import {thunkGetAllItems, thunkDeleteItem} from "../../../store/items";
import CompletePurchaseModal from "../CompletePurchaseModal";

export default function ItemsPage() {
  const {push} = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const allItems = useSelector((state) => state.items.allItems);
  const ownerItems = Object.values(allItems).filter(
    (item) => item.userId === user.id
  );

  useEffect(() => {
    dispatch(thunkGetAllItems());
  }, [dispatch]);

  const removeFromCart = async (id) => {
    await dispatch(thunkDeleteItem(id));
    await dispatch(thunkGetAllItems());

    push("/items/current");
  };

  const goToAllVehicles = () => {
    return push("/vehicles/all");
  };

  const totalPrice = ownerItems.reduce(
    (acc, item) => acc + item.vehicle.price,
    0
  );

  const tax = totalPrice * 0.075;

  return (
    <div className="vehicle-details-page-container">
      <div className="header-container">
        <h1>Purchase Vehicles</h1>
        <button onClick={goToAllVehicles} className="header-buttons">
          Explore All Vehicles
        </button>
      </div>

      <div>
        {!ownerItems.length && (
          <div className="no-posts">
            <p>You currently have no vehicles for purchase.</p>
            <div>
              <BrandCard />
            </div>
          </div>
        )}
      </div>

      {ownerItems.length > 0 && (
        <div id="purchase-section">
          <div className="item-section">
            {ownerItems.map((item) => (
              <div key={item.vehicle.id} className="item-parent-container">
                <div id="item-photo-container">
                  <img
                    src={`${item.vehicle.photoUrl}`}
                    className="item-photo"
                    alt="vehicle"
                  />
                </div>

                <div className="item-details-container">
                  <p>
                    {item.vehicle.make} {item.vehicle.model}
                  </p>
                  <p>Price: ${item.vehicle.price}</p>

                  <button onClick={() => removeFromCart(item.id)}>
                    Remove From Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div id="order-summary">
            <h3>Order Summary</h3>
            <div id="calculation-table" className="flex-container">
              <div className="calculation-row">
                <div className="item">Subtotal:</div>
                <div className="amount">${totalPrice.toFixed(2)}</div>
              </div>
              <div className="calculation-row" id="tax">
                <div className="item">Tax (7.5%):</div>
                <div className="amount">${tax.toFixed(2)}</div>
              </div>
              <div className="calculation-row">
                <div className="item">Total (Including Tax):</div>
                <div className="amount">${(totalPrice + tax).toFixed(2)}</div>
              </div>
            </div>

            <div id="purchase-btn">
              <OpenModalButton
                buttonText="Complete Purchase"
                modalComponent={
                  <CompletePurchaseModal userId={user.id}/>
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
