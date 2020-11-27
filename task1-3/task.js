/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
var city=document.getElementById("aqi-city-input").value;
var number=document.getElementById("aqi-value-input").value;
var a=/^[A-Za-z\u4E00-\u9FA5]+$/;//使用正则表达式
var b=/^\d+$/;
if(city.match(a)){         //是否输入中英文字符
  if(number.match(b)){       //是否输入数字
    aqiData[city]=number; 
    console.log(number);
    console.log(aqiData[city]);
  }
  else{
    alert("请输入数字！");
  }
}
else{
  alert("请输入中英字符");
}
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
var gettable=document.getElementById("aqi-table");
gettable.innerHTML="";

for(var city in aqiData){
var ctr=document.createElement("tr");
var ctd1=document.createElement("td");
var ctd2=document.createElement("td");
var cbtn=document.createElement("button");
var text1=document.createTextNode(city);
var text2=document.createTextNode(aqiData[city]);
var text3=document.createTextNode("删除");
cbtn.setAttribute("onclick","delBtnHandle(this)");//在button中写入onclick方法
ctd1.appendChild(text1); 
ctd2.appendChild(text2); 
cbtn.appendChild(text3);
ctr.appendChild(ctd1); 
ctr.appendChild(ctd2);
ctr.appendChild(cbtn); 
gettable.appendChild(ctr);
}

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(gthis) {
  // do sth.
  var city=gthis.parentElement.firstElementChild.firstChild.nodeValue;
    delete aqiData[city];
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
var aclick=document.getElementById("add-btn");
aclick.onclick=function(){ 

  addBtnHandle();
}

}
window.onload=function(){
 init(); 
}
