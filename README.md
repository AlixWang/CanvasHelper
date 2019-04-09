### Canvas methods enhance

#### How to use
1. get canvas ctx and add enhance methods to ctx
```javascript
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
    ctx = new canvasHandle(ctx)
```

2. use provide methods

```javascript
    ctx.strokeRoundRect(10,10,100,100,2,'#f00',[20,20,20,20])
    ctx.fillRoundRect(10,10,100,100,'#f00',[20,20,20,20])
```
