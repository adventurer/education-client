<template>
	<view class="bg-white">
		<pageHead title="课程详情"></pageHead>
		<view class="padding-xs flex">
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
		<view class="bg-white">
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
		<!-- <rich-text :text="'<h5>sfsdfs</h5>'"></rich-text> -->
		<view class="padding flex">
			<rich-text :nodes="strings"></rich-text>
		</view>
		
	</view>
</template>


<script>
	export default {
		data() {
		return {
				strings:`
				<div id="tab0">
            <div class="course-wrap-basic padding40-l-r">
                <span class="type-flag">实战课程</span>
                <!-- 砍价活动入口 start-->
                <div style="display: none" class="bargain-door js-bargain-enter" data-uid="">砍价省<span></span></div>
                <!-- 砍价活动入口 end -->
                
                <!-- 分销入口 start-->
                <div class="fenxiao-door js-fenxiao-enter" data-uid="" data-course-name="前端下一代开发语言TypeScript  从基础到axios实战">分享赚 <span>38.80</span> 元</div>
                <!-- 分销入口 end -->
                
                <p class="course-name">前端下一代开发语言TypeScript  从基础到axios实战</p>
                <div class="price-and-study clearfix">
                    <div class="price-box">
                        <p class="price-current">¥388.00</p>
                        
                    </div>
                    <div class="learn-box clearfix js-video-learn" data-src="https://v3.mukewang.com/shizhan/5cbeff85e520e5cf4b8b456b/H.mp4">
                        <span class="btn-txt">试看</span>
                        <i class="imwap-play_arrow"></i>
                    </div>
                </div>
            </div>
            <div class="course-wrap-general padding32-l-r">
                <div class="course-container">
                    
                    <div class="info-item clearfix sale-buy">
                        <span class="info-item-title">促销</span>
                        <div class="clearfix">
                            <span class="buy-type">花呗付款</span>
                            <span>已支持支付宝花呗付款</span>
                        </div>
                        <i class="imwap-more_horiz js-more-sale"></i>
                    </div>
                    
                    <div class="info-item clearfix">
                        <span class="info-item-title">参数</span>
                        <div>
                        
                            
                                
                                    
                                    <span>中级</span>
                                
                                    
                                    <span>·</span>
                                    
                                    <span>18小时</span>
                                
                                    
                                    <span>·</span>
                                    
                                    <span>813人学</span>
                                
                                    
                                    <span>·</span>
                                    
                                    <span>98.8% 好评度</span>
                                
                            
                        
                            
                        
                        </div>
                        <i class="imwap-more_horiz js-more-info"></i>
                    </div>
                    <div class="info-item clearfix hide" id="package_desc" style="display: block;">
                        <span class="info-item-title">套餐</span>
                        <div>
                            <span>套餐最高立省 ¥74，更多套餐有惊喜</span>
                        </div>
                        <i class="imwap-more_horiz js-more-package"></i>
                    </div>
                    
                    <div class="info-item clearfix">
                        <span class="info-item-title">服务</span>
                        <div class="clearfix">
                            
                                <span class="service-item clearfix">
                                    <img src="http://www.imooc.com/static/img/mobile/service_icons/sz_wd.png"><span>问答专区</span>
                                </span>
                            
                                <span class="service-item clearfix">
                                    <img src="http://www.imooc.com/static/img/mobile/service_icons/sz_ym.png"><span>源码开放</span>
                                </span>
                            
                                <span class="service-item clearfix">
                                    <img src="http://www.imooc.com/static/img/mobile/service_icons/sz_zs.png"><span>教辅材料</span>
                                </span>
                            
                                <span class="service-item clearfix">
                                    <img src="http://www.imooc.com/static/img/mobile/service_icons/sz_yd.png"><span>Git代码存储</span>
                                </span>
                            
                        </div>
                        <i class="imwap-more_horiz js-more-service"></i>
                    </div>
                    
                    
                    <div class="info-item clearfix">
                        <span class="info-item-title">日志</span>
                        <div>
                            <span>共1条日志，最近更新1条</span>
                        </div>
                        
                        <i class="imwap-more_horiz js-more-log"></i>
                        
                    </div>
                    
                </div>
            </div>
            
            <div class="pic-wrap">
                
                    <img src="http://img.mukewang.com/szimg/5cbf00e300017d7c07501440.jpg">
                
                    <img src="http://img.mukewang.com/szimg/5cbf00ed0001076707501280.jpg">
                
                    <img src="http://img.mukewang.com/szimg/5cbf00f50001f57007501592.jpg">
                
                    <img src="http://img.mukewang.com/szimg/5cbf00fd0001177e07501508.jpg">
                
                    <img src="http://img.mukewang.com/szimg/5cbf010700016c3d07501428.jpg">
                
                    <img src="http://img.mukewang.com/szimg/5cbf015d0001825207501540.jpg">
                
                    <img src="http://img.mukewang.com/szimg/5cbf01660001c5fa07501444.jpg">
                
            </div>
            
        </div>
				`
			}
		},
		methods: {
			
		}
	}
</script>

<style>
</style>
