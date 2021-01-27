// money transaction process
function moneyTransaction(preBalID, resourceID, cb) {
    const previousBalance = document.getElementById(preBalID);
    const transactionAmount = document.getElementById(resourceID);
    if (transactionAmount.value) {
        previousBalance.innerText =
            parseFloat(previousBalance.innerText) +
            parseFloat(transactionAmount.value);
        const totalBalance = document.getElementById("balance");
        totalBalance.innerText = cb(
            parseFloat(totalBalance.innerText),
            parseFloat(transactionAmount.value)
        );
    }
    transactionAmount.value = "";
}
// getting ID
function getID(id) {
    return document.getElementById(id);
}

/* ---------------> XX <---------------- */
const form = getID("formSubmit");
// transaction area showing and login area hidden event
form.addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("loginArea").style.display = "none";
    document.getElementById("transactionArea").style.display = "block";
});

const depositButton = getID("depositButton");
const withdrawButton = getID("withdrawButton");

// deposit money
depositButton.addEventListener("click", function (e) {
    moneyTransaction(
        "depositBalance",
        "depositAmount",
        (prevAmount, newAmount) => prevAmount + newAmount
    );
});

// withdraw money
withdrawButton.addEventListener("click", function (e) {
    moneyTransaction(
        "withdrawBalance",
        "withdrawAmount",
        (prevAmount, newAmount) => prevAmount - newAmount
    );
});