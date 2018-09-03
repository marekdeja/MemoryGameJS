var controller = function () {
    var startGame = function () {
        var initialNumberOfPieces = view.getInitialNumberOfPieces();
        document.getElementById('level').innerHTML=game.getLevel();
        game.startGame({
            numberOfPieces: initialNumberOfPieces
        });
        
        view.createInfo();
        view.renderPieces(game.getPieces());
        controller.setAmountToGuess();
        controller.highlightPiecesToGuess();
        
    },

    setLevel = function(level){
        game.setLevel(level);
        view.setLevel(level);
    },



    restartGame = function(){
        view.deletePieces();
        controller.setLevel(0);
        changeAccuracy('- ');
        startGame();
        view.changeInfo('');
        game.setAccuracyRateZero();
    },

    highlightPiecesToGuess = function(){
        var piecesToHighlight = game.highlightPiecesToGuess();
        view.highlightPiece(piecesToHighlight);
    },

    checkSquare = function(e){
        if (game)
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

    setAmountToGuess = function(){
        if(game.getStatus()>-1){
        view.setAmountToGuess(game.getClicksToNextLevel());
        }
    },

    changeNumberPieces = function(e){
        if(game.getStatus()>-1){
        view.deletePieces();
        game.setAdditionalPieces(e);
        startGame();
        }else{
            game.setAdditionalPieces(e);
        }
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

    changeAccuracy = function (){
        var rate = game.changeAccuracy();
        view.setAccuracy(rate);
    }

    newHighlight = function(){
        if(game.getStatus()>-1){
        deletePieces();
        startGame();
        }
    }



    return {
        'startGame': startGame,
        restartGame,
        setLevel,
        // highlightPiece,
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
        changeAccuracy,
        newHighlight
    }
}();