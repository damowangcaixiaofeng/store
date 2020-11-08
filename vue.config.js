//文件路径配置，导出和公共的配置合并
module.exports={
     
   configureWebpack:{
    resolve:{
        alias: {
            'assets':'@/assets',
            'common':'@/common',
            'components':'@/components',
            'network':'@/network',
            'views':'@/views',
            'store':'@/store',
            'until':'@/until'
        }

    }
   }
}