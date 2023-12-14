const GET_ONE_ITEM = "/get-one-item";
const GET_ALL_ITEMS = "/get-all-items";
const DELETE_ITEM = "/delete-item";

// action creators
const actionGetOneItem = (item) => ({
   type: GET_ONE_ITEM,
   item,
});
const actionGetAllItems = (items) => ({
   type: GET_ALL_ITEMS,
   items,
});
const actionDeleteItem = (itemId) => ({ type: DELETE_ITEM, itemId });

// thunks

export const thunkCreateItem = (vehicleId) => async (dispatch) => {
   const res = await fetch(`/api/items/${vehicleId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(vehicleId),
   });

   if (res.ok) {
      const data = await res.json();
      dispatch(actionGetOneItem(data));
      return data;
   } else {
      const errors = await res.json();
      return errors;
   }
};

export const thunkGetOneItem = (itemId) => async (dispatch) => {
   const res = await fetch(`/api/items/${itemId}`);

   if (res.ok) {
      const data = await res.json();
      dispatch(actionGetOneItem(data));
      return data;
   } else {
      const errors = await res.json();
      return errors;
   }
};

export const thunkGetAllItems = () => async (dispatch) => {
   const res = await fetch("/api/items");

   if (res.ok) {
      const data = await res.json();
      dispatch(actionGetAllItems(data));
      return data;
   } else {
      const errors = await res.json();
      return errors;
   }
};

export const thunkDeleteItem = (itemId) => async (dispatch) => {
   const res = await fetch(`/api/items/delete/${itemId}`, {
      method: "DELETE",
   });

   if (res.ok) {
      const data = await res.json();
      dispatch(actionDeleteItem(itemId));
      return data;
   } else {
      const errors = await res.json();
      return errors;
   }
};

// reducer

const initialState = { allItems: {} };

export default function itemsReducer(state = initialState, action) {
   let newState;

   switch (action.type) {
      case GET_ONE_ITEM:
         newState = { ...state, allItems: { ...state.allItems } };
         newState.allItems[action.item.id] = action.item;
         return newState;

      case GET_ALL_ITEMS:
         newState = { ...state, allItems: {} };
         action.items.forEach(
            (item) => (newState.allItems[item.id] = item)
         );
         return newState;

      case DELETE_ITEM:
         newState = { ...state, allItems: { ...state.allItems } };
         delete newState.allItems[action.itemId];
         return newState;

      default:
         return state;
   }
}
