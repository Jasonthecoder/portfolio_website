var myScript = (function(){

  // Game piece object
  var Piece = function(info){
    this.name = info["name"];
    this.row = info["row"];
    this.col = info["col"];
  };

  // Variables
  var map = [];
  var rows = 15;
  var cols = 30;
  var player;
  var coins = [];
  // Symbols
  var playerSymbol = "<span id='player'>#</span>";
  var emptySpace = "-";
  var wallSymbol = "1";
  var coinCount = 100;
  var coinSymbol = "<span class='coins'>0</span>";
  var coinsCollected = 0;
  var instructions = "<p>Use the arrow keys to move around. Collect all of the coins!</p>";

  // Functions
  var initMap = function(){
    for (var row = 0; row < rows; row++) {
      map[row] = [];
      for (var col = 0; col < cols; col++) {
        map[row][col] = emptySpace;
      }
    }
  };

  var makeMapBoundary = function(){
    for (var row = 0; row < rows; row++) {
      for (var col = 0; col < cols; col++) {
        if (row === 0 || row === rows - 1 || col === 0 || col === cols - 1) {
          map[row][col] = wallSymbol;
        }
      }//col
    }//row
  };

  var randNum = function(lower, upper){
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
  };

  var placePlayer = function(){
    var randRow = randNum(0, rows - 1);
    var randCol = randNum(0, cols - 1);
    if (map[randRow][randCol] !== emptySpace) {
      placePlayer();
    } else {
      map[randRow][randCol] = playerSymbol;
      player = new Piece({
        name: "player",
        row: randRow,
        col: randCol
      });
    }
  }

  var placeCoins = function(){
    while (coinCount > 0) {
      var randRow = randNum(0, rows - 1);
      var randCol = randNum(0, cols - 1);
      if (map[randRow][randCol] === emptySpace ) {
        map[randRow][randCol] = coinSymbol;
        coinCount--;
      }
    }
  };

  var printMap = function(){
    var html = "<div id='map'>";
    for (var row = 0; row < rows; row++) {
      html += "<ul>";
      for (var col = 0; col < cols; col++) {
        html += "<li>" + map[row][col] + "</li>";
      }
      html += "</ul>";
    }
    html += "</div>";
    $("#mapOutput").html(html);
  };

  var printScore = function() {
    var html = "<p>You have collected ";
    html += coinsCollected + " coins.</p>";
    html += instructions;
    $("#textOutput").html(html);
  };

  var landedOnCoin = function(row, col){
    if (map[row][col] === coinSymbol) {
      coinsCollected++;
    }
  };

  // Event handlers
  var eventHandlers = {};
  eventHandlers.keydown = function(event){

    if (event.which === 37 && map[player.row][player.col-1] !== wallSymbol) {
      map[player.row][player.col] = emptySpace;
      player.col -= 1;
    }
    if (event.which === 38 && map[player.row-1][player.col] !== wallSymbol) {
      map[player.row][player.col] = emptySpace;
      player.row -= 1;
    }
    if (event.which === 39 && map[player.row][player.col+1] !== wallSymbol) {
      map[player.row][player.col] = emptySpace;
      player.col += 1;
    }
    if (event.which === 40 && map[player.row+1][player.col] !== wallSymbol) {
      map[player.row][player.col] = emptySpace;
      player.row += 1;
    }
    landedOnCoin(player.row, player.col);
    map[player.row][player.col] = playerSymbol;
    printMap();
    printScore();
  };

  // Event listener
  $(document).on("keydown", eventHandlers.keydown);

  // Initialize script
  var init = function(){
    initMap();
    makeMapBoundary();
    placePlayer();
    placeCoins();
    printMap();
    printScore();
  };

  init();

  // Public variables and functions
  return {
    init: init
  }

})();