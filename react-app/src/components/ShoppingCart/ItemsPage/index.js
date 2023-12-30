import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import BrandCard from "../../BrandCards";
import {thunkGetAllItems, thunkDeleteItem} from "../../../store/items";

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
        <h1>Purchase Vehicle</h1>
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

      {ownerItems.length && (
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
            <table id="calculation-table">
              <tr>
                <td className="item">Subtotal:</td>
                <td className="amount">${totalPrice.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="item">Tax (7.5%):</td>
                <td className="amount">${tax.toFixed(2)}</td>
              </tr>
              <div className="tax"></div>
              <tr>
                <td className="item">Total (Including Tax):</td>
                <td className="amount">${(totalPrice + tax).toFixed(2)}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
