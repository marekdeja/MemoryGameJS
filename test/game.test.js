describe('Game', function () {

    beforeEach(function () {
        game.setLevel(0);
        var myObject = {
            value: 0
        }
        game.setAdditionalPieces(myObject);
    });

    it('should have 4 pieces after game start', function () {
        //given
        var pieces;

        //when
        game.startGame();

        pieces = game.getPieces();
        //then

        expect(pieces.length).toBe(4);
    });


    it('one pieces should be to guess after game start and piece set', function () {
        //given
        //when
        game.startGame();
        game.getPieces();
        //then
        expect(game.getClicksToNextLevel()).toBe(1);
    });

    it('should start game with configured number of pieces', function () {
        //given
        var pieces,
            config = {
                numberOfPieces: 6
            };

        //when
        game.startGame(config);
        pieces = game.getPieces();

        //then
        expect(pieces.length).toBe(6);
    });

    it('should get level 5 when set to 5', function () {
        //when
        game.setLevel(5);
        //then
        expect(game.getLevel()).toBe(5);

    });

    it('should highlight 1 when start', function () {
        //given
        //when
        game.startGame();
        game.getPieces();
        let pieces = game.highlightPiecesToGuess();
        //then
        expect(pieces.length).toBe(1);
    });

    it('should highlight 1 when start', function () {
        //given
        //when
        game.setLevel(1);
        game.startGame();
        game.getPieces();
        let pieces = game.highlightPiecesToGuess();
        //then
        expect(pieces.length).toBe(2);
    });

    //green next level
    it('shouldReturnGreenNextLevelWhenCheckSquare', function () {
        //given
        game.startGame();
        var pieces = game.getPieces();
        var testSquare = pieces.filter((value) => value.toGuess)[0];
        //when
        game.checkSquare(testSquare);
        //then
        expect(game.getCheckSquareStatus()).toBe('greenNextLevel');
    });

    it('shouldReturnGreenWhenCheckSquare', function () {
        //given
        game.setLevel(1);
        game.startGame();
        var pieces = game.getPieces();
        var testSquare = pieces.filter((value) => value.toGuess)[0];
        //when
        game.checkSquare(testSquare);
        //then
        expect(game.getCheckSquareStatus()).toBe('green');
    });

    it('shouldReturnRedGameOverWhenCheckSquare', function () {
        //given
        game.startGame();
        var pieces = game.getPieces();
        var testSquare = pieces.filter((value) => value.toGuess === false)[0];
        //when
        game.checkSquare(testSquare);
        //then
        expect(game.getCheckSquareStatus()).toBe('redGameOver');
    });

    it('shouldReturnRedWhenCheckSquare', function () {
        //given
        game.startGame();
        var pieces = game.getPieces();
        var testSquare = pieces.filter((value) => value.toGuess === false)[0];
        //when
        game.checkSquare(testSquare);
        //then
        expect(game.getCheckSquareStatus()).toBe('redGameOver');
    });

    it('shouldSet3AdditionalPiecesAndReturn3', function () {
        var myObject = {
            value: 3
        }
        game.setAdditionalPieces(myObject);

        game.startGame();
        game.getPieces();


        expect(game.getTemporaryPieces().length).toBe(7);
    });

    it('shouldAccuracyRate100WhenHitGreenFirstTime', function () {
        //given
        game.setAccuracyRateZero();
        game.setLevel(1);
        game.startGame();
        var pieces = game.getPieces();
        var testSquare = pieces.filter((value) => value.toGuess)[0];
        game.checkSquare(testSquare);

        //when
        var rate = game.changeAccuracy();

        //then
        expect(rate).toBe(100);
    });




    // function findPiecesToGuess(pieces) {
    //     return pieces.filter(function (piece) {
    //        return piece.toGuess;
    //     });
    // }
});
