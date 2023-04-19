const string = `
.skin {
  height:100%;
  background-color: rgb(255, 213, 28);
  position: relative;
}

/* 眼睛 */
.eye {
  width: 50px;
  height: 50px;
  background-color: rgb(54, 54, 54);
  border-radius: 50%;
  border: 1px solid black;
  position: absolute;
  top: 80px;
  right: 50%;
  margin-right: -25px;
}
.eye.left {
  transform: translateX(-100px);
}
.eye.right {
  transform: translateX(100px);
}
.eye::before {
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 50%;
  position: relative;
  top: 2px;
  left: 8px;
}

/* 鼻子 */
.nose {
  width: 0px;
  height: 0px;
  border: 10px solid rgb(0, 0, 0);
  border-bottom: none;
  border-color: black transparent transparent;
  position: absolute;
  left: 50%;
  top: 120px;
  margin-left: -10px;
  z-index: 100;
}

.nose .yuanhu {
  width: 20px;
  height: 5px;
  background-color: rgb(0, 0, 0);
  position: relative;
  top: -15px;
  left: -10px;
  border-radius: 10px 10px 0 0 ;
}

.mouth .lip {
  border: 4px solid rgb(0, 0, 0);
  width: 90px;
  height: 26px;
  border-top: none;
  position: absolute;
  background-color: rgb(255, 213, 28);
  z-index: 10;
}
.mouth .left{
  border-radius: 0 0 0 50px;
  border-right: none;
  transform: rotate(-15deg);
}
.mouth .right{
  border-radius: 0 0 50px 0;
  border-left: none;
  transform: rotate(15deg);
  right: 0;
}
.mouth .mouth-down {
  width: 100%;
  height: 180px;
  position: absolute;
  top: 8px;
  overflow: hidden;
}
.mouth .mouth-down .yuan1{
  width: 150px;
  height: 1000px;
  background-color: rgb(158, 39, 39);
  border: 3px solid black;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 15px;
  border-radius: 75px/300px;
  overflow: hidden;
}
.mouth .mouth-down .yuan2{
  width: 200px;
  height: 200px;
  background-color: rgb(255, 108, 108);
  position: absolute;
  bottom: -50px;
  left: 50%;
  margin-left: -100px;
  border-radius: 100px;
}

/* 脸部 */
.skin .face{
  width: 80px;
  height: 80px;
  border: 3px solid black;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  top: 200px;
  left: 50%;
  margin-left: -40px;
}

.skin .face-left {
  transform: translateX(-140px);
}
.skin .face-right {
  transform: translateX(140px);
}

.face img {
  display: block;
}

/* 有本事点我鼻子上试试 */
`

export default string