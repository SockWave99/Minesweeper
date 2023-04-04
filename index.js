let buttons = document.querySelectorAll('.btn')

buttons.forEach(element => {
    element.addEventListener('click', () => {
        let difficulty = element.id
        document.querySelector('.difficultyDiv').classList.add('hide')
        createBoard(difficulty)
    })
})

function createBoard(difficulty) {
    let x
    let y
    if (difficulty == 'easy') {
        x = 10
        y = 10 
    } else if (difficulty == 'medium') {
        x = 16
        y = 16
    } else {
        x = 16
        y = 30
    }
    let board = document.createElement('div')
    let body = document.querySelector('body')
    board.id = 'board'
    body.append(board)
    for (let i = 0; i < x; ++i) {
        let row = document.createElement('div')
        row.className = 'row'
        board.append(row)
        for (let j = 0; j < y; ++j) {
            let box = document.createElement('div')
            addClick(box)
            box.className = 'boxes'
            box.id = i + j
            row.append(box)
        }
    }
}

function addClick(box) {
    box.addEventListener('click', () => {
        box.style.backgroundColor = 'white'
    }, {once: true})
}