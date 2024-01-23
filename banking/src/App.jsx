import CreateCustomer from "./Components/Features/Customers/CreateCustomer";
import Customer from "./Components/Features/Customers/Customer";
import AccountOperations from "./Components/Features/Accounts/AccountOperations";
import BalanceDisplay from "./Components/Features/Accounts/BalanceDisplay";

function App() {
  return (
    <div>
      <h1>🏦 The Sujith Bank⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
