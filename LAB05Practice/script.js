function calculatePayableAmount() {
    const price = Number(document.getElementById("productPrice").value);
    const quantity = Number(document.getElementById("productQuantity").value);
    bill=price*quantity;
    document.getElementById("payableAmount").value = 0;
    document.getElementById("quantityErr").innerHTML = "";
    document.getElementById("totalAmountBtn").style.display = "none";
    if(quantity<=0)
    {
        document.getElementById("quantityErr").innerHTML = "Quantity must be greater than 0";
        document.getElementById("quantityErr").style.color = "red";
        document.getElementById("payableAmount").value = 0;
    }
    else
    {
        document.getElementById("quantityErr").innerHTML = "";
        document.getElementById("payableAmount").value = bill;
        document.getElementById("totalAmountBtn").style.display = "block";
    }
}