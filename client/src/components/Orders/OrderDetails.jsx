import React from 'react'

const OrderDetails = () => {
    return (
        <>
            <div className='orderDetailsSection'>
                <div className='mainArea'>
                    <h1>ORDER DETAILS</h1>
                    <div>
                        <h2>SHIPPING</h2>
                        <div>
                            <span className='subHead'>Address :</span>
                            <span> 1/345, shhfo</span>
                        </div>
                    </div>
                    <div>
                        <h2>CONTACT</h2>
                        <div>
                            <span className='subHead'>Name :</span>
                            <span> Saif ali khan</span>
                        </div>

                        <div>
                            <span className='subHead'>Phone :</span>
                            <span> 1234567890</span>
                        </div>
                    </div>
                    <div>
                        <h2>STATUS</h2>
                        <div>
                            <span className='subHead'>Order Status :</span>
                            <span> Processing</span>
                        </div>
                        <div>
                            <span className='subHead'>Placed At :</span>
                            <span> 7-12-2022</span>
                        </div>
                        <div>
                            <span className='subHead'>Delivered At :</span>
                            <span> 7-12-2022</span>
                        </div>
                    </div>
                    <div>
                        <h2>PAYMENT</h2>
                        <div>
                            <span className='subHead'>Payment Mehtod :</span>
                            <span> Online</span>
                        </div>
                        <div>
                            <span className='subHead'>Paid At :</span>
                            <span> 7-12-2022</span>
                        </div>
                    </div>
                    <div>
                        <h2>PAYMENT</h2>
                        <div>
                            <span className='subHead'>Item Price:</span>
                            <span> Rs:{1600}</span>
                        </div>
                        <div>
                            <span className='subHead'>Shipping Charges :</span>
                            <span> Rs:{200}</span>
                        </div>
                        <div>
                            <span className='subHead'>Tax :</span>
                            <span> Rs:{1600 / 10}</span>
                        </div>
                        <div>
                            <span className='subHead'>Total Amount :</span>
                            <span> Rs:{1600 + 200 + 160}</span>
                        </div>
                    </div>

                    <div className='subArea'>
                        <h1>ORDERED ITEMS</h1>
                        <div>
                            <h2>Cheese Burger</h2>
                            <p>{12} X {300}</p>
                        </div>
                        <div>
                            <h2>Chicken Burger</h2>
                            <p>{12} X {300}</p>
                        </div>
                        <div>
                            <h2>Zinger Burger</h2>
                            <p>{12} X {300}</p>
                        </div>
                        <div>
                        <h3>Sub Total</h3>
                        <h3>RS : 1000</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderDetails
