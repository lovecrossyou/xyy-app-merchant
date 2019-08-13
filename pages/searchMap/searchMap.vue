<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map id="map" @regionchange="onMapChange" show-location style="width: 750upx; height: 300px;" :latitude="latitude" :longitude="longitude"
				 :controls="controls">
				</map>
			</view>
		</view>
	</view>
</template>

<script>
	import api from '@/util/api.js'
	
	export default {
		data() {
			return {
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				controls: [],
				mapContext:null
			}
		},
		onLoad() {
			this.initControls();
			this.initMapContext();
		},
		methods: {
			initControls(){
				try {
				    const res = uni.getSystemInfoSync();
				    console.log(res.windowWidth);
					this.controls = [{
						id:'1',
						position:{
							left:(res.windowWidth - 40)/2,
							top:(300-40)/2,
							width:40,
							height:40
						},
						iconPath:"../../static/map/location.png"
					}]
				} catch (e) {
				    // error
				}
			},
			initMapContext() {
				this.mapContext = uni.createMapContext("map", this);
			},
			async search(res){
				// console.log('res ', res);
				const {latitude,longitude} = res;
				const pois = api.searchPois(latitude,longitude);
				console.log('pois ## ', pois);
			},
			onMapChange(e) {				
				if (e.type === 'end') {
					let that = this;
					this.mapContext.getCenterLocation({
						success(res) {
							that.search(res);
						}
					});
					
				}
			}
		}
	}
</script>

<style>

</style>
