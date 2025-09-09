import React, {useState} from "react";

function ExpenseForm() {
    const [expenseName,setExpenseName]= useState("");
    const [amount,setAmount]= useState("");

    const handleSubmit = (e)=>{
        e.preventdefault();
       console.log("ExpenseName:",expenseName);
       console.log("Amount:",amount);
       setExpenseName("")
       setAmount("")
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>ExpenseName:</label>
                <input
                type="text"
                value={expenseName}
                onChange={(e)=>setEpensiveName(e.target.value)}
                />
            </div>
            <div>
                <label>Amount:</label>
                <input
                type="Numbers"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                />
            </div>
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default ExpenseForm;