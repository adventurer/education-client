<template>
	<view class="cu-bar">
		<view class="action">
			<text class="cuIcon-back" @click="backTo()"></text>
			<text @click="backTo()">返回</text>
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
			}
		}
	}
</script>

<style>
</style>