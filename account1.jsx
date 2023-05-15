// this keeps a running total of deposits and withdrawals
const ATMDeposit = ({ onChange }) => {
  return (
    <label className="label huge">
      Deposit:
      <input type="number" onChange={onChange}></input>
      
    </label>
  );
};

const Account = () => {
  const [accountState, setAccountState] = React.useState(0);
  const [withdrawal, setWithdrawal] = React.useState(0);

  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    setWithdrawal(Number(event.target.value));
  };

  const handleDeposit = event => {
    let newTotal = accountState + withdrawal;
    alert(`Account total = ${newTotal}`);
    setAccountState(newTotal);
    event.preventDefault();
  };

  const handleWithdraw = event => {
    let newTotal = accountState - withdrawal; // Withdraw the specified amount
    alert(`Account total = ${newTotal}`);
    setAccountState(newTotal);
    event.preventDefault();
  };
  

  return (
    <form className="container">
      <h2 className="balance-heading">Checking Account <br />
       Balance: {accountState}</h2>
      <div className="input-container">
        <ATMDeposit onChange={handleChange}>Deposit</ATMDeposit>
      </div>
      <div className="button-container">
        <button className="action-button" onClick={handleDeposit}>Deposit</button>
        <button className="action-button" onClick={handleWithdraw}>Withdraw</button>
      </div>
    </form>
  );
  

  
};

// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));

