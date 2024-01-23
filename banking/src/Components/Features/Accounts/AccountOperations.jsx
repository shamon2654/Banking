import { useState } from "react";




function AccountOperations() {
 

  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("INR");

  ;

  function handleDeposit() {
   
  }

  function handleWithdrawal() {
   
  }

  function handleRequestLoan() {
   
  }

  function handlePayLoan() {
    
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange=''
            placeholder="Deposit amount"
          />
          <select
            value={currency}
            onChange=''
          >
            <option value="INR">Indian Rupees</option>
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit}>
          Deposit
          </button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange=''
            placeholder="Withdraw amount"
          />
          <button onClick=''>
            Withdraw 
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange=''
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange=''
            placeholder="Loan purpose"
          />
          <button onClick=''>Request loan</button>
        </div>
        
          <div>
            <span>
              Pay back 
            </span>
            <button onClick=''>Pay loan</button>
          </div>
        
      </div>
    </div>
  );
}

export default AccountOperations;
