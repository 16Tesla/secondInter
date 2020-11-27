var arr=[];


function insert(){//插入数据
    var get_num=document.getElementsByTagName("textarea")[0].value;
    var arr1=[];
    var len=arr.length;
    arr1=get_num.split(/[\n,，、\s]/g);//对字符串截断
    for(var i=0;i<arr1.length;i++){//将截断的字符串输入到数组中
        arr[len+i]=arr1[i];
    }
    render();
}
function search(){//搜索输入的数据
var se=document.getElementsByTagName("input")[0].value;
var text= eval("/"+se+"/g");
var text2="<span>"+se+"</span>";
alert(text);
var gettr=document.getElementsByTagName("tr");
for(var i=0;i<gettr.length;i++){
    var str=gettr[i].innerHTML.replace(text,text2);//将搜索到的数据进行替换
    gettr[i].innerHTML=str;//将替换的字符串写入元素中
}
}
function render(){//将数组中的数据输出
    var getdiv=document.getElementById("out");
    getdiv.innerHTML="";
    for(var i=0;i<arr.length;i++){//将数据显示到窗口
        var cdiv=document.createElement("tr");
        cdiv.innerHTML=arr[i];
        getdiv.appendChild(cdiv);
    }
}
