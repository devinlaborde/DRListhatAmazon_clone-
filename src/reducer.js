export const initialState = {
  basket: [],
  user: null
};

//Note to self: Go back and study selectors
export const getBasketTotal = (basket) =>
  //Adds up item prices and puts them in the subtotal
  basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

      case 'EMPTY_BASKET':
        return {
            ...state,
            basket: []
        }

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
        //index for the splice sets items in checkout at 0, 1, 2, etc.
      if (index >= 0) {
        // splice is a very cool technique that you can do to remove a single item from 
        //it works by basically telling the computer the elements are numbered and create a new array with
        //the remaining items!
        newBasket.splice(index, 1);
      } else {
        console.warn(
          "Cant remove product (id: ${action.id}) as its not in basket!"
        )
      }

      return {
        ...state,
        basket: newBasket,
      };


      case "SET_USER":
        return {
          ...state,
          user: action.user
        }
        
    default:
      return state;
  }
};

export default reducer;
