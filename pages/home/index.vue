<template>
	<view>
		
		<view class="cu-bar fixed bg-gray">
			<view class="flex-treble text-center padding-lg">
				<view class="text-xl margin-bottom-sm">
					<text class="text-black text-bold">猿职网</text>
				</view>
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input @click="toSearchPage()" type="text" placeholder="搜索图片、文章、视频" confirm-type="search" disabled="true"></input>
				</view>
			</view>
		</view>
		<view class="tm"></view>
		
		<view>
			<!-- #ifndef MP-ALIPAY -->
			<swiper @click="toDetailPage()" class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
			 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
			 indicator-active-color="#0081ff">
				<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
					<view class="swiper-item">
						<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
						<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
					</view>
				</swiper-item>
			</swiper>
			<!-- #endif -->
		</view>
		<scroll-view scroll-x class="bg-blue nav text-center">
			<view class="cu-item" :class="0==TabCur?'text-white cur':''" @tap="tabSelect" data-id="0">
				<text class="solid-bottom text-xl">java</text>
			</view>
			
		</scroll-view>
		
		<!-- 列表开始 -->
		<view class="cu-list menu-avatar">
			<view class="cu-item">
				<view class="cu-avatar ll" style="background-image:url(http://localhost:8080/h5/static/ke.jpg);"></view>
				<view class="content">
					<view class="text-black">凯尔</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
						</view> 
					</view>
				</view>
			</view>
		</view>
		<!-- 列表结束 -->
		<view class="flex  p-xs margin-bottom-sm mb-sm">
			<view class="flex-sub bg-white padding-sm margin-xs radius text-center">上一页</view>
			<view class="flex-twice bg-white padding-sm margin-xs radius text-center">共232页，当前第11页</view>
			<view class="flex-sub bg-white padding-sm margin-xs radius text-center">下一页</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardCur: 0,
				TabCur: 0,
				scrollLeft: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}],
				dotStyle: false,
				towerStart: 0,
				direction: ''
			};
		},
		onLoad() {
			// this.TowerSwiper('swiperList');
			// 初始化towerSwiper 传已有的数组名即可
		},
		methods: {
			toSearchPage(e){
				uni.navigateTo({url: '/pages/search/index'})	
			},
			toDetailPage(e){
				uni.navigateTo({url: '/pages/detail/index'})	
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			}
		}
	}
</script>

<style>
	.tower-swiper .tower-item {
		transform: scale(calc(0.5 + var(--index) / 10));
		margin-left: calc(var(--left) * 100upx - 150upx);
		z-index: var(--index);
	}
	
	.tm{
		margin-top: 200upx;
	}
	
	.img {
        width: 160upx;
        height: 100upx;
    }
	
	cover-image {
        display: inline-block;
    }
</style>