# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

# Teleport

# 需求分析

1.初始化一个视频播放
2.打视屏播放区如果在视口外，小窗口出现
2.大视频和小视频在切换的时候保持视频状态不变

# 思路分析
1.video / 成熟的视频插件
2.监控大视频播放区域是否在视口内 vueuse
3.Teleport 保持 dom 状态的前提下完成传送
