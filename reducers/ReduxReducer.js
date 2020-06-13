var nextProductId = 3;

const ReduxReducer = (state = { productList: [] }, actionType) => {
  let products = state.productList.slice();

  console.log("Actions", actionType);

  switch (actionType.type) {
    case "ADD_PRODUCT":
      nextProductId++;
      var product = { productId: nextProductId, productName: "" };
      products.push(product);
      break;
    case "REMOVE_PRODUCT":
      var idx = getIndexByProductId(products, actionType.productId);
      if (idx != -1) {
        products.splice(idx, 1); 
      }
      break;
    case "EDIT_PRODUCT":
      var idx = getIndexByProductId(products, actionType.productId);
      if (idx != -1) {
        products[idx].productName = actionType.productName;
      }
      break;
  }
  const newState = {
    productList: products,
  };
  console.log("Current State", newState);
  return newState;
};

const getIndexByProductId = (products, productId) => {
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    if (product.productId === productId) {
      return i;
    }
  }
  return -1;
};

export default ReduxReducer;
