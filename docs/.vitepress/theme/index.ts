import Theme from 'vitepress/theme'
import Button from '../../../src/button/src/Button'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import type { App } from 'vue'

export default {
  ...Theme,
  // 扩展应用程序实例
  enhanceApp({ app }: { app: App<never> }) {
    // 注册组件
    app.component('Button', Button)
    app.component('DemoBlock', DemoBlock)
    app.component('Demo', Demo)
  }
}
