# 使用方法

0. 安装 node-dev
    `yarn global add node-dev`
1. 进入 qq-com 运行 server.js
    `cd kuayu-1/qq-com; node-dev server.js 8888`
2. 进入 frank-com 运行 server.js
    `cd ../frank-com; node-dev server.js 9999`
3. 设置 hosts
    ```
    127.0.0.1 qq.com
    127.0.0.1 znn.com
    ```
    注意修改跨域白名单，不一定一定是znn.com
4. 打开两个页面 qq.com:8888/index.html 和 znn.com:9999/index.html
5. 记得做完之后，删掉 hosts 里的两行，否则 qq.com 无法正常访问！
