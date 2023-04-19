####说明#####
1.画板demo是由三个canvas一起来实现的，canvas的上面还有一层edit div,这个div是所有输入文本框的container。
2.convas_bak是作为画板的蒙板，当抬笔的时候所画的内容会画到convas中，convas_img是最终点保存按钮后，会保存
  所有画的东西到这上面。
3.最终下载图片是下载convas_img中的位图。
4.要编辑的图片需要在点击时，先保存url到cookia中，然后再跳转到draw.html后获取cookia中的url.注意url不可以跨域，
  否则最后生成的图片不能下载，或者保存出错。
5.编辑图片可以根据图片的宽高动态设置所有convas和caontainer的的宽高，以避免图片最后变形

####结构####
| +css
|   | +draw
|   |   | -canvas.css ##画板样式跟布局
| +images
|   | +draw ##画板左边操作栏图标
|   | -2841_518137_641093.jpg ##测试图片
| +js
|   | -cookie.js ##操作cookie的方法都在这个文件中
|   | -draw.js ##手写和话文本框中文本时用
|   | -edit.js ##输入文本框的缩放，改变字体颜色、大小，画到convas中
|   | -jquery-1.11.0.min.js ##不多说
|   | -ui.js ##输入文本框的移动
| -draw.html ##画板demo
| -test.html ##测试图片，点击跳转到draw.html
| -README.txt

####调用样例####
请参考draw.html