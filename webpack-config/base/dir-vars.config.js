var path = require('path');
var moduleExports = {};

//源文件目录

moduleExports.staticRootDir = path.resolve(__dirname, '../../'); // 项目根目录
moduleExports.srcRootDir = path.resolve(moduleExports.staticRootDir, './src'); // 项目业务代码根目录
moduleExports.pagesDir = path.resolve(moduleExports.srcRootDir, './views'); // 存放各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等
moduleExports.assetsDir = path.resolve(moduleExports.srcRootDir, './assets'); // 存放各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等

