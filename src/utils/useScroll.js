import { onMounted, onUnmounted, ref } from "vue"
import { throllte } from "./throttle"
//监听屏幕滚动
const useScroll = () => {
  let isScrollEnd = ref(false)
  let scrollTop = ref(0)
  let scrollHeight = ref(0)
  let clientHeight = ref(0)
  const scrollListenerHandler = throllte(() => {
    scrollTop.value = document.documentElement.scrollTop
    scrollHeight.value = document.documentElement.scrollHeight
    clientHeight.value = document.documentElement.clientHeight
    if(scrollHeight.value <= scrollTop.value + clientHeight.value + 180) {
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
    isScrollEnd,
    scrollTop,
    scrollHeight,
    clientHeight
  }
}

export default useScroll