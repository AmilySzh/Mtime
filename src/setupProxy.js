var proxy=require("http-proxy-middleware")
module.exports=function(app){
	app.use(proxy("/Service",{
		target:"http://m.mtime.cn",
		host:"m.mtime.cn",
		changeOrigin:true
	}));
	app.use(proxy("/api",{
		target:"https://ticket-m.mtime.cn",
		host:"ticket-m.mtime.cn",
		changeOrigin:true
	}));
	app.use(proxy("/cinema",{
		target:"https://ticket-api-m.mtime.cn",
		host:"ticket-api-m.mtime.cn",
		changeOrigin:true
	}))
}