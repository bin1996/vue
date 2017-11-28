var index=Vue.component("index",{
    template:`
    <div class="pos">
    <Nav></Nav>
    <img src="./img/201711241908422662441075086.1440x0.jpg" alt="" class="center">
    <router-view></router-view>
</div>
    `
})
Vue.component("Nav",{
    template:`
    <div class="nav">
    <router-link v-for="(item,key) in navdata" :key="key" :to="item.url" exact>{{item.title}}</router-link>
    <router-link  to="/login" exact v-if="!login">登录</router-link>
    <span v-else @click="change" style="position: relative">{{name}}
       <span  v-show="show" style="position: absolute;top:44px;right:0;z-index:2;display: block;width: 34px;background: #ccc" @click="out">退出</span>
    </span>
</div>
    `,
    data(){
        return {
            navdata:[{title:"首页",url:"/"},{title:"公司简介",url:"/info"},{title:"文档说明",url:"/doc"}],
            login:false,
            name:"",
            show:false
        }
    },
    created(){
        this.name=this.get("login","name")
        this.login=this.get("login","name")
    },
    methods:{
        change(){
            this.show=!this.show
        },
        out(){
            this.del("login")
            router.push("/login")
        }
    }
})
var info=Vue.component("info",{
    template:`
    <div>
    <Nav class="pos"></Nav>
    <div>
    <router-view name="left" class="left"></router-view>
    <router-view name="right" class="right"></router-view>
    </div>
</div>
    `
})
var doc=Vue.component("doc",{
    template:`
    <div>
    <Nav></Nav>
    <transition name="opacity" mode="out-in">
    <router-view></router-view>
    </transition>
</div>
    `,
    beforeRouteEnter(to,from,next){
        next(function (vm) {
            if(!vm.get("login","name")){
                router.push("/login")
            }
        })
    }
})
var list=Vue.component("list",{
    template:`
    <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media">
        <router-link to="doc/list/1" tag="a">
            <img class="mui-media-object mui-pull-left" src="./img/201711241908422662441075086.1440x0.jpg">
            <div class="mui-media-body">
                幸福
                <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
            </div>
        </router-link>
    </li>
    <li class="mui-table-view-cell mui-media">
        <router-link to="doc/list/2" tag="a">
            <img class="mui-media-object mui-pull-left" src="./img/206575247.jpg">
            <div class="mui-media-body">
                木屋
                <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
            </div>
        </router-link>
    </li>
    <li class="mui-table-view-cell mui-media">
        <router-link to="doc/list/3" tag="a">
            <img class="mui-media-object mui-pull-left" src="./img/109951162984262093.jpg">
            <div class="mui-media-body">
                CBD
                <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
            </div>
        </router-link>
    </li>
    <li class="mui-table-view-cell mui-media">
        <router-link to="doc/list/4" tag="a">
            <img class="mui-media-object mui-pull-left" src="./img/20170930205326938001.jpg">
            <div class="mui-media-body">
                幸福
                <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
            </div>
        </router-link>
    </li>
    <li class="mui-table-view-cell mui-media">
        <router-link to="doc/list/5" tag="a">
            <img class="mui-media-object mui-pull-left" src="./img/201711241908422662441075086.1440x0.jpg">
            <div class="mui-media-body">
                木屋
                <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
            </div>
        </router-link>
    </li>
    <li class="mui-table-view-cell mui-media">
        <router-link to="doc/list/6" tag="a">
            <img class="mui-media-object mui-pull-left" src="./img/20170930205326938001.jpg">
            <div class="mui-media-body">
                CBD
                <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
            </div>
        </router-link>
    </li>
</ul>
    `
})
var con=Vue.component("con",{
    template:`<div>{{this.$route.params.id}}</div>`
})
var left=Vue.component("left",{
    template:`<div>
<h3>php</h3>
<ul>
<router-link to="#1" tag="li">smarty1</router-link>
<router-link to="#2" tag="li">thinkphp1</router-link>
</ul>
<h3>php</h3>
<ul>
<router-link to="#3" tag="li">smarty2</router-link>
<router-link to="#4" tag="li">thinkphp2</router-link>
</ul>
</div>`,
    watch:{
        $route(){
            var hash=this.$route.hash.slice(1)
            var vm = this
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }
            new TWEEN.Tween({ start: document.querySelector(".right").scrollTop })
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({ start: document.getElementById(hash).offsetTop-44 }, 500)
                .onUpdate(function () {
                    document.querySelector(".right").scrollTop = this.start.toFixed(0)
                })
                .start()
            animate()
        }
    }
})
var right=Vue.component("right",{
    template:`<div>
<ul class="con">
<li id="1">smarty1</li>
<li id="2">thinkphp1</li>
<li id="3">smarty2</li>
<li id="4">thinkphp2</li>
</ul>
</div>`
})
var login=Vue.component("login",{
    template:`<div>
    <header class="mui-bar mui-bar-nav">
    <span class="mui-icon mui-icon-undo" @click="back"></span>
			<h1 class="mui-title">登录</h1>
		</header>
		<div class="mui-content">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='name' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
			</form>
			<div class="mui-content-padded">
				<button id='login' class="mui-btn mui-btn-block mui-btn-primary" @click="login">登录</button>
				<div class="link-area"><a id='reg'>注册账号</a> <span class="spliter">|</span> <a id='forgetPassword'>忘记密码</a>
				</div>
			</div>
		</div>
		</div>
    `,
    methods:{
        back(){
            router.push("/");
        },
        login(){
            var obj={"name":document.getElementById("name").value}
            this.save("login",obj)
            router.push("/doc")
        }
    }
})