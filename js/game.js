var game = function () {

    var initialNumberOfPieces = 4,
        currentNumberOfPieces,
        temporaryPieces =[],

        startGame = function (config) {
            if (config && config.numberOfPieces) {
                currentNumberOfPieces = config.numberOfPieces;
            } else {
                currentNumberOfPieces = initialNumberOfPieces;
            }
        },

        getPieces = function () {
            var i,
                pieces = [];

            for(i=0; i < currentNumberOfPieces; i++) {
                pieces.push({
                    id: i,
                    toGuess: false
                });
            }
            pieces[0].toGuess = true;
            temporaryPieces=pieces;
            return pieces;
        },

        getTemporaryPieces = function(){
            return temporaryPieces;
        }



    return {
        startGame,
        getPieces,
        getTemporaryPieces
    }
}();
