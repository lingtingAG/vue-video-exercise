<script setup>
import { ref, reactive } from "vue";
import { useIntersectionObserver } from '@vueuse/core'

// 1. 初始化大视频播放区
const options = reactive({
  width: "100%", //播放器高度
  height: "100%", //播放器高度
  color: "#409eff", //主题色
  title: "", //视频名称
  src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4", //视频源
  muted: false, //静音
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: false, //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制
  controlBtns: [
    "audioTrack",
    "quality",
    "speedRate",
    "volume",
    "setting",
    "pip",
    "pageFullScreen",
    "fullScreen",
  ], //显示所有按钮,
});

//2.监听大视频播放区域是否在视口区域
const videoContainer = ref(null);
const targetIsVisible = ref(false);
const { stop } = useIntersectionObserver(
  videoContainer,
  //isIntersecting 布尔值，视口区域内为true，否则为false
  ([{ isIntersecting }]) => {
    targetIsVisible.value = isIntersecting
  },
)

</script>

<template>
  <!-- 要传送的小视频播放窗口 -->
  <div id="small"></div>

  <!-- 被监听出入视口的占位元素 -->
  <div class="observerContainer" ref="videoContainer"></div>

  <!-- 初始播放的大视屏窗口 -->
  <div class="bigBox">
    <Teleport to="#small" :disabled="targetIsVisible">
      <vue3VideoPlay
        v-bind="options"
        poster="https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/ironMan.jpg"
      />
    </Teleport>
  </div>

  <!-- 模拟滚动 -->
  <div style="height: 2000px;"></div>
</template>

<style scoped>

#small{
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 200px;
  height: 140px;
  border: 1px solid #ccc;
}

.observerContainer{
    width: 600px;
    height: 420px;
    position: absolute;
    left: 10px;
    top: 10px;
}

.bigBox{
  width: 600px;
  height: 420px;
  border: 1px solid #ccc;
}
</style>
