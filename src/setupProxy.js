var proxy=require("http-proxy-middleware")
module.exports=function(app){
	app.use(proxy("/Service",{
		target:"http://m.mtime.cn",
		host:"m.mtime.cn",
		changeOrigin:true
	}))
}