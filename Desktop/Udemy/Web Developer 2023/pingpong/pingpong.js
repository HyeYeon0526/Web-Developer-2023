const p1 = {
    btn : document.querySelector('#p1Button'),
    dsp :document.querySelector('#p1Display'),
    scr : 0
};

const p2 = {
    btn : document.querySelector('#p2Button'),
    dsp :document.querySelector('#p2Display'),
    scr : 0
};

const winningScoreSelect = document.querySelector('#playto');
const resetbtn = document.querySelector('#reset');
let isGameOver = false;
let winningScore = 3;

function addScore(player,opponent) {
    if(!isGameOver){
        player.scr += 1;    
        if (player.scr === winningScore){
            isGameOver = true;
            player.dsp.classList.add('has-text-success');
            opponent.dsp.classList.add('has-text-danger');
            player.btn.disabled = true;
            opponent.btn.disabled = true;
        }
        player.dsp.innerText = player.scr;
    }
}

p1.btn.addEventListener('click',function() {
    addScore(p1,p2);
})


p2.btn.addEventListener('click',function() {
    addScore(p2,p1);
})

winningScoreSelect.addEventListener('change',() => {
    winningScore = parseInt(winningScoreSelect.value);
    reset();
})

resetbtn.addEventListener('click',reset);

function reset() {
    isGameOver = false;
    for(let p of [p1,p2]){
        p.scr = 0;
        p.dsp.innerText = p1.scr;
        p.dsp.classList.remove('has-text-success','has-text-danger');
        p.btn.disabled = false;
    }
}