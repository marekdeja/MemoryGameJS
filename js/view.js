var view = (function () {
    var getInitialNumberOfPieces = function () {
        return 4;
    },
        mainDiv = document.getElementById('content'),

        renderPieces = function (pieces) {
            for (let i = 0; i < pieces.length; i++) {
                var square = document.createElement('div');
                square.className = "square";
                square.setAttribute('id', i);
                square.setAttribute('onclick', 'controller.checkSquare(this)');
                mainDiv.appendChild(square);
            }
        },
        createInfo = function(){
            var header = document.getElementById('header'),
            textInfo = document.createElement('div');
            textInfo.setAttribute('id', 'info');
            header.appendChild(textInfo);
        }

        deletePieces = function () {
            mainDiv.innerHTML = "";
        },

        setLevel = function (level) {
            document.getElementById('level').innerHTML = level;
        },
        
        highlightPiece = function(pieceId){
            let element = document.getElementById(pieceId);
            // let attr = element.getAttribute('style');
            element.setAttribute('style', 'background-color: #00b8ff');
            setTimeout(function(){ 
                element.setAttribute('style', 'background-color: #efff00');
             }, 1000);
        }

        gameOver = function(){
            document.getElementById('info').innerHTML = 'Game Over!'
        },

        highlightRed = function(element){
            element.setAttribute('style', 'background-color: red');
            setTimeout(function(){ 
                element.setAttribute('style', 'background-color: #efff00');
             }, 500);
        },

        highlightGreen = function(element){
            element.setAttribute('style', 'background-color: green');
            setTimeout(function(){ 
                element.setAttribute('style', 'background-color: #efff00');
             }, 500);
        },
        
        changeInfo = function(text){
            document.getElementById('info').innerHTML = text;
        }



    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces,
        deletePieces,
        setLevel,
        highlightPiece,
        createInfo, 
        gameOver,
        highlightRed,
        highlightGreen,
        changeInfo
    }
}());
