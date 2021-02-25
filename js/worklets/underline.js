registerPaint('undeline', class {
  static get inputProperties() { return ['--step', '--seed']; }
  constructor() {
  }
  paint(ctx, geometry, properties) {
    const step = parseFloat(properties.get('--step').toString());
    let seed = parseFloat(properties.get('--seed').toString());
    ctx.moveTo(
      0,
      0
    );
    ctx.lineTo(
       20,
       20
    )
    
    ctx.stroke();

    for (let index = 0; index < step; index++) {
      console.log('hello');
      ctx.beginPath();
      ctx.strokeStyle = `rgb(${Math.abs(Math.cos(index * (Math.PI / 180)) * 255)},${Math.abs(Math.cos(index * (Math.PI / 180)) * 255)},${Math.abs(Math.cos(index * (Math.PI / 180)) * 255)})`
      ctx.lineCap = 'round';
      ctx.lineWidth = 5;
      let ypoint = geometry.width
      let xpoint = geometry.height
      ctx.moveTo(
        xpoint,
        ypoint
      );
      ctx.lineTo(
        xpoint + 20,
        ypoint - 20
      )
      ctx.moveTo(
        ypoint,
        xpoint,
      );
      ctx.lineTo(
        xpoint,
        ypoint
      )
      ctx.stroke();
    }
  }
})