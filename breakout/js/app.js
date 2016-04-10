var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height-30;
var dx = randNum(-5, 5);
var dy = -3;
var ballRadius = 10;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth) / 2;

var rightPressed = false;
var leftPressed = false;

var brickRowCount = 3;
var brickColumnCount = 6;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var score = 0;

var bricks = [];
for (c = 0; c < brickColumnCount; c += 1) {
  bricks[c] = [];
  for (r = 0; r < brickRowCount; r += 1) {
    bricks[c][r] = {x: 0, y: 0, status: 1};
  }
}

function randNum(lower, upper) {
  randomNumber = (Math.random() * (upper - lower + 1)) + lower;
  return randomNumber;
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "hsl(240, 100%, 30%)";
  ctx.fillText("Score: " + score, 8, 20);
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "hsl(200, 80%, 50%)";
  ctx.strokeStyle = "hsl(200, 80%, 20%)";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "hsl(200, 100%, 50%)";
  ctx.fill();
  ctx.closePath();
}

function drawBricks() {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        var brickX = c*(brickWidth+brickPadding) + brickOffsetLeft;
        var brickY = r*(brickHeight+brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "hsl(300, 100%, 50%)";
        ctx.fill();
        ctx.closePath();
      } // if
    } // row loop
  } // column loop
} // function close

function collisionDetection() {
  for (c=0; c<brickColumnCount; c++) {
    for (r=0; r<brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
          dy = -dy
          b.status = 0;
          score++;
          if (score == brickRowCount*brickColumnCount) {
            alert("YOU WIN, CONGRATULATIONS!");
            document.location.reload();
          }
        }
      } // status check
    }//row loop
  }//col loop
}//func close

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawScore();
  collisionDetection();
  drawBricks();
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius - paddleHeight) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    }
  }
  if (y + dy > canvas.height - ballRadius) {
    alert("GAME OVER");
    document.location.reload();
  }
  if (x + dx < ballRadius || x + dx > canvas.width-ballRadius) {
    dx = -dx;
  }
  x += dx;
  y += dy;
  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 6;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 6;
  }
  requestAnimationFrame(draw);
}

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
    leftPressed = false;
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
draw();