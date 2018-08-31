var game = function () {

    var initialNumberOfPieces = 4,
        currentNumberOfPieces,
        additionalPieces = 0,
        temporaryPieces = [],
        level = 0,
        status = 0,
        clicksToNextLevel = 0,
        counterNextLevel = 0,
        showTime = 1000,
        blockTime = 1000,
        changeTimeRed = 500,
        changeTimeGreen = 500,
        showTimeRed = 500,
        showTimeGreen = 500,
        errorsNumber = 0,
        greenShots = 0,
        redShots = 0,

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
                        // controller.highlightPiece(i);
                        status = 0;
                        setTimeout(function () {
                            if (status != -1) {
                                status = 1;
                            }
                        }, blockTime);
                    }
                }
            }
            return piecesToHighLight;
        },

        // highlightPiecesToGuess = function () {
        //     if (status = 1) {
        //         for (i = 0; i < temporaryPieces.length; i++) {
        //             if (temporaryPieces[i].toGuess === true && status > -1) {
        //                 controller.highlightPiece(i);
        //                 status = 0;
        //                 setTimeout(function () {
        //                     if (status != -1) {
        //                         status = 1;
        //                     }
        //                 }, blockTime);
        //             }
        //         }
        //     }
        // },

        checkSquare = function (e) {
            var clickedPiece = temporaryPieces[e.id];
            if (status === 1) {
                if (clickedPiece.toGuess) {
                    controller.highlightGreen(e);
                    greenShots++;
                    //TODO
                    if (clickedPiece.clicked === false) {
                        counterNextLevel++;
                        if (counterNextLevel === clicksToNextLevel) {
                            status = 0;
                            setTimeout(function () {
                                controller.nextLevel();
                                status = 1;
                            }, changeTimeGreen);
                        }
                    }
                    clickedPiece.clicked = true;
                }
                else {
                    clickedPiece.errors++;
                    redShots++;
                    if (clickedPiece.errors === errorsNumber + 1) {
                        status = -1;
                        controller.highlightRed(e);
                        controller.gameOver();
                    }
                    else {
                        controller.highlightRed(e);
                        setTimeout(function () {
                            controller.highlightPiecesToGuess();
                        }, changeTimeRed);
                    }
                }
                changeAccuracy();
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
            controller.changeAccuracy(rate);
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
        getClicksToNextLevel

    }
}();
