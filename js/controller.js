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
        highlightGreen
    }
}();
