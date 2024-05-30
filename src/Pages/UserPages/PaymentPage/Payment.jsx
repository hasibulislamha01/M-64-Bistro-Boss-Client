import { loadStripe } from "@stripe/stripe-js";
import ThemeHeading from "../../../Components/ThemeHeading/ThemeHeading";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


// todo:  add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_payment_key)
const Payment = () => {
    return (
        <div>
            <ThemeHeading
                heading={'Payment'}
                subheading={'---Pay your bill now---'}
            ></ThemeHeading>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;


/**
 *      01. install stripe strip-rect
 *      02. create card element
 *      03. create stripe account and get publishable key
 *      04. use publishable key and use stripe to get card information and error
 * 
 * */ 