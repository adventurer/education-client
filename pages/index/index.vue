<template>
	<view>
		<home v-if="PageCur=='home'"></home>
		<community v-if="PageCur=='community'"></community>
		<basics v-if="PageCur=='basics'"></basics>
		<components v-if="PageCur=='component'"></components>
		<plugin v-if="PageCur=='plugin'"></plugin>
		
		<view class="cu-bar tabbar"></view>
		<!-- 下边栏开始 -->
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="home">
				<view class="action" v-bind:class="[PageCur=='home'? 'text-blue' : '']">
					<view class="cuIcon-homefill"></view> 首页
				</view>
			</view>
			<view class="action" @click="NavChange" data-cur="community">
				<view class="action" v-bind:class="[PageCur=='community'? 'text-blue' : '']">
					<view class="cuIcon-similar"></view> 社区
				</view>
			</view>
			<view class="action" @click="NavChange" data-cur="component">
				<view class="action text-gray add-action">
					<button class="cu-btn cuIcon-add bg-green shadow"></button>
					速记
				</view>
			</view>
			<view class="action" @click="NavChange" data-cur="basics">
				<view class="action text-gray">
					<view class="cuIcon-cart">
						<view class="cu-tag badge">99</view>
					</view>
					购物车
				</view>
			</view>
			<view class="action" @click="NavChange" data-cur="plugin">
				<view class="action text-gray">
					<view class="cuIcon-my">
						<view class="cu-tag badge"></view>
					</view>
					我的
				</view>
			</view>
		</view>
		<!-- 下边栏结束 -->
	</view>
	
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'home'
			}
		},
		methods: {
			NavChange: function(e) {
				console.log(e.currentTarget)
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
