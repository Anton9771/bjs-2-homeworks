'use strict'

function solveEquation(a, b, c) {
	let arr;
	let discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) {
		arr = [];
	} else if (discriminant === 0) {
		arr = [-b / (2 * a)];
	} else {
		arr = [(-b + Math.sqrt(discriminant) ) / (2 * a), (-b - Math.sqrt(discriminant) ) / (2 * a)];
	}

	return arr;
}


function calculateTotalMortgage(percent, contribution, amount, date) {
	let totalAmount;

	if (isNaN(percent)) {
		return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
	}
	if (isNaN(contribution)) {
		return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
	}
	if (isNaN(amount)) {
		return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
	}

	percent = +(percent / 100);
	contribution = +contribution;
	amount = +amount;

	let creditBody = amount - contribution;
	console.log(creditBody);

	let currentMonth = new Date().getMonth();
	let currentYear = new Date().getFullYear();
	let yearsGap = date.getFullYear() - currentYear;
	let monthsGap = yearsGap * 12 - currentMonth + date.getMonth();
	console.log(monthsGap);

	let partOfpercent = percent / 12;
	console.log(partOfpercent);
	let monthPayment = creditBody * (partOfpercent + (partOfpercent / (((1 + partOfpercent) ** monthsGap) - 1)));
	console.log(monthPayment);

	totalAmount = +(monthPayment * monthsGap).toFixed(2);

	console.log(totalAmount);
	return totalAmount;
}
