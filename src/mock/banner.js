import Mock from 'mockjs'

Mock.mock('/api/banner', 'get', {
	code: 0,
	msg: '',
	data: [{
			id: "1",
			midImg: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1062551846,664581458&fm=26&gp=0.jpg",
			bigImg: "https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/7a899e510fb30f243d6dbf5bca95d143ac4b03f6.jpg",
			title: "",
			description: "偶尔不开心的时候，就当作是开心在加载中。"
		},
		{
			id: "2",
			midImg: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2713277362,3119785957&fm=26&gp=0.jpg",
			bigImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.dnzhuti.com%2Fuploads%2Fallimg%2F180131%2F95-1P131151I3.jpg&refer=http%3A%2F%2Fwww.dnzhuti.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619329697&t=b598d5315f720a5441594e93f0b2fa6e",
			title: "",
			description: "人活一生，值得爱的东西很多。",
		},
		{
			id: "3",
			midImg: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2775826943,2757723079&fm=26&gp=0.jpg",
			bigImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdik.img.kttpdq.com%2Fpic%2F40%2F27946%2F4973344da8550a08.jpg&refer=http%3A%2F%2Fdik.img.kttpdq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619329752&t=3279c8d31d39e13304deb15308a32e9b",
			title: "",
			description: "慢慢变好才是给自己最好的礼物。",
		},
	]
})
