//获取非行间样式
function getStyle(ele,attr){
    return ele.currentStyle ? ele.currentStyle[attr] : getComputedStyle(ele,null)[attr];
}

function move(ele,json,fn){      //json的接收  {width:10900}
    //清除定时器
    clearInterval(ele.timer);
    //开启定时器
    ele.timer = setInterval(function(){
        var mStop = true;
        //遍历json
        for(attr in json){
            //获取变换的属性的值
            var iCur = getStyle(ele,attr);
            //判断是否为透明
            if(attr == 'opacity'){
                iCur *= 100;
            }else{
                iCur = parseInt(iCur);
            }
            //设置速度
            var speed = (json[attr] - iCur) / 8;
            //速度取整
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            //判断
            if(iCur != json[attr]){
                mStop = false;
            }
            //运动的逻辑
            if(attr == 'opacity'){
                ele.style.opacity = (iCur + speed) / 100;
                ele.style.filter = 'alpha(opacity='+(iCur + speed)+')'
            }else{
                ele.style[attr] = iCur + speed + 'px';
            }
        }

        if(mStop){
            clearInterval(ele.timer);
            if(fn){
                fn();
            }
        }
    },30)
}
