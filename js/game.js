var game = function () {

    var initialNumberOfPieces = 4,
        currentNumberOfPieces,
        temporaryPieces = [],
        level = 0,
        status = 0,
        clicksToNextLevel=0,
        counterNextLevel=0,

    startGame = function (config) {
        if (config && config.numberOfPieces) {
            currentNumberOfPieces = config.numberOfPieces + level * 2;
        } else {
            currentNumberOfPieces = initialNumberOfPieces;
        }
        status = 1;
        clicksToNextLevel = level*2;
    },

        getPieces = function () {
            var i,
                pieces = [];

            for (i = 0; i < currentNumberOfPieces; i++) {
                pieces.push({
                    id: i,
                    toGuess: false,
                    errors: 0,
                    clicked: false
                });
            }

            for (let i = 0; i < level + 1; i++) {
                let randomTableElement = Math.floor(Math.random() * pieces.length);
                pieces[randomTableElement].toGuess = true;
                clicksToNextLevel++;
            }

            temporaryPieces = pieces;
            return pieces;
        },

        getTemporaryPieces = function () {
            return temporaryPieces;
        },

        getLevel = function () {
            return level;
        },
        setLevel = function (newLevel) {
            level = newLevel;
        },

        setPiecesToGuess = function () {
            return Math.random(10);
        },

        highlightPiecesToGuess = function () {
            for (i = 0; i < temporaryPieces.length; i++) {
                if (temporaryPieces[i].toGuess === true) {
                    controller.highlightPiece(i);
                }
            }
        },

        checkSquare = function (e) {
            var clickedPiece = temporaryPieces[e.id];
            if (status === 1) {
                if (clickedPiece.toGuess) {
                    controller.highlightGreen(e);
                    //TODO
                    if (clickedPiece.clicked===false){

                    }
                    clickedPiece.clicked = true;
                }
                else {
                    clickedPiece.errors++;
                    if (clickedPiece.errors === 2) {
                        controller.gameOver();
                        status = 0;
                    }
                    else {
                        controller.highlightRed(e);
                        setTimeout(function () {
                            controller.highlightPiecesToGuess();
                        }, 700);
                    }
                }

            }
        }

    return {
        startGame,
        getPieces,
        getTemporaryPieces,
        getLevel,
        setLevel,
        setPiecesToGuess,
        highlightPiecesToGuess,
        checkSquare
    }
}();
