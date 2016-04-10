var GoL = (function(){

  "use strict";

  var ctx = $("#myCanvas").get(0).getContext("2d");
  var cellWidth = 10;
  var cellHeight = 10;
  var cellPadding = 0.5;
  var isAliveChance = 0.10;
  var cells = [];
  var newCells = [];
  var canvas = {
    width: $("#myCanvas").width(),
    height: $("#myCanvas").height()
  };
  var numCellsX = Math.floor(canvas.width / (cellWidth + cellPadding));
  var numCellsY = Math.floor(canvas.height / (cellHeight + cellPadding));

  function Cell(cellProps) {
    this.row = cellProps.row;
    this.col = cellProps.col;
    this.x = cellProps.x;
    this.y = cellProps.y;
    this.width = cellProps.width;
    this.height = cellProps.height;
    this.isAlive = cellProps.isAlive;
    this.aliveColor = "hsl(240, 75%, 60%)";
    this.deadColor = "black";
  }

  function initCells() {
    var cellProps;
    for (var row = 0; row < numCellsY; row++) {
      cells[row] = [];
      for (var col = 0; col < numCellsX; col++) {
        cellProps = {
          x: col * (cellWidth + cellPadding),
          y: row * (cellHeight + cellPadding),
          row: row,
          col: col,
          width: cellWidth,
          height: cellHeight,
          isAlive: Math.random() < isAliveChance
        };
        cells[row][col] = new Cell(cellProps);
      }
    }
  } // end func

  function drawCells() {
    var cell;
    for (var row = 0; row < numCellsY; row++) {
      for (var col = 0; col < numCellsX; col++) {
        cell = cells[row][col];
        if (cell.isAlive) {
          ctx.fillStyle = cell.aliveColor;
          ctx.fillRect(cell.x, cell.y, cell.width, cell.height);
        } else {
          ctx.fillStyle = cell.deadColor;
          ctx.fillRect(cell.x, cell.y, cell.width, cell.height);
        }
      } // col
    } // row
  } //end func

  function checkAround(cell) {
    var counter = 0;
    for (var i = -1; i < 2; i++) {
      for (var j = -1; j < 2; j++) {
        if (i !== 0 || j !== 0) {
          if (cell.row + i >= 0 && cell.row + i < numCellsY) {
            if (cell.col + j >= 0 && cell.col + j < numCellsX) {
              if (cells[cell.row + i][cell.col + j].isAlive) {
                counter++;
              }
            } // check if col is in bounds
          }  // check if row is in bounds
        } // dont count self
      } // col
    } // row
    if (cell.isAlive) {
      if (counter === 2 || counter === 3) {
        return true;
      } else {
        return false;
      }
    } // is cell alive
    else { // cell is dead
      if (counter === 3) {
        return true;
      } else {
        return false;
      }
    }
  }
  

  function updateCells() {
    var cell;
    var cellProps;
    for (var row = 0; row < numCellsY; row++) {
      newCells[row] = [];
      for (var col = 0; col < numCellsX; col++) {
        cell = cells[row][col];
        cellProps = {
          x: col * (cellWidth + cellPadding),
          y: row * (cellHeight + cellPadding),
          row: row,
          col: col,
          width: cellWidth,
          height: cellHeight,
          isAlive: true
        };
        newCells[row][col] = new Cell(cellProps)
        newCells[row][col].isAlive = checkAround(cell);
      } // col
    } // row
    for (var row = 0; row < numCellsY; row++) {
      for (var col = 0; col < numCellsX; col++) {
        cells[row][col] = newCells[row][col];
      }
    }
  }

  function makeGlider(x, y) {
    cells[x][y].isAlive = false;
    cells[x][y+1].isAlive = true;
    cells[x][y+2].isAlive = false;
    cells[x+1][y].isAlive = false;
    cells[x+1][y+1].isAlive = false;
    cells[x+1][y+2].isAlive = true;
    cells[x+2][y].isAlive = true;
    cells[x+2][y+1].isAlive = true;
    cells[x+2][y+2].isAlive = true;
  }

  function step() {
    updateCells();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCells();
  }

  function start() {
    initCells();
    step();
    drawCells();
    setInterval(step, 80);
  }

  start();

})();