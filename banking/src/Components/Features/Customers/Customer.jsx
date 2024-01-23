import { useSelector } from "react-redux";//using to access


function Customer() {
  
  const customer = useSelector((store) => store.customer)
  console.log(customer)
  return <h2>👋 Welcome, #######</h2>;
}

export default Customer;
