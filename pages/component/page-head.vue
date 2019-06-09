<template>
	<view class="">
		<view class="cu-bar fixed bg-white">
			<view class="action">
				<text class="cuIcon-back" @click="backTo()"></text>
				<fa-icon @click="backToHome()" type="home text-black margin-left" size="18"></fa-icon>
			</view>
			<view class="content text-bold text-black text-xl">
				{{title}}
			</view>
		</view>
		<view class="cu-bar">
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
					delta: 1,
					animationType: 'pop-out',
				});
			},
			backToHome(e){
				uni.navigateBack({
					delta: 300,
					animationType: 'pop-out',
				});
			}
		}
	}
</script>

<style>
</style>