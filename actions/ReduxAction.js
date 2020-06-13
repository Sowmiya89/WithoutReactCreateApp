import * as actionType from "./ActionType";

export const addProduct = () => ({
  type: actionType.ADD_PRODUCT,
  payload: 1,
});

export const removeProduct = (productId) => ({
  type: actionType.REMOVE_PRODUCT,
  productId: productId,
});

export const editProduct = (productId, newName) => ({
  type: actionType.EDIT_PRODUCT,
  productId: productId,
  productName: newName,
});
