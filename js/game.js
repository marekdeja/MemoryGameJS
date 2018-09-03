var game = (function () {

    var initialNumberOfPieces = 4,
        currentNumberOfPieces,
        additionalPieces = 0,
        temporaryPieces = [],
        level = 0,
        status = 0,
        clicksToNextLevel = 0,
        counterNextLevel = 0,
        showTime = 1000,
        errorsNumber = 0,
        greenShots = 0,
        redShots = 0,
        checkSquareStatus='',

        getCheckSquareStatus = function(){
            return checkSquareStatus;
        },
        setEmptyCheckSquareStatus = function(){
            checkSquareStatus ='';
        },

        startGame = function (config) {
            if (config && config.numberOfPieces) {
                currentNumberOfPieces = config.numberOfPieces + level * 2 + additionalPieces;
            } else {
                currentNumberOfPieces = initialNumberOfPieces + level * 2 + additionalPieces;
            }
            status = 1;
            counterNextLevel = 0;

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

            clicksToNextLevel = 0;
            for (let i = 0; i < level + 1; i++) {
                let randomTableElement = Math.floor(Math.random() * pieces.length);
                if (pieces[randomTableElement].toGuess) {
                    i--;
                }
                else {
                    pieces[randomTableElement].toGuess = true;
                    clicksToNextLevel++;
                }
            }

            temporaryPieces = pieces;
            return pieces;
        },

        getClicksToNextLevel = function () {
            return clicksToNextLevel;
        }

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
            var piecesToHighLight=[];
            if (status = 1) {
                for (i = 0; i < temporaryPieces.length; i++) {
                    if (temporaryPieces[i].toGuess === true && status > -1) {
                        piecesToHighLight.push(temporaryPieces[i]);
                        status = 0;
                        setTimeout(function () {
                            if (status != -1) {
                                status = 1;
                            }
                        }, showTime);
                    }
                }
            }
            return piecesToHighLight;
        },

     
        checkSquare = function (e) {
            var clickedPiece = temporaryPieces[e.id];
            if (status === 1) {
                if (clickedPiece.toGuess) {
                    checkSquareStatus = 'green';
                    greenShots++;
                    //TODO
                    if (clickedPiece.clicked === false) {
                        counterNextLevel++;
                        if (counterNextLevel === clicksToNextLevel) {
                            if(status!=-1){
                            status = 0;
                            checkSquareStatus ='greenNextLevel';
                            setTimeout(function () {
                                if(status!=-1){
                                status = 1;
                                }
                            }, 500);
                        }
                        }
                    }
                    clickedPiece.clicked = true;
                }
                else {
                    clickedPiece.errors++;
                    redShots++;
                    if (clickedPiece.errors === errorsNumber + 1) {
                        status = -1;
                        checkSquareStatus ='redGameOver';
                    }
                    else {
                        status = 0;
                        checkSquareStatus='red';
                        setTimeout(function () {
                            if(status!=-1){
                            status = 1;
                            }
                        }, 500);
                    }
                }
            }
        },

        setAdditionalPieces = function (e) {
            additionalPieces = parseInt(e.value);
        },

        setShowTime = function (e) {
            showTime = parseInt(e.value);
        },

        getShowTime = function () {
            return showTime;
        },

        changeErrorsPossible = function (e) {
            errorsNumber = parseInt(e.value);
        },

        changeAccuracy = function () {
            var rate = parseInt(greenShots / (greenShots + redShots) * 100);
            return rate;
        },

        getStatus = function () {
            return status;
        },

        setAccuracyRateZero = function () {
            greenShots = 0;
            redShots = 0;
        }


    return {
        startGame,
        getPieces,
        getTemporaryPieces,
        getLevel,
        setLevel,
        setPiecesToGuess,
        highlightPiecesToGuess,
        checkSquare,
        setAdditionalPieces,
        setShowTime,
        getShowTime,
        changeErrorsPossible,
        changeAccuracy,
        getStatus,
        setAccuracyRateZero,
        getClicksToNextLevel,
        getCheckSquareStatus,
        setEmptyCheckSquareStatus

    }
})();