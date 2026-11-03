const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const itemPrices = document.querySelectorAll(".price")
	const table = document.querySelector("table")
	const tr = document.createElement('tr')
	const tdOne = document.createElement("td")
	let totalAmount =0	
	itemPrices.forEach((item)=>{
		totalAmount+=Number(item.textContent)
	})
		tdOne.textContent = totalAmount
	tr.append(tdOne)
	
	
	
  
};

getSumBtn.addEventListener("click", getSum);

