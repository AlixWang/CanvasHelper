import {ObjType} from './utils/index'

export default class canvasHandle  {
    constructor(ctx) {
        if(ObjType(ctx) !== 'CanvasRenderingContext2D') {
           throw new Error('initial obj is not a canvas context objcet please check your code')
        }
        this.ctx = ctx
        this.ctx.drawRoundRect = this.drawRoundRect
    }
    drawRoundRect() {
        this.ctx.save()
    }
}
