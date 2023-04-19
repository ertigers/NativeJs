# demos
皮卡丘的css制作，主要涉及到定位，布局，css3动画,代码优化。

# 开发环境-启动项目
parcel src/index.html

# 删除dist
rm -rf dist

# build
parcel build src/index.html --no-minify

# 修改dist里面index文件引入的根目录
parcel build src/index.html --no-minify --public-url ./

