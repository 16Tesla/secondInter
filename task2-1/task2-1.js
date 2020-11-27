var arr=[];
function le_in(){//左侧输入
    var get_num=document.getElementsByTagName("input")[0].value;//取输入的值

    if(arr.length==0){//判断数组是否为空
        arr[0]=get_num;
    }
    else{
        for(var i=arr.length;i>0;i--){//若数组不为空，则将数组元素向后移
        arr[i]=arr[i-1];
        }
        arr[0]=get_num;
    }   
    render();
}
function ri_in(){//右侧输入
    var get_num=document.getElementsByTagName("input")[0].value;
    var len=arr.length;
    arr[len]=get_num;//直接在后面插入数据
    render();
}
function le_del(){//左侧删除
    arr.splice(0,1);//将数组第一个数据删去
    render();
}
function ri_del(){//右侧删除
    var len=arr.length-1;
    arr.splice(len,1);//将最后一个数据删去
    render();
}
function render(){//将数组中的数据输出
    var getdiv=document.getElementById("out");
    getdiv.innerHTML="";
    for(var i=0;i<arr.length;i++){
        var cdiv=document.createElement("tr");
        cdiv.innerHTML=arr[i];
        getdiv.appendChild(cdiv);
    }
}
