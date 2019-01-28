<!--  -->
<template lang='html'>
   <div class="ydc-right-banner">
            <div class="slideshow-container">
                <a href="https://xihazahuopu.taobao.com/" target="_blank" class="mySlides fade" style="display:block">
                    <img src="../assets/images/ad/ad1.jpg" style="width:100%">
                </a>
                <a href="https://weibo.com/525135676" target="_blank" class="mySlides fade">
                    <img src="../assets/images/ad/ad2.jpg" style="width:100%">
                </a>
                <a href="http://www.a-ui.cn/" target="_blank" class="mySlides fade">
                    <img src="../assets/images/ad/ad3.jpg" style="width:100%">
                </a>
            </div>
        </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
}
</script>
<style lang='css' scoped>
.ydc-right-banner {
    margin-top: 20px;
    width: 100%;
    height: 122px;
    overflow: hidden;
    border-radius: 3px;
}

.mySlides {
    display: none
}

/* banner begin */
.slideshow-container {
    width: 930px;
    position: relative;
    margin: 0 auto;
    border-radius: 14px;
}


</style>