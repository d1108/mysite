var galleryFeed=new InstaFeed({
	get:"user",
	userId:6151422724,
	resolution:"standard_resolution",
	useHttp:"true",
	limit:6,
	template:'<img src="{{image}}" class="img-responsive">',
	target:"instafeed_gallery",

});
galleryFeed.run();