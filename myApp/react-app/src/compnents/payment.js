import React from "react";
import { ReactDOM } from "react";
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();

function Pay() {
    const [product] = React.useState({
        name: "Ticket",
        price: 1500.36,

    });

async function handleToken(token, addresses) {
   const response = await axios.post("http://localhost:8080/user/checkout",{
        token,
        product
    });
const {status} = response.data
if(status === 'success')
{
    toast('Success! Check email for details',
    {icon: "✅"})
}
else
{
    toast("Something went wrong",
    { icon: "❌"});
}
    console.log({token, addresses});
}



    return(

        <div className="container">
            <div className="product">
                <h1>{product.name}</h1>
                <h3>Price{product.price}</h3>

            </div>

            <StripeCheckout 
            stripeKey="pk_test_51KABeOLJRcHi1IfiAVGgjn5RmuDKAPsthHXJg5MVaKssRDJjcjrTNJUIir2IcYxxMJfdQRP9MzZSmKm8MYm7G4a400DgM97QBf"
            token={handleToken}
            billingAddress
            shippingAddress
            amount={product.price * 100}
            name={product.name}


            />
        </div>



    );




}

export default Pay;