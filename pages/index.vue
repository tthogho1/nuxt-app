<template>
  <section class="container">
  	<h1>{{title}}</h1>
  	<p>{{message}}</p>
  	<hr>
  	<router-link to="/other">Go to Other</router-link>
  	<pre>{{now}}</pre>
  	<p>{{$store.state.message}}</p>
	<div class="link"
		@click="$store.commit({type:'count',message:'add 5!',add:5})"
		@click.ctrl="$store.commit('reset')">
		<a>
			clicked:{{$store.state.counter}}
		</a>
	</div>
	<hr>
	<div class="link2"
		@click="$store.dispatch('doit')">CLICK RANDOM
	</div>

  </section>
</template>

<script>
export default{
	data:function(){
		return{
			title:'Hello',
			message:'this is message.',
			now: 'wait...',
		};
	},
	methods:{
		doAction: function(){
			this.$store.state.counter++;
		}
	},
	created : function(){
		setInterval(()=>{
			var d = new Date();
			this.now = d.getHours()
				+ ':' + d.getMinutes()
				+ ':' + d.getSeconds();
		},1000);
	},
};
</script>
<style>
.container {
	padding:5px 10px;
}
h1 {
	font-size : 60pt;
	color: #345980;
}
p{
	padding-top:5px;
	font-size:20pt;
}
pre {
	padding: 10px;
	font-size:10pt;
	background-color:#efefef;
}
hr {
	margin:10px 0px;
}
.link{
	background-color:#def;
	padding:10px;
}
.link2{
	background-color:#efefef;
	padding:10px;
}
</style>
