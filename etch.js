const grid = document.querySelector('#container')

// Create 64 divs inside container
for (let i = 0; i < 16*16; i++) {
	const square = document.createElement('div');
	square.classList.add('square');
	grid.appendChild(square);
}