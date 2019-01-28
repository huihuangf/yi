<!--  -->
<template lang='html'>
  <div class="ydc-tabPanel ydc-tabPanel-release">
        <div class="ydc-release-tab-head">
            <ul>
                <li :key="index"  :class="index==cur?'hit':''" v-for="tab,index in tabs" @click="cur=index">{{tab.name}}</li>
                
            </ul>
          <slot name="amount"></slot>
        </div>
        <div class="ydc-panes">
            <div  class="ydc-pane" v-for="tab,index in tabs" :style="{display:index==cur?'block':'none'}">
            <slot :name="tab.slotname"></slot>
            </div>
            <!-- <div class="ydc-pane">
               <slot name="tab2"></slot>
            </div> -->
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    props:['tabs'],
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
cur:0
};
},
}
</script>
<style lang='css' scoped>

</style>