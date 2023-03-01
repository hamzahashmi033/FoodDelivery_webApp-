import React, { useState } from 'react'
import { Country, State } from "country-state-city"
import {Link} from "react-router-dom"

const ShippingDetails = () => {
    const [  country, setCountry ] = useState("")
    const confirmOrder = () => {

    }
   
    return (
        <>
            <div className='shippingParent'>
                <h1>Shipping Details</h1>
                <div className='shippingForm'>
                    <div>
                        <h3>House No</h3>
                        <input type="text" placeholder='Enter House No' />
                    </div>
                    <div>
                        <h3>City</h3>
                        <input type="text" placeholder='Enter City' />
                    </div>
                    <div>
                        <h3>Country</h3>
                        <select
                            required
                            onChange={(e)=>setCountry(e.target.value)}
                        >
                            <option value="">Country</option>
                            {Country &&
                                Country.getAllCountries().map((item) => (
                                    <option key={item.isoCode} value={item.isoCode}>
                                        {item.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                    {country ? <div>
                        <h3>State</h3>
                        <select>
                            <option>State</option>
                            {
                                State && State.getStatesOfCountry(country).map(i => (
                                    <option>{i.name}</option>
                                ))
                            }
                        </select> 
                    </div>: ""}
                    <div>
                        <h3>Postal Code</h3>
                        <input type="text" placeholder='Enter Pin Code' />
                    </div>
                    <div>
                        <h3>Phone No</h3>
                        <input type="text" placeholder='Enter Phone No' />
                    </div>
                    <button onClick={confirmOrder}><Link to="/confirmorder">Confirm Order</Link></button>
                </div>

            </div>
        </>
    )
}

export default ShippingDetails
