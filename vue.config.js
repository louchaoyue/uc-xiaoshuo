const path =require("path");
module.exports={
  devServer:{
    open:true,
    proxy:{
      "/abc":{
        target:"http://read.xiaoshuo1-sm.com",
        changeOrigin:true,
        pathRewrite:{
          "^/abc":""
        }
      },

    "/bcd":{
      target:"http://content.shuqireader.com",
      changeOrigin:true,
      pathRewrite:{
        "^/bcd":""
      }
  }
  }

},
configureWebpack:{
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"./src/"),
      "common":path.resolve(__dirname,"./src/common"),
      "components":path.resolve(__dirname,"./src/components"),
      "router":path.resolve(__dirname,"./src/router"),
      "store":path.resolve(__dirname,"./src/store"),
      "utils":path.resolve(__dirname,"./src/utils"),
      "views":path.resolve(__dirname,"./src/views"),
      "api":path.resolve(__dirname,"./src/api")
    }
  }
}
}
