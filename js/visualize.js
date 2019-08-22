var audio, title, ctx, dataArray, barHeight, barWidth, WIDTH, HEIGHT, x, analyser, bufferLength, src, context;
var playing = false;

function toggleVisualize() {
  playing = !playing;
  visualize();
}

function playSong() {
  playing = true;
  visualize();
}

function visualize() {
  var canvas = document.getElementById("canvas");
  if(playing)
  {
    canvas.style.display = "block";
    audio = document.getElementById("jp_audio_0");
    context = context || new AudioContext();
    src = src || context.createMediaElementSource(audio);
  
    analyser = context.createAnalyser();
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
  
    src.connect(analyser);
    analyser.connect(context.destination);
  
    analyser.fftSize = 256;
  
    bufferLength = analyser.frequencyBinCount;
  
    dataArray = new Uint8Array(bufferLength);
  
    WIDTH = canvas.width;
    HEIGHT = canvas.height;
  
    barWidth = (WIDTH / bufferLength) * 1.2;
    barHeight;
    x = 0;
    renderFrame();
  }
  else {
    canvas.style.display = "none";
  }
  
};

function renderFrame() {
  requestAnimationFrame(renderFrame);

  x = 0;

  analyser.getByteFrequencyData(dataArray);


  /* Drawing Visualizer */
  ctx.fillStyle = "rgba(0,0,0)";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  for (var i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];
      
    var r = barHeight + (25 * (i/bufferLength));
    var g = 250 * (i/bufferLength);
    var b = 50;
    barHeight*=1.5;

    ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
    ctx.fillRect(x, (HEIGHT-barHeight), barWidth, HEIGHT);

    x += barWidth + 1;
  }
}