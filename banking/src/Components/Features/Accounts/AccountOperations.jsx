import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deposit,  payloan, requestLoan, withdraw } from "./AccountSlice"

function AccountOperations() {
  const dispatch = useDispatch()

  const [depositAmount, setDepositAmount] = useState("")
  const [withdrawalAmount, setWithdrawalAmount] = useState("")
  const [loanAmount, setLoanAmount] = useState("")
  const [loanPurpose, setLoanPurpose] = useState("")
  const [currency, setCurrency] = useState("INR")

  const {
    loan: currentLoan,
    loanPurpose: currentLoanPurpose,
    balance,
    isLoading
  } = useSelector((store) => store.account)
  function handleDeposit() {
    if (!depositAmount) return
    dispatch(deposit(depositAmount,currency))
    setDepositAmount("")
  }

  function handleWithdrawal() {
    if (!withdrawalAmount) return
    dispatch(withdraw(withdrawalAmount))
    setWithdrawalAmount(" ")
  }

  function handleRequestLoan() {
    if (!loanAmount || !loanPurpose) return
    dispatch(requestLoan(loanAmount, loanPurpose))
    setLoanAmount("")
    setLoanPurpose("")
  }

  function handlePayLoan() {
    
    if (!currentLoan) return; 
    dispatch(payloan())
    
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
            onChange={(e) => setDepositAmount(Number(e.target.value))}
            placeholder="Deposit amount"
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="INR">Indian Rupees</option>
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit}>{isLoading?"converting...":`Deposit${depositAmount}` }</button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(Number(e.target.value))}
            placeholder="Withdraw amount"
          />
          <button onClick={handleWithdrawal}>Withdraw</button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>
        {currentLoan > 0 && (
          <div>
            <span>
              Pay back {currentLoan}({currentLoanPurpose})
            </span>
            <button onClick={handlePayLoan}>Pay loan</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default AccountOperations
