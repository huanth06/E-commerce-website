export function setLsQty(product) {
    let newQty = 0;
    product.reduce((accument, currentValue) => {
        newQty = accument + currentValue.quantity;
        return newQty;
    }, 0)
    localStorage.setItem('lsQty', newQty);
    return newQty;
}