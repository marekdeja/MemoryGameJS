var view = (function () {
    var getInitialNumberOfPieces = function () {
        return 4;
    },
        showTime = controller.getShowTime(),
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
        createInfo = function () {
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

        highlightPiece = function (pieces) {
            for (let i=0; i<pieces.length; i++){
                let element = document.getElementById(pieces[i].id);
                element.setAttribute('class', 'squareBlue');
                showTime = controller.getShowTime();
                setTimeout(function () {
                    element.setAttribute('class', 'square');
                }, showTime);

            }
            
        },



    gameOver = function () {
        document.getElementById('info').innerHTML = 'Game Over!'
    },

        highlightRed = function (element) {
            element.setAttribute('class', 'squareRed');
            setTimeout(function () {
                element.setAttribute('class', 'square');
            }, 200);
        },

        highlightGreen = function (element) {
            element.setAttribute('class', 'squareGreen');
            setTimeout(function () {
                element.setAttribute('class', 'square');
            }, 200);
        },

        changeInfo = function (text) {
            document.getElementById('info').innerHTML = text;
        },

        setAmountToGuess = function (amount) {
            document.getElementById('amountToGuess').innerHTML = amount;
        },

        setAccuracy = function (rate){
            document.getElementById('accuracy').innerHTML = rate +"%";
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
        changeInfo,
        setAmountToGuess,
        setAccuracy

    }
}());