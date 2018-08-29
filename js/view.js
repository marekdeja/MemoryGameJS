var view = (function () {
    var getInitialNumberOfPieces = function () {
        return 4;
    },
        renderPieces = function (pieces) {
            var mainDiv = document.getElementById('content');
            for (let i=0; i<pieces.length; i++){
                var square = document.createElement('div');
                square.className="square";
                square.setAttribute('id', i);
                mainDiv.appendChild(square);
            }
        },
            
            getLevel = function(){
                var level = document.getElementById('level');
                return level.innerHTML;
            }
            
               
        

    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces,
        getLevel
    }
}());
