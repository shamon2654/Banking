import CreateCustomer from "./Components/Features/Customers/CreateCustomer"
import Customer from "./Components/Features/Customers/Customer"
import AccountOperations from "./Components/Features/Accounts/AccountOperations"
import BalanceDisplay from "./Components/Features/Accounts/BalanceDisplay"
import { useSelector } from "react-redux"

function App() {
  const fullName = useSelector((state) => state.customer.fullName)
  return (
    <div>
      <h1>🏦 The Self Bank⚛️</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  )
}

export default App
