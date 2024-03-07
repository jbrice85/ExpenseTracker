const addBtn = document.getElementById("addBtn")
const tableBody = document.querySelector("#table tbody")

addBtn.addEventListener("click", ()=>{

    var type = document.getElementById("typeSel").value
    var name = document.getElementById("name").value
    var date = document.getElementById("date").value
    var amount = document.getElementById("amount").value

    /*
    console.log("Type: " + type)
    console.log("Name: " + name)
    console.log("Date: " + date)
    console.log("Amount: " + amount)
    */

    if(type && name && date && amount && !isNaN(amount)) {
        //All fields are filled and amount is a valid number

        //Create new table row
        const newRow = document.createElement("tr")

        //Create table cells for each field
        const typeCell = document.createElement("td")
        const nameCell = document.createElement("td")
        const dateCell = document.createElement("td")
        const amountCell = document.createElement("td")

        //Set the value of each cell
        typeCell.textContent = type
        nameCell.textContent = name
        dateCell.textContent = date
        amountCell.textContent = amount

        //Append cells to new row
        newRow.appendChild(typeCell)
        newRow.appendChild(nameCell)
        newRow.appendChild(dateCell)
        newRow.appendChild(amountCell)

        //Append new row to table body
        tableBody.appendChild(newRow)

        //Clear form fields for next entry
        document.getElementById("typeSel").value = ""
        document.getElementById("name").value = ""
        document.getElementById("date").value = ""
        document.getElementById("amount").value = ""

    } else {
        //Some/all fields are not filled out
        alert("Error: Fill out all fields. Amount should be a number.")
    }

})