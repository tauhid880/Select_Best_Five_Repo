// get orderList ..
const orderList = document.getElementById("ol");

// click = add to playerList
function addPlayer(name, this_btn) {
  const playerName = getIDInnerText(name);

  
  const length = orderList.children.length; // 0 theke start hoy
  

  if (length < 5) {
    const li = document.createElement("li");
    li.innerText = playerName;
    orderList.appendChild(li);
    this_btn.disabled = true;
    li.classList.add(
      "px-5",
      "py-2",
      "text-2xl",
      "font-semibold",
      "text-orange-500"
    );

    setTextValue("count", length + 1);
  } else {
    alert("You Can't Add More than 5 Players");
  }
}

// click = calculate-button

function calculate() {
  const length = orderList.children.length;

  const perPlayer = getIDValue("per-player");
  const perPlayerValue = makeFloat(perPlayer);

  if (isNaN(perPlayerValue)) {
    alert("Enter Amount for Per-Player");

    setTextValue("player-expenses", "Amount");

    setInputValue("per-player", "");
    
    setTextValue("total", "Amount");

    // setInputValue("manager", '');
    // setInputValue("coach", '');
  } else if (perPlayerValue == 0) {
    alert(`Player-Cost => (${perPlayerValue}) Amount can't be Zero`);

    setTextValue("player-expenses", "Amount");

    setInputValue("per-player", "");

    setTextValue("total", "Amount");

    // setInputValue("manager", '');
    // setInputValue("coach", '');
  } else if (perPlayerValue < 0) {
    alert(`Player-Cost => (${perPlayerValue}) Amount can't be Negative`);

    setTextValue("player-expenses", "Amount");

    setInputValue("per-player", "");

    setTextValue("total", "Amount");

    // setInputValue("manager", '');
    // setInputValue("coach", '');
  } else if (length == 0) {
    alert("Please Select some Players");

    setTextValue("player-expenses", "Amount");

    setInputValue("per-player", "");

    setTextValue("total", "Amount");

    // setInputValue("manager", '');
    // setInputValue("coach", '');
  } else {
    const expenses = length * perPlayerValue;

    setTextValue("player-expenses", expenses);

    // setInputValue("per-player", '');

    setTextValue("total", "Amount");

    // setInputValue("manager", '');
    // setInputValue("coach", '');
  }
}

// click = calculate-total-button

const calculateTotal = document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const playerExpenses = getIDInnerText("player-expenses");
    const playerExpensesValue = makeFloat(playerExpenses);

    const manager = getIDValue("manager");
    const managerValue = makeFloat(manager);

    const coach = getIDValue("coach");
    const coachValue = makeFloat(coach);

    if (isNaN(managerValue) || isNaN(coachValue)) {
      alert("Enter Amount for Manager & Coach");

      setTextValue("total", "Amount");

      setInputValue("per-player", "");

      // setInputValue("manager", '');
      // setInputValue("coach", '');
    } else if (managerValue == 0) {
      alert(`Manager-Cost => (${managerValue}) Amount can't be Zero`);

      setTextValue("total", "Amount");

      setInputValue("per-player", "");

      setInputValue("manager", "");
      // setInputValue("coach", '');
    } else if (coachValue == 0) {
      alert(`Coach-Cost => (${coachValue}) Amount can't be Zero`);

      setTextValue("total", "Amount");

      setInputValue("per-player", "");

      // setInputValue("manager", '');
      setInputValue("coach", "");
    } else if (managerValue < 0) {
      alert(`Manager-Cost => (${managerValue}) Amount can't be Negative`);

      setTextValue("total", "Amount");

      setInputValue("per-player", "");

      setInputValue("manager", "");
      // setInputValue("coach", '');
    } else if (coachValue < 0) {
      alert(`Coach-Cost => (${coachValue}) Amount can't be Negative`);

      setTextValue("total", "Amount");

      setInputValue("per-player", "");

      // setInputValue("manager", '');
      setInputValue("coach", "");
    }

    
    else if (playerExpenses == "Amount") {
      alert(
        "Please Calculate Player Expenses, by Selecting Some Players & Press 'Calculate' Button"
      );

      setTextValue("total", "Amount");

      setInputValue("per-player", "");

      // setInputValue("manager", '');
      // setInputValue("coach", '');
    } else {
      const finalTotal = playerExpensesValue + managerValue + coachValue;
      setTextValue("total", finalTotal);

      setInputValue("per-player", "");
    }
  });
