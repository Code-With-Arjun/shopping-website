function addToCart(data) {
  console.log(data);
  return {
    type: "ADD_TO_CART",
    payload: data.id,
  };
}
function removeToCart(data) {
  return {
    type: "REMOVE_TO_CART",
    payload: data.id,
  };
}

function addApiData(data) {
  return {
    type: "ADD_API_DATA",
    payload: data,
  };
}
export { addToCart, addApiData, removeToCart };
