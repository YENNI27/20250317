let angle = 0;
let seaweeds = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas-container'); // 將畫布附加到指定的容器
  
  // 為每條海草生成隨機高度、寬度和顏色
  for (let j = 0; j < 40; j++) {
    let height = random(windowHeight / 4, windowHeight / 2); // 高度在畫面中間以下
    let width = random(30, 60);
    let color = [random(150, 255), random(150, 255), random(150, 255), random(100, 200)]; // 使用馬卡龍色系，並設置透明度
    seaweeds.push({ height, width, color });
  }
}

function draw() {
  clear(); // 清除畫布
  background(255, 182, 193, 100); // 設置畫布為半透明粉紅色
  blendMode(BLEND); // 設置混合模式
  noFill(); // 確保線條不被填充
  
  let amplitude = 10; // 搖擺的幅度，減少幅度以縮短搖擺範圍
  
  for (let j = 0; j < seaweeds.length; j++) {
    let x = j * (windowWidth / seaweeds.length);
    let y = windowHeight;
    let totalHeight = seaweeds[j].height;
    let segmentLength = totalHeight / 20; // 每個節點的長度
    let seaweedWidth = seaweeds[j].width;
    let seaweedColor = seaweeds[j].color;
    
    stroke(seaweedColor);
    strokeWeight(seaweedWidth); // 設置線條寬度
    strokeCap(ROUND); // 設置線條圓角
    
    for (let i = 0; i < 20; i++) {
      let nextX = x + sin(angle + i * 0.5) * amplitude; // 調整搖擺角度
      let nextY = y - segmentLength; // 固定每個節點的垂直位置
      line(x, y, nextX, nextY);
      x = nextX;
      y = nextY;
    }
  }
  
  angle += 0.01; // 減少角度的增量以降低擺動頻率
}