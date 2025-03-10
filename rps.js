let score = JSON.parse(localStorage.getItem('score'));

if (score === null) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
}

update_score();

function playGame(playerMove) {
    const comMove = computerMove();

    let result = '';
    if (comMove === playerMove) {
        result = 'Tie';
    }

    if (playerMove === 'rock') {
        if (comMove === 'paper') {
            result = 'You Lost';
        } else if (comMove === 'scissors') {
            result = 'You Win';
        }
    } else if (playerMove === 'paper') {
        if (comMove === 'rock') {
            result = 'You Win';
        } else if (comMove === 'scissors') {
            result = 'You Lost';
        }
    } else {
        if (comMove === 'paper') {
            result = 'You Win';
        } else if (comMove === 'rock') {
            result = 'You Lost';
        }
    }

    if (result === 'You Win') {
        score.wins += 1;
    } else if (result === 'You Lost') {
        score.losses += 1;
    } else {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    update_score();

    document.querySelector('.js-result').innerHTML = `${result}`;
    document.querySelector('.js-moves').innerHTML = `You Picked <img src="photos/${playerMove}-emoji.png" class="move-img">
Computer Picked <img src="photos/${comMove}-emoji.png" class="move-img">`;


    //alert(`you picked ${playerMove} and computer picked ${comMove}. ${result}
//Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`);

}

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('rock');
    } else if (event.key === 'p') {
        playGame('paper');
    } else if (event.key === 's') {
        playGame('scissors');
    }
})

function update_score() {
    document.querySelector('.js-score').innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
}

function computerMove() {
    let comMove = '';
    const ranNumber = Math.random();
    if (ranNumber >= 0 && ranNumber < (1 / 3)) {
        comMove = 'rock';
    } else if (ranNumber >= (1 / 3) && ranNumber < (2 / 3)) {
        comMove = 'paper';
    } else if (ranNumber >= (2 / 3) && ranNumber < 1) {
        comMove = 'scissors';
    }
    return comMove;
}