<!--  -->
<template lang='html'>
	<div class="ydc-tabPanel">
        <div>
            <ul>
                <li v-for="data,index in datas" :class="index==cur?'hit':''" @click="cur=index">{{data.title}}</li>
            </ul>

        </div>
        <div class="ydc-panes">
            <div class="ydc-pane" v-for="data,index in datas" :style="{display:index==cur?'block':'none'}">
                <ol class="ydc-pane-list">
                    <li v-for="news in data.data">
                        <a :href="news.href" target="_blank">{{news.title}} <i v-if="news.isNew">new</i></a>
                        <span>{{news.time}}</span>
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
    cur:0,
    datas:[
        {title:'公告栏',data:[
            {id:2, title:"一点车点讯号平台关于封禁违规账号的通知（4月13日-4月20日）", isNew: true, href:"https://www.baidu.com",time:1548728945064 },
            {id:4, title:"一点车点讯号平台关于封禁违规账号的通知（4月13日-4月20日）", isNew: true, href:"https://www.baidu.com",time:1558728945064 },
            {id:5, title:"一点车点讯号平台关于封禁违规账号的通知（4月13日-4月20日）", isNew: true, href:"https://www.baidu.com",time:1588728945064 },
            {id:6, title:"一点车点讯号平台关于封禁违规账号的通知（4月13日-4月20日）", isNew: true, href:"https://www.baidu.com",time:1549728945064 },
            {id:8, title:"一点车点讯号平台关于封禁违规账号的通知（4月13日-4月20日）", isNew: true, href:"https://www.baidu.com",time:1538728945064 },
            ]},
        {title:'一点车资讯',data:[
            {id:3, title:"大号“思域”全新十代雅阁，革新换代后的全新十代雅阁到底如何！", isNew: true, href:"https://www.baidu.com",time:1518728945064 },
             {id:4, title:"大号“思域”全新十代雅阁，革新换代后的全新十代雅阁到底如何！", isNew: true, href:"https://www.baidu.com",time:1588728945064 },
              {id:5, title:"大号“思域”全新十代雅阁，革新换代后的全新十代雅阁到底如何！", isNew: true, href:"https://www.baidu.com",time:1528728945064 },
               {id:7, title:"大号“思域”全新十代雅阁，革新换代后的全新十代雅阁到底如何！", isNew: true, href:"https://www.baidu.com",time:1565728945064 }
            ]}
    ]

};
},
}
</script>
<style lang='css' scoped>

</style>