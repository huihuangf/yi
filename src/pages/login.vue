<!--  -->
<template lang='html'>
<div class="ydc-body-login">
			<h2>登录</h2>
			<div class="ydc-body-login-content">
				<form action="">
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
						<a href="info.html">登录</a>
					</div>
					<div class="ydc-login-box">

						<a href="go-reg.html" target="_blank">立即注册</a>
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

</style>