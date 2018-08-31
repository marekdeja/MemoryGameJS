describe('Game', function () {

    beforeEach(function () {
        game.setLevel(0);
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





    // function findPiecesToGuess(pieces) {
    //     return pieces.filter(function (piece) {
    //        return piece.toGuess;
    //     });
    // }
});
