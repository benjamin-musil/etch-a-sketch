const grid = document.querySelector('#container')

let squareSide = 16;

for (let i = 0; i < squareSide; i++) {
	const row = document.createElement('div');
	row.classList.add('column');

	for (let j = 0; j < squareSide; j++) {
		const square = document.createElement('div');
		square.classList.add('square');
		row.appendChild(square);
	}

	grid.appendChild(row);
}