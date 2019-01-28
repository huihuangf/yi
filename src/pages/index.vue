<!--  -->
<template lang='html'>
<div class="ydc-entered-box">
    <div class="ydc-content-right">
        <RightHeader/>
        <RightBanner/>
        <!-- gongGao begin -->
        <div class="ydc-loading-box">
       <TabPanel/>
        </div>
        <!-- gongGao End -->
    </div>
</div>

</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import TabPanel from  '@/components/tabPanel'
import RightHeader from '@/components/rightHead'
import RightBanner from '@/components/rightBanner'
export default {
    name:'index',
//import引入的组件需要注入到对象中才能使用
components: {
    TabPanel,RightHeader,RightBanner
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