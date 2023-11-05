let socket = io('/output');

window.addEventListener('load', () => {
    document.getElementById('get-question').addEventListener('click', () => {
        socket.emit('getquestion');
        console.log('emitting a socket ping');
    })
    document.getElementById('get-answer').addEventListener('click', () => {
        socket.emit('getanswer');
    })
    document.getElementById('canvas1').addEventListener('click', () => {
        // todo: add details from the canvas (points, section, etc). Can be hard coded initially?
        // todo: disable selected canvas and associate with socket id that selected it?
        socket.emit('sendCanvas');
    })
    document.getElementById('canvas2').addEventListener('click', () => {
        // todo: add details from the canvas (points, section, etc). Can be hard coded initially?
        // todo: disable selected canvas and associate with socket id that selected it?
        socket.emit('sendCanvas');
    })
    document.getElementById('canvas3').addEventListener('click', () => {
        // todo: add details from the canvas (points, section, etc). Can be hard coded initially?
        // todo: disable selected canvas and associate with socket id that selected it?
        socket.emit('sendCanvas');
    })
})

socket.on('answers', (data)=> {
    console.log(data);
    document.getElementById('answer-total').innerHTML = "Number of people who answered the question : " + data.total;
    document.getElementById('answer-right').innerHTML = "How many got it correct : " +  data.right;
    document.getElementById('answer-wrong').innerHTML = "How many got it incorrect : " + data.wrong;
})

socket.on('question', (data)=> {
    console.log(data);
    document.getElementById('question').innerHTML = data.question;
})

socket.on('sendCanvasx', (data) => {
    console.log(data);
    // update the relevant canvas? or maybe just do that initially?
    document.getElementById('canvas1').src = data;
});