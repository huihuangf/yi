<!--  -->
<template lang='html'>
	<div class="ydc-tabPanel">
        <div>
            <ul>
                <li class="hit">公告栏</li>
                <li>一点车资讯</li>
            </ul>

        </div>
        <div class="ydc-panes">
            <div class="ydc-pane" style="display:block;">
                <ol class="ydc-pane-list">
                    <li>
                        <a href="page.html" target="_blank">一点车点讯号平台关于封禁违规账号的通知（4月13日-4月20日） <i>new</i></a>
                        <span>2017-04-17 10:00:00</span>
                    </li>
                    
                </ol>
              <Pagination/>
            </div>
            <div class="ydc-pane">
                <ol class="ydc-pane-list">
                    <li>
                        <a href="https://www.toutiao.com/i6553905796478927364/" target="_blank">大号“思域”全新十代雅阁，革新换代后的全新十代雅阁到底如何！<i>new</i></a>
                        <span>2017-04-17 10:00:00</span>
                    </li>
                </ol>
              <Pagination/>
            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Pagination from '@/components/pagination'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Pagination
},
data() {
//这里存放数据
return {

};
},
}
</script>
<style lang='css' scoped>

</style>