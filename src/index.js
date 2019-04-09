import {ObjType} from './utils/index'
export default class canvasHandle  {
    constructor(ctx) {
        if(ObjType(ctx) !== 'CanvasRenderingContext2D') {
           throw new Error('initial obj is not a canvas context objcet please check your code')
        }
        this.ctx = ctx
        this.ctx.strokeRoundRect = this.strokeRoundRect.bind(this)
        this.ctx.fillRoundRect = this.fillRoundRect.bind(this)
        return this.ctx
    }

    /**
     *
     *
     * @param {number} [x=0]
     * @param {number} [y=0]
     * @param {number} [width=100]
     * @param {number} [height=100]
     * @param {number} [strokeWidth=1] stroke width
     * @param {string} [color='#000000'] stroke line color
     * @param {*} [radiusCount=[]]
     * @memberof canvasHandle
     */
    strokeRoundRect(x = 0,y = 0,width = 100 ,height = 100 ,strokeWidth = 1, color = '#000000', radiusCount = []) {
        this.ctx.save()
        this._drawRoundRect(x,y,width,height,radiusCount)
        this.ctx.strokeStyle = color
        this.ctx.lineWidth = strokeWidth
        this.ctx.stroke()
        this.ctx.restore()
    }

    /**
     *
     * arguments similar with _drawRoundRect infact the almost arguments will pass to it
     * @param {number} [x=0]
     * @param {number} [y=0]
     * @param {number} [width=100]
     * @param {number} [height=100]
     * @param {string} [color='#000000'] fill bg color
     * @param {*} [radiusCount=[]]
     * @memberof canvasHandle
     */
    fillRoundRect(x = 0,y = 0,width = 100 ,height = 100 ,color = '#000000', radiusCount = []) {
        this.ctx.save()
        this._drawRoundRect(x,y,width,height,radiusCount)
        this.ctx.fillStyle = color
        this.ctx.fill()
        this.ctx.restore()
    }
    
    /**
     * this method will generate a roundRect
     *
     * @param {*} x roundRect x position
     * @param {*} y roundRect y position 
     * @param {*} width roundRect width
     * @param {*} height roundRect height
     * @param {*} radiusCount roundRect radius array [topLeft, topRight, bottomRight, bottomLeft]
     * @memberof canvasHandle
     */
    _drawRoundRect(x, y, width, height, radiusCount) {
        const [topLeft,topRight,bottomRight,bottomLeft] = radiusCount
        this.ctx.save()
        this.ctx.translate(x,y)
        this.ctx.beginPath(0)
        if(topLeft) {
            this.ctx.arc(topLeft,topLeft,topLeft,Math.PI,Math.PI*3/2)
        } else {
        }
        this.ctx.lineTo(width-topRight,0)
        if(topRight) {
            this.ctx.arc(width-topRight, topRight, topRight, Math.PI*3/2, Math.PI*2)
        } else {
            this.ctx.lineTo(width,0)
            this.ctx.lineTo(width,topRight)
        }
        this.ctx.lineTo(width,height-bottomRight)
        if(bottomRight) {
            this.ctx.arc(width-bottomRight, height-bottomRight, bottomRight, 0, Math.PI/2)
        } else {
            this.ctx.lineTo(width,height)
        }
        this.ctx.lineTo(bottomLeft,height)
        if(bottomLeft) {
            this.ctx.arc(bottomLeft, height-bottomLeft, bottomLeft, Math.PI/2, Math.PI)
        } else {
            this.ctx.lineTo(0, height)
        }
        this.ctx.lineTo(0,topLeft)
        this.ctx.closePath();
    }
}