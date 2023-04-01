import { onMounted, onUnmounted, ref } from "vue"
import { throllte } from "./throttle"
//监听屏幕滚动
const useScroll = () => {
  let isScrollEnd = ref(false)
  const scrollListenerHandler = throllte(() => {
    console.log('滚动')
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight
    if(scrollHeight <= scrollTop + clientHeight + 100) {
      console.log('大于')
      isScrollEnd.value = true
    }
  }, 100) 
  onMounted(() => {
    window.addEventListener('scroll', scrollListenerHandler)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', scrollListenerHandler)
  })
  return {
    isScrollEnd
  }
}

export default useScroll