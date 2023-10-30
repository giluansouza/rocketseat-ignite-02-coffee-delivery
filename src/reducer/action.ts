import { Cart } from "./reducer";

export enum ActionTypes {
  CREATE_NEW_CART = 'CREATE_NEW_CART',
  CHANGE_CART = 'CHANGE_CART',
  REMOVE_ITEM_CART = 'REMOVE_ITEM_CART',
  FINISHED_PURCHASE = 'FINISHED_PURCHASE'
}

export function addNewCartAction(newCart: Cart) {
  return {
    type: ActionTypes.CREATE_NEW_CART,
    payload: {
      currentCart: newCart
    },
  }
}

export function changeCartAction(changeCart: Cart) {
  return {
    type: ActionTypes.CHANGE_CART,
    payload: {
      currentCart: changeCart
    },
  }
}

export function removeItemCartAction(removeItemCart: Cart) {
  return {
    type: ActionTypes.REMOVE_ITEM_CART,
    payload: {
      currentCart: removeItemCart
    },
  }
}

export function finishedPurchaseAction() {
  return {
    type: ActionTypes.FINISHED_PURCHASE,
  }
}