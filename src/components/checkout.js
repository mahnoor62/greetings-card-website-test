import { Button} from '@mui/material';


const Checkout = () => {

  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const handleCheckout = async () => {
    try {
      const res = await fetch(`${API_URL}/api/payment/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await res.json();

      console.log("data", data);


      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Something went wrong!');
      }
    } catch (error) {
      console.error('Checkout error', error);
      alert('Error initiating checkout');
    }
  };

  return (
    <Button onClick={handleCheckout}>
      Pay Now
    </Button>
  );
};


export default Checkout;