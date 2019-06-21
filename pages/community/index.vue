<template>
	<view class="">
		
		<view class="" style="position: fixed;top: 0;z-index: 999;">
			<view v-if="BlackHead==true" class="bg-white" style="height: 80upx;"></view>
			<view v-if="BlackHead==false" class="bg-white" style="height: 40upx;"></view>
			<view class="flex bg-white padding-sm">
				<view class="flex-sub">
					<text class="text-xxl text-bold text-bold">头条</text>
					<text class="text-xl margin-left-lg">关注</text>
				</view>
				<view class="flex-twice text-xxl">
					<text class="lg nav-btn text-gray cuIcon-search"></text>
					<text class="nav-btn text-gray cuIcon-mail margin-left-xs"></text>
				</view>
			</view>
			<view class="flex bg-white">
				<scroll-view scroll-x class="nav" scroll-with-animation :scroll-left="scrollLeft">
					<view class="cu-item text-bold" :class="index==TabCur?'text-black cur':''" v-for="(item,index) in 10" :key="index" @tap="tabSelect" :data-id="index">
						Tab{{index}}
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="bg-img bg-mask flex align-center margin-xs radius" :class="BlackHead?'mtop-x':'mtop'" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');height: 414upx;">
			<view class="padding-xl text-white">
				<view class="padding-xs text-xxl text-bold">
					钢铁之翼
				</view>
				<view class="padding-xs text-lg">
					Only the guilty need fear me.
				</view>
			</view>
		</view>
		<view class="cu-card article no-card padding-xs">
			<view class="cu-item shadow">
				<view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view>
				<view class="content">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
					 mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
						<view>
							<view class="cu-tag bg-red light sm round">正义天使</view>
							<view class="cu-tag bg-green light sm round">史诗</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-card article no-card padding-xs">
			<view class="cu-item shadow">
				<view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view>
				<view class="content">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
					 mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
						<view>
							<view class="cu-tag bg-red light sm round">正义天使</view>
							<view class="cu-tag bg-green light sm round">史诗</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-card article no-card padding-xs">
			<view class="cu-item shadow">
				<view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view>
				<view class="content">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
					 mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
						<view>
							<view class="cu-tag bg-red light sm round">正义天使</view>
							<view class="cu-tag bg-green light sm round">史诗</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-card article no-card padding-xs">
			<view class="cu-item shadow">
				<view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view>
				<view class="content">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
					 mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
						<view>
							<view class="cu-tag bg-red light sm round">正义天使</view>
							<view class="cu-tag bg-green light sm round">史诗</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				BlackHead:this.BlackHead
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
			}
		}
	}
</script>

<style>
	.mtop-x{
		margin-top: 280upx
	}
	
	.mtop{
		margin-top: 280upx
	}
</style>
