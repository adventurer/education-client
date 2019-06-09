<template>
	<view class="">
		<pageHead title="课程详情"></pageHead>
		
		<view class="bg-white padding-xs flex">
			<view class="flex-sub">
				<view class="text-xl padding">
					<text class="text-black text-bold">基于TypeScript从零重构axios</text>
				</view>
				<view class="">
					<fa-icon type="play-circle text-primary margin-left" size="24"></fa-icon>
					<text class="text-blue text-xxl">试看</text>
				</view>
				<view class="padding">从零开始重构一个功能完整的JS库，并进行单元测试与部署发布，是学习造轮子的不二之选</view>
			</view>
		</view>
		
		<view class="bg-white margin-top-xs">
			<view class="cu-card article">
				<view class="cu-item">
					
					<view class="flex justify-start bg-gray solid-bottom">
						<view class="padding-sm margin-xs">参数</view>
						<view class="padding-sm margin-xs">startstartstartstartstart</view>
					</view>
					<view class="flex justify-start bg-gray solid-bottom">
						<view class="padding-sm margin-xs">套餐</view>
						<view class="padding-sm margin-xs">startstartstartstartstart</view>
					</view>
					<view class="flex justify-start bg-gray solid-bottom">
						<view class="padding-sm margin-xs">服务</view>
						<view class="padding-sm margin-xs">startstartstartstartstart</view>
					</view>
					
				</view>
			</view>
		</view>
		<!-- 富文本 -->
		<view class="padding flex margin-top-xs bg-white">
			<rich-text :nodes="strings"></rich-text>
		</view>
		
		<!-- 评价 -->
		<view class="margin-top-xs bg-white">
			<view class="padding flex solid-bottom">
				<view class="flex-sub">
					<view class="text-black fl">评价</view>
					<view class="text-blue fr">更多</view>
				</view>
			</view>
			<view class="padding flex">
				<view class="flex-sub">
					<view class="text-black text-center">
						<text class="text-red text-xxl">9.08</text>
					</view>
				</view>
				<view class="flex-sub">
					<view class="text-black">内容实用</view>
					<view class="text-yellow">9.01</view>
				</view>
				<view class="flex-sub">
					<view class="text-black">通俗易懂</view>
					<view class="text-yellow">9.01</view>
				</view>
				<view class="flex-sub">
					<view class="text-black">逻辑清晰</view>
					<view class="text-yellow">9.01</view>
				</view>
			</view>
			<view class="padding flex">
				<view class="flex-sub">
					<view class="text-black fl">
						<view class="cu-avatar round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></view>
						<text class="margin-left">wuyang</text>
					</view>
					<view class="text-black fr">
						<view class="fr">
							<text class="">2019-06-03</text>
						</view>
						<view class="">
							<text class="fr">05:30</text>
						</view>
					</view>
				</view>
			</view>
			<view class="padding-xl flex">
				逻辑清晰逻辑清晰逻辑清晰逻辑清晰逻辑清晰逻辑清晰逻辑清晰
			</view>
		</view>
		
		
		
	</view>
</template>


<script>
	export default {
		data() {
		return {
				strings:`
				<h1>详情页面富文本</h1>
				`
			}
		},
		methods: {
			
		}
	}
</script>

<style>
</style>
