


const Cart = (props) => {
    // eslint-disable-next-line react/prop-types
    const {quantity = 0} = props

    return (
        <div className="cart  light-blue white-text">
             <i className="material-icons">shopping_cart</i>
            {quantity ? <span className="cart-quantity" >{quantity}</span> : null}
        </div>
    )
}

export default Cart