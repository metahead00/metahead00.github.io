<!DOCTYPE html>
<html>
<head>
  <style>
    canvas {
      position: fixed;
      top: 0;
      left: 0;
    }
  </style>
</head>
<body>
  <canvas id="fireworks-canvas"></canvas>

  <script>
    const canvas = document.getElementById('fireworks-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function createFirework() {
      const x = Math.random() * canvas.width;
      const y = canvas.height;
      const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
      const sparkCount = 100;

      for (let i = 0; i < sparkCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 4 + 2;
        const sparkX = x;
        const sparkY = y;
        const gravity = 0.1;
        const opacity = 1;

        setInterval(() => {
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(sparkX, sparkY, 2, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();

          sparkX += Math.cos(angle) * velocity;
          sparkY += Math.sin(angle) * velocity;
          velocity *= 0.98;
          velocity -= gravity;
          opacity -= 0.01;

          if (opacity <= 0) clearInterval();
        }, 10);
      }
    }

    function updateFireworks() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      createFirework();
      requestAnimationFrame(updateFireworks);
    }

    updateFireworks();
  </script>
</body>
</html>
