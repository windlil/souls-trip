//节流函数
export const throllte = (callback, timeout) => {
  let startTime = 0
  return function(...args) {
    let nowTime = new Date().getTime()
    let waitTime = timeout - (nowTime - startTime)
    if(waitTime < 0) {
      callback.apply(this, args)
      startTime = nowTime
    }
  }
}