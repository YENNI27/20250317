function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 182, 193); // 粉紅色畫布

  let seaweedCount = 10; // 海草的數量
  let segments = 20; // 每條海草的分段數量
  let segmentLength = height / 2 / segments; // 每段的長度

  noStroke();
  fill(0, 100, 0); // 設置海草顏色

  for (let j = 0; j < seaweedCount; j++) {
    let x = (j + 1) * width / (seaweedCount + 1); // 每條海草的初始 x 位置
    let y = height;

    beginShape();
    curveVertex(x, y); // 起始點
    for (let i = 0; i <= segments; i++) {
      let nextX = x + sin(frameCount * 0.1 + i) * 20; // 每段線條左右搖動，規律搖擺
      let nextY = y - segmentLength;
      curveVertex(nextX, nextY);
      x = nextX;
      y = nextY;
    }
    endShape();

    // 畫出海草的形狀像薯條
    let seaweedWidth = 20; // 海草的寬度
    beginShape();
    vertex(x - seaweedWidth / 2, height); // 左下角
    for (let i = 0; i <= segments; i++) {
      let nextX = x + sin(frameCount * 0.1 + i) * 20; // 每段線條左右搖動，規律搖擺
      let nextY = y - segmentLength;
      vertex(nextX - seaweedWidth / 2, nextY);
      x = nextX;
      y = nextY;
    }
    vertex(x - seaweedWidth / 2, y - segmentLength); // 左上角
    endShape(CLOSE);

    x = (j + 1) * width / (seaweedCount + 1); // 重置 x 位置
    y = height;

    beginShape();
    vertex(x + seaweedWidth / 2, height); // 右下角
    for (let i = 0; i <= segments; i++) {
      let nextX = x + sin(frameCount * 0.1 + i) * 20; // 每段線條左右搖動，規律搖擺
      let nextY = y - segmentLength;
      vertex(nextX + seaweedWidth / 2, nextY);
      x = nextX;
      y = nextY;
    }
    vertex(x + seaweedWidth / 2, y - segmentLength); // 右上角
    endShape(CLOSE);
  }

  // 新增一條從畫布底部開始延伸的線條
  stroke(0); // 設置線條顏色
  strokeWeight(2); // 設置線條寬度
  let x = width / 2; // 線條的初始 x 位置
  let y = height;
  beginShape();
  vertex(x, y); // 起始點
  for (let i = 0; i <= segments; i++) {
    let nextX = x + sin(frameCount * 0.1 + i) * 20; // 每段線條左右搖動，規律搖擺
    let nextY = y - segmentLength;
    vertex(nextX, nextY);
    x = nextX;
    y = nextY;
  }
  endShape();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}