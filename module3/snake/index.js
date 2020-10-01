const squares = Array.from(document.querySelectorAll('.grid div'))

let currentSnake = []

//add the number 0 to the currentSnake array to see what happens

const lineNum = 9

for (let i = 0; i < squares.length - 3 * lineNum; i++) {
    currentSnake.push(0)
}
let count = 0;
for (let i = 0; i < 3 * lineNum; i++) {
    if (Math.floor(i / lineNum) == 0 && count < 3) {
        count += 1
        currentSnake.unshift(1)
    }
    else currentSnake.unshift(0)
}

//Challenge: draw the snake as 3 squares long on the third row down using unshift

//Challenge: add to the HEAD of the snake using push


currentSnake.forEach((item, index) => {
    if (item)
        squares[index].classList.add('snake')
})