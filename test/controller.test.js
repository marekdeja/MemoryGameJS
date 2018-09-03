describe('Game', function () {

    beforeEach(function () {

    });

    it('should evoke methods when startGame', function () {
        //given
        var dummyElement = document.createElement('div');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);

        spyOn(game, 'getLevel');
        spyOn(view, 'getInitialNumberOfPieces');
        spyOn(game, 'startGame');
        spyOn(view, 'createInfo');
        spyOn(view, 'renderPieces');
        spyOn(game, 'getPieces');
        spyOn(controller, 'setAmountToGuess');
        spyOn(controller, 'highlightPiecesToGuess');

        //when
        controller.startGame();

        //then
        expect(game.getLevel).toHaveBeenCalled();
        expect(view.getInitialNumberOfPieces).toHaveBeenCalled();
        expect(game.startGame).toHaveBeenCalled();
        expect(view.createInfo).toHaveBeenCalled();
        expect(view.renderPieces).toHaveBeenCalled();
        expect(game.getPieces).toHaveBeenCalled();
        expect(controller.setAmountToGuess).toHaveBeenCalled();
        expect(controller.highlightPiecesToGuess).toHaveBeenCalled();

    });

    it('should evoke methods when setLevel', function () {
        //given
        spyOn(game, 'setLevel');
        spyOn(view, 'setLevel');

        //when
        controller.setLevel(1);

        //then
        expect(game.setLevel).toHaveBeenCalled();
        expect(view.setLevel).toHaveBeenCalled();

    });

    it('should evoke methods when restartGame', function () {
        //given
        spyOn(view, 'deletePieces');
        spyOn(controller, 'setLevel');
        spyOn(controller, 'startGame');
        spyOn(view, 'changeInfo');
        spyOn(game, 'setAccuracyRateZero');
        spyOn(view, 'setAccuracy');

        //when
        controller.restartGame();

        //then
        expect(view.deletePieces).toHaveBeenCalled();
        expect(controller.setLevel).toHaveBeenCalled();
        expect(controller.startGame).toHaveBeenCalled();
        expect(view.changeInfo).toHaveBeenCalled();
        expect(game.setAccuracyRateZero).toHaveBeenCalled();
        expect(view.setAccuracy).toHaveBeenCalled();

    });

    it('should evoke methods when highlightPiecesToGuess is called', function () {
        //given
        spyOn(game, 'highlightPiecesToGuess');
        spyOn(view, 'highlightPiece');


        //when
        controller.highlightPiecesToGuess();

        //then
        expect(game.highlightPiecesToGuess).toHaveBeenCalled();
        expect(view.highlightPiece).toHaveBeenCalled();


    });

    it('should evoke methods in case green when checkSquare with status green', function () {
        //given
        spyOn(game, 'checkSquare');
        spyOn(game, 'getCheckSquareStatus').and.returnValue('green');
        spyOn(controller, 'highlightGreen');
        spyOn(controller, 'changeAccuracy');
        spyOn(game, 'setEmptyCheckSquareStatus');
        //when
        controller.checkSquare();

        //then
        expect(game.checkSquare).toHaveBeenCalled();
        expect(game.getCheckSquareStatus).toHaveBeenCalled();
        expect(controller.changeAccuracy).toHaveBeenCalled();
        expect(game.setEmptyCheckSquareStatus).toHaveBeenCalled();

        expect(controller.highlightGreen).toHaveBeenCalled();

    });

    it('should evoke methods in case greenNextLevel when checkSquare with status greenNextLevel', function () {
        //given
        spyOn(game, 'checkSquare');
        spyOn(game, 'getCheckSquareStatus').and.returnValue('greenNextLevel');
        spyOn(controller, 'highlightGreen');
        spyOn(controller, 'nextLevel');
        spyOn(controller, 'changeAccuracy');
        spyOn(game, 'setEmptyCheckSquareStatus');
        //when
        controller.checkSquare();

        //then
        expect(game.checkSquare).toHaveBeenCalled();
        expect(game.getCheckSquareStatus).toHaveBeenCalled();
        expect(controller.changeAccuracy).toHaveBeenCalled();
        expect(game.setEmptyCheckSquareStatus).toHaveBeenCalled();

        setTimeout(function () {
            expect(controller.nextLevel).toHaveBeenCalled();
            done();
        }, 500);

        expect(controller.highlightGreen).toHaveBeenCalled();

    });

    it('should evoke methods in case redGameOver when checkSquare with status redGameOver', function () {
        //given
        spyOn(game, 'checkSquare');
        spyOn(game, 'getCheckSquareStatus').and.returnValue('redGameOver');
        spyOn(controller, 'highlightRed');
        spyOn(controller, 'gameOver');
        spyOn(controller, 'changeAccuracy');
        spyOn(game, 'setEmptyCheckSquareStatus');
        //when
        controller.checkSquare();

        //then
        expect(game.checkSquare).toHaveBeenCalled();
        expect(game.getCheckSquareStatus).toHaveBeenCalled();
        expect(controller.changeAccuracy).toHaveBeenCalled();
        expect(game.setEmptyCheckSquareStatus).toHaveBeenCalled();

        expect(controller.gameOver).toHaveBeenCalled();


        expect(controller.highlightRed).toHaveBeenCalled();

    });

    it('should evoke methods in case red when checkSquare with status red', function () {
        //given
        spyOn(game, 'checkSquare');
        spyOn(game, 'getCheckSquareStatus').and.returnValue('red');
        spyOn(controller, 'highlightRed');
        spyOn(controller, 'highlightPiecesToGuess');
        spyOn(controller, 'changeAccuracy');
        spyOn(game, 'setEmptyCheckSquareStatus');
        //when
        controller.checkSquare();

        //then
        expect(game.checkSquare).toHaveBeenCalled();
        expect(game.getCheckSquareStatus).toHaveBeenCalled();
        expect(controller.changeAccuracy).toHaveBeenCalled();
        expect(game.setEmptyCheckSquareStatus).toHaveBeenCalled();

        setTimeout(function () {
            expect(controller.highlightPiecesToGuess).toHaveBeenCalled();
            done();
        }, 500);

        expect(controller.highlightRed).toHaveBeenCalled();

    });

    // nextLevel test, when methods are made to private tests do not work(controller.*)
//spyOn<controller>(controller, 'startGame'); 

    it('should evoke methods when nextLevel', function () {
        //given
        spyOn(view, 'deletePieces');
        spyOn(game, 'getLevel');
        spyOn(controller, 'setLevel');
        spyOn(controller, 'startGame');
        //when
        controller.nextLevel();
        //then
        expect(game.getLevel).toHaveBeenCalled();
        expect(controller.setLevel).toHaveBeenCalled();
        expect(controller.startGame).toHaveBeenCalled();
        expect(view.deletePieces).toHaveBeenCalled();
    });

    it('should evoke methods when setAmountToGuess', function () {
        //given
        spyOn(game, 'getStatus').and.returnValue(1);
        spyOn(view, 'setAmountToGuess');
        spyOn(game, 'getClicksToNextLevel');

        //when
        controller.setAmountToGuess();
        //then
        expect(game.getStatus).toHaveBeenCalled();
        expect(view.setAmountToGuess).toHaveBeenCalled();
        expect(game.getClicksToNextLevel).toHaveBeenCalled();

    });

    it('should evoke methods when changeNumberPieces', function () {
        //given
        spyOn(game, 'getStatus').and.returnValue(1);
        spyOn(view, 'deletePieces');
        spyOn(game, 'setAdditionalPieces');
        spyOn(game, 'getLevel');
        spyOn(view, 'createInfo');
        spyOn(view, 'renderPieces');
        spyOn(view, 'setAmountToGuess');
        spyOn(view, 'highlightPiece');
        var dummyElement = document.createElement('div');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);

        //when
        controller.changeNumberPieces();
        //then
        expect(game.getStatus).toHaveBeenCalled();
        expect(view.deletePieces).toHaveBeenCalled();
        expect(game.setAdditionalPieces).toHaveBeenCalled();

    });

    
    it('should evoke methods when changeAccuracy', function () {
        //given
        spyOn(game, 'changeAccuracy');
        spyOn(view, 'setAccuracy');

        //when
        controller.changeAccuracy();
        //then
        expect(game.changeAccuracy).toHaveBeenCalled();
        expect(view.setAccuracy).toHaveBeenCalled();
      
    });

    it('should evoke methods when newHighLight', function () {
        //given
        spyOn(game, 'getStatus').and.returnValue(1);
        spyOn(game, 'getLevel');
        spyOn(view, 'deletePieces');
        spyOn(view, 'createInfo');
        spyOn(view, 'renderPieces');
        spyOn(view, 'setAmountToGuess');
        spyOn(view, 'highlightPiece');
        var dummyElement = document.createElement('div');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);


        //when
        controller.newHighlight();
        //then
        expect(game.getStatus).toHaveBeenCalled();
        expect(view.deletePieces).toHaveBeenCalled();
        
    });
});