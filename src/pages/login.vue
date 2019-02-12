<!--  -->
<template lang='html'>
<div class="ydc-body-login">
			<h2>登录</h2>
			<div class="ydc-body-login-content">
				<form ref="form1" method="post" :action="SERVER+'api/login'">
					<div class="ydc-body-login-box">
						<div class="ydc-user-img">
							<div class="ydc-user-img-img"><img src="../assets/images/icon/ph.png" alt=""></div>
						</div>
						<div class="ydc-user-border">
							<input type="email" name="email" data-type="email" placeholder="请输入邮箱账号">
						</div>
					</div>
					<div class="ydc-body-login-box">
						<div class="ydc-user-img">
							<div class="ydc-user-img-img"><img src="../assets/images/icon/pad.png" alt=""></div>
						</div>
						<div class="ydc-user-border">
							<input type="password" name="password" data-type="password" placeholder="密码">
						</div>
					</div>
					<div class="ydc-bod-aq">
						<p>为了您的账号安全，请勿在公共电脑登录</p>
					</div>
					<div class="clearfix">
						<div class="fl">
							<input type="checkbox" checked="checked">
							<label>十天内免登录</label>
						</div>
						<div class="fr">
							<a href="#">忘记密码</a>
						</div>
					</div>
					<div class="ydc-body-submit">
						<a href="#"  @click="login()">登录</a>
					</div>
					<div class="ydc-login-box">
						<router-link :to="{name:'reg',param:{}}">立即注册</router-link>
						<span>|</span>
						<a href="customer.html" target="_blank">常见问题</a>

					</div>
				</form>

			</div>

		</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {SERVER} from '../config'
import { format } from 'url';
import {fetch_form} from '@/lib/fetch'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
methods:{
	async login(){
		let form=this.$refs['form1'];
		let json=fetch_form(form);

		console.log(json)
		if(json.err){
			alert(json.msg)
		}else{
			localStorage.token=json.token;
			alert("登录成功")
			this.$router.push('/index')
		}

	}
},
data() {
//这里存放数据
return {
SERVER
};
},
}
</script>
<style lang='css' scoped>

</style>