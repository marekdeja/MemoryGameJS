var controller = function () {
    var startGame = function () {
        var initialNumberOfPieces = view.getInitialNumberOfPieces();
        document.getElementById('level').innerHTML=game.getLevel();
        game.startGame({
            numberOfPieces: initialNumberOfPieces
        });
        
        view.createInfo();
        view.renderPieces(game.getPieces());
        controller.highlightPiecesToGuess();
        
    },

    setLevel = function(level){
        game.setLevel(level);
        view.setLevel(level);
    },



    restartGame = function(){
        view.deletePieces();
        controller.setLevel(0);
        startGame();
        view.changeInfo('');
    },

    highlightPiecesToGuess = function(){
        game.highlightPiecesToGuess();
    },

    highlightPiece = function(piece){
        view.highlightPiece(piece);
    },

    checkSquare = function(e){
            game.checkSquare(e);
    }

    gameOver = function(){
        view.gameOver();
    },

    highlightRed = function(e){
        view.highlightRed(e);
    },

    highlightGreen = function(e){
        view.highlightGreen(e);
    },

    nextLevel = function(){
        deletePieces();
        setLevel(game.getLevel()+1);
        startGame();
    },

    setAmountToGuess = function(amount){
        view.setAmountToGuess(amount);
    },

    changeNumberPieces = function(e){
        view.deletePieces();
        game.setAdditionalPieces(e);
        startGame();
    },

    changeShowTime = function (e){
        game.setShowTime(e);
    },

    getShowTime = function(){
        return game.getShowTime();
    },

    changeErrorsPossible = function(e){
        game.changeErrorsPossible(e);
    },

    changeAccuracy = function (rate){
        view.setAccuracy(rate);
    }



    return {
        'startGame': startGame,
        restartGame,
        setLevel,
        highlightPiece,
        highlightPiecesToGuess,
        checkSquare,
        gameOver,
        highlightRed,
        highlightGreen,
        nextLevel,
        setAmountToGuess,
        changeNumberPieces,
        changeShowTime,
        getShowTime,
        changeErrorsPossible,
        changeAccuracy
    }
}();
