const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const itemPrices = document.querySelectorAll(".price");
    const table = document.querySelector("table");

    const tr = document.createElement("tr");
    const tdOne = document.createElement("td");

    let totalAmount = 0;

    itemPrices.forEach((item) => {
        totalAmount += Number(item.textContent);
    });

    tdOne.textContent = totalAmount;
    tr.append(tdOne);

    table.append(tr);
};

getSumBtn.addEventListener("click", getSum);


getSumBtn.addEventListener("click", getSum);

