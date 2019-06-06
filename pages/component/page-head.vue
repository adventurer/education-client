<template>
	<view class="cu-bar">
		<view class="action">
			<text class="cuIcon-back" @click="backTo()"></text>
			<fa-icon @click="backToHome()" type="home text-black margin-left" size="18"></fa-icon>
		</view>
		<view class="content text-bold text-xl">
			{{title}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			title: {
				type: String,
				default: ""
			}
		},
		onLoad: function() {

		},
		methods: {
			backTo(e) {
				uni.navigateBack({
					delta: 1
				});
			},
			backToHome(e){
				uni.navigateTo({
					url: '/pages/index/index'
				});
			}
		}
	}
</script>

<style>
</style>