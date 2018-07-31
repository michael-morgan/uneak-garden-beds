function index(cart, id) {
  return cart.findIndex(item => item.id === id);
}

/* function quantity(cart, id) {
  return cart[index(cart, id)].quantity;
} */

function exists(cart, id) {
  return index(cart, id) !== -1;
}

function remove(cart, id) {
  const itemIndex = index(cart, id);
  return [
    ...cart.slice(0, itemIndex),
    ...cart.slice(itemIndex + 1),
  ];
}

function changeQuantity(cart, id, value, change = null) {
  if (value <= 0) {
    return remove(cart, id);
  }

  const itemIndex = index(cart, id);
  return [
    ...cart.slice(0, itemIndex),
    { id, quantity: change ? value : +cart[itemIndex].quantity + +value },
    ...cart.slice(itemIndex + 1),
  ];
}

function add(cart, id, quantity) {
  if (exists(cart, id)) {
    return changeQuantity(cart, id, quantity);
  }

  return [...cart, { id, quantity }];
}

export { remove, changeQuantity, add };
