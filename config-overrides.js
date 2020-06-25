const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', { //配置按需加载
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    // addLessLoader({
    //     javacsriptEnable:true,
    //     modifyVars:{
    //         '@primary-color':"#3DB389"
    //     }
    // })
);

