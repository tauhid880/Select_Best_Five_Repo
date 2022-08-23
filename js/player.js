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