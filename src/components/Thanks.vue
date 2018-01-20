<template>
    <div class="section">
        <div class="content" @click="initCanvas">
            <div class="container">
                <p>感谢聆听</p>
            </div>
            <div class="footer">
                <p>成都印钞有限公司</p>
                <p class="name">
                    <span>技术质量部 李宾</span>
                    <span>企管规划部 倪震</span>
                </p>
            </div>
            <canvas ref="band"></canvas>
        </div>
    </div>
</template>

<script>
export default {
  name: "thanks",
  methods: {
    initCanvas() {
      function init() {
        x.clearRect(0, 0, w, h);
        q = [{ x: 0, y: h * 0.7 + f }, { x: 0, y: h * 0.7 - f }];
        while (q[1].x < w + f) d(q[0], q[1]);
      }

      function d(i, j) {
        x.beginPath();
        x.moveTo(i.x, i.y);
        x.lineTo(j.x, j.y);
        var k = j.x + (z() * 2 - 0.25) * f,
          n = y(j.y);
        x.lineTo(k, n);
        x.closePath();
        r -= u / -50;
        x.fillStyle =
          "#" +
          (
            ((v(r) * 127 + 128) << 16) |
            ((v(r + u / 3) * 127 + 128) << 8) |
            (v(r + u / 3 * 2) * 127 + 128)
          ).toString(16);
        x.fill();
        q[0] = q[1];
        q[1] = { x: k, y: n };
      }

      function y(p) {
        var t = p + (z() * 2 - 1.1) * f;
        return t > h || t < 0 ? y(p) : t;
      }

      var c = this.$refs.band,
        x = c.getContext("2d"),
        pr = window.devicePixelRatio || 1,
        w = window.innerWidth,
        h = window.innerHeight,
        f = 90,
        q,
        m = Math,
        r = 0,
        u = m.PI * 2,
        v = m.cos,
        z = m.random;
      c.width = w * pr;
      c.height = h * pr;
      x.scale(pr, pr);
      x.globalAlpha = 0.6;

      requestAnimationFrame(init);
    },
    initCanvas2() {
      function i() {
        if ((ctx.clearRect(0, 0, w, h), firstTime))
          for (
            q = [
              { x: 0, y: 0.7 * h + bandwidth, v_x: 0, v_y: 0 },
              { x: 0, y: 0.7 * h - bandwidth, v_x: 0, v_y: 0 }
            ],
              verticals.push(q[0]),
              verticals.push(q[1]);
            q[1].x < w + bandwidth;

          )
            firstDraw(q[0], q[1]);
        else
          for (var t = 0, e = 1; e < verticals.length - 1; )
            tweak(t, e), t++, e++;
        (firstTime = !1), requestAnimationFrame(i);
      }

      function go(t) {
        random() < 0.5 || (t.v_x += 0.1 * (random() - 0.5)),
          random() < 0.5 || (t.v_y += 0.1 * (random() - 0.5));
        var e = 0.3;
        (t.v_x = Math.max(Math.min(t.v_x, e), -e)),
          (t.v_y = Math.max(Math.min(t.v_y, e), -e)),
          (t.x += t.v_x),
          (t.y += t.v_y),
          (t.x < 0 || t.x > w) && (t.v_x *= -1.01),
          (t.y < 0 || t.y > h) && (t.v_y *= -1.01);
      }

      function tweak(t, e) {
        ctx.beginPath();
        var i = verticals[t],
          a = verticals[e],
          o = verticals_side[t],
          r = fillStyles[t];
        go(a),
          ctx.moveTo(i.x, i.y),
          ctx.lineTo(a.x, a.y),
          go(o),
          ctx.lineTo(o.x, o.y),
          ctx.closePath();
        // ctx.strokeStyle = r, ctx.stroke()
        ctx.fillStyle = r;
        ctx.fill();
      }

      function firstDraw(t, e) {
        ctx.beginPath(), ctx.moveTo(t.x, t.y), ctx.lineTo(e.x, e.y);
        var i = e.x + (2 * random() - 0.25) * bandwidth,
          a = y(e.y);
        ctx.lineTo(i, a), ctx.closePath(), (r -= twoPi / -50);
        ctx.strokeStyle =
          "#" +
          (
            ((127 * cos(r) + 128) << 16) |
            ((127 * cos(r + twoPi / 3) + 128) << 8) |
            (127 * cos(r + twoPi / 3 * 2) + 128)
          ).toString(16);
        ctx.fillStyle = ctx.strokeStyle;
        //ctx.stroke()
        ctx.fill;
        (q[0] = q[1]),
          (q[1] = { x: i, y: a, v_x: 0, v_y: 0 }),
          verticals.push(q[1]),
          fillStyles.push(ctx.strokeStyle),
          verticals_side.push(q[1]);
      }

      function y(t) {
        var e = t + (2 * random() - 1.1) * bandwidth;
        return e > h || 0 > e ? y(t) : e;
      }

      var canvas = this.$refs.band,
        ctx = canvas.getContext("2d"),
        pr = window.devicePixelRatio || 1,
        w = window.innerWidth,
        h = window.innerHeight,
        bandwidth = 90,
        q,
        r = 0,
        twoPi = 2 * Math.PI,
        cos = Math.cos,
        random = Math.random;
      (canvas.width = w * pr),
        (canvas.height = h * pr),
        ctx.scale(pr, pr),
        (ctx.globalAlpha = 0.2);
      var verticals = [],
        verticals_side = [],
        fillStyles = [],
        firstTime = !0;
      requestAnimationFrame(i);
    }
  },
  mounted() {
    this.initCanvas();
    // this.initCanvas2();
    // 由于echarts占用内存过多，不使用该动态版本
  }
};
</script>

<style scoped lang="less">
.content {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-size: 40pt;
  position: relative;
  .container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer {
    padding-bottom: 20px;
    font-size: 18pt;
    .name {
      font-size: 16pt;
    }
    span {
      padding-left: 20px;
    }
  }
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
