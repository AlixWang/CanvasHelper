export function ObjType(obj) {
    let type = Object.prototype.toString.call(obj).match(/^\[.+\b(.+)\]$/)
    return type[1]
}