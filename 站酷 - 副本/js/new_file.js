
//var 	 
//	oMenus = document.querySelector('.menus'),
//	oA2 = document.querySelector('.a2');
//	oA2.onmouseover = function(){
//		this.firstElementChild.style.display = "block";
//	}







//轮播图
	var oSpan = document.querySelectorAll('span'),
		oBox = document.querySelector('.box'),
		oImg =oBox.getElementsByTagName('img'),		 
		oscetion = document.querySelector('.asia'),		 
		count = 0,		
		timer = null,
		yidong = oImg[0].offsetWidth;	
		//克隆第一张图片  放在最后
	var clone = oImg[0].cloneNode();				
		oBox.appendChild(clone);		
		oBox.style.width = oImg.length * yidong  + 'px';
		
 	//调用  运动
	function toImg(){
		move(oBox,{'left':-count * yidong});
	}
		//上一张图片
	  function next(){
		if(count >= oImg.length - 1){
			oBox.style.left = 0;
			 count = 1;
		}else{
			count++;
		}
		toImg();		 		  
	}
		//下一张图片
	function pre(){
		if(count <= 0){
			oBox.style.left = -(oImg.length - 1) * 800 + 'px' ;
			count = oImg.length - 2;
		}else{
			count--;
		}
		toImg();		   
	}	 
	//
	oSpan[1].onclick = function(){
		next();			 
	}
	oSpan[0].onclick = function(){
		pre();			 
	}
	//定时器	 
	function autogo(){ 
		 timer = setInterval(()=>{
			 next();
		},3000)
	}	 	
	autogo();	var oli = document.querySelectorAll('.oul li');		 
	for(var i = 0; i < oli.length ; i++){
			oli[i].onmouseover = function(){
		    this.style.background = '#282828';	     
		}
	}
	for(var i = 0; i < oli.length ; i++){
		oli[i].onmouseout = function(){
	    this.style.cssText = "background-color:#ffe300;"	    	      
		}
	}	
	
	
	//吸顶效果
	var conTop = document.querySelector('.con');
	  window.onscroll = function(){
        //检测滚动条的高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop >= 610){
            //更改 conTop的样式。          
            conTop.style.cssText = "position:fixed;top:0;";
        }else{
            conTop.style.position = "static";
        }
    }
	  
	 //商品信息
	 var commodity = [
	 	{
	 		img :"https://img.zcool.cn/community/01d08e5cd54c69a801208f8b6d8b0c.jpg",
	 		p1 : "西萌宝宝SIMONBABY万象",
	 		p2 : "工业/产品-玩具"
	 	},
	 	{
	 		img :"https://img.zcool.cn/community/012d545cd52b4ba8012141687b9e85.jpg",
	 		p1 : "自然造物·大过端午·2019",
	 		p2 : "工业/产品-礼品/纪念品"
	 	},
	 	{
	 		img :"https://img.zcool.cn/community/0104a85cd524a0a8012141688c0d7d.jpg",
	 		p1 : "Mclaren 720s-CGI WORK",
	 		p2 : "三维-机械/交通"
	 	},
	 	{
	 		img :"https://img.zcool.cn/community/01c34e5cd5042aa80121416868417a.jpg",
	 		p1 : "沙漠中的绿洲",
	 		p2 : "插画-绘本"
	 	},
	 	{
	 		img :"https://img.zcool.cn/community/015bbb5cd5068fa801214168d1965a.jpg",
	 		p1 : "母亲节，设计速成指南",
	 		p2 : "特别企划"
	 	},{
	 		img :"https://img.zcool.cn/community/0178e55cd4e3d2a801214168004752.jpg",
	 		p1 : "母亲节，设计速成指南",
	 		p2 : "文章-观点-多领域"
	 	},{
	 		img :"https://img.zcool.cn/community/012ed15cd4e04ca801214168bc5a5b.jpg",
	 		p1 : "一路有你",
	 		p2 : "摄影-人像"
	 	},{
	 		img :"https://img.zcool.cn/community/0314c595cd4da4ea801208f8b99629f.jpg",
	 		p1 : "2019\记梦系列",
	 		p2 : "插画-其他插画"
	 	},{
	 		img :"https://img.zcool.cn/community/014fb35cd4d682a801214168e8abdf.jpg",
	 		p1 : "72人共创的ABCDEFG…",
	 		p2 : "插画-涂鸦/潮流"
	 	},{
	 		img :"https://img.zcool.cn/community/01123e5cd446a2a801208f8bdafc1d.jpg",
	 		p1 : "最近给《王者荣耀》画的",
	 		p2 : "插画-商业插画"
	 	},{
	 		img :"https://img.zcool.cn/community/03124105cd4d570a8012141680a23f5.jpg",
	 		p1 : "炼金术主题fashion印花图案",
	 		p2 : "服装-面料/印花"
	 	},{
	 		img :"https://img.zcool.cn/community/01d6475cd54647a801214168d490d0.jpg",
	 		p1 : "梅兰竹菊",
	 		p2 : "插画-其他插画"
	 	},{
	 		img :"https://img.zcool.cn/community/0117b35cd4e9f7a801208f8b33bf9f.jpg ",
	 		p1 : "插画一百/重启未知",
	 		p2 : "插画-其他插画"
	 	},{
	 		img :"https://img.zcool.cn/community/01e5275cd40662a801214168aa3512.jpg ",
	 		p1 : "雪山星空",
	 		p2 : "摄影-风光"
	 	},{
	 		img :"https://img.zcool.cn/community/01d7a15cd3db7aa801208f8bfd7f3a.jpg ",//我顶我顶我
	 		p1 : "站酷十三周年生日贺图",
	 		p2 : "插画-商业插画"
	 	},{
	 		img :"https://img.zcool.cn/community/01482b5cd41e5da801208f8b82e068.jpg  ",
	 		p1 : "李宁 I 少不入川",
	 		p2 : "服装-运动服饰"
	 	},{
	 		img :"https://img.zcool.cn/community/activity_cover/7b295ccff7d7000001739895c4d2.jpg ",
	 		p1 : "PLAYDRAW X BOUNCE ",
	 		p2 : "手工艺-手办/原型"
	 	},{
	 		img :"https://img.zcool.cn/community/012bb75cd41a30a8012141688003a6.jpg ",
	 		p1 : "《窗子里的人》绘本",
	 		p2 : "插画-绘本"
	 	},{
	 		img :"https://img.zcool.cn/community/01b7285cd3d44ca801208f8bf8f5a5.jpg ",
	 		p1 : "The Balloop System ",
	 		p2 : "平面-其他平面"
	 	},{
	 		img :"https://img.zcool.cn/community/01dda35cd3d442a801214168346b42.jpg ",
	 		p1 : "加入叶锦添·一起绘",
	 		p2 : "活动-线上活动"
	 	}
	 ]
	 //创建空字符串 
	 var productStr = "";
	 //获取
	 var oBox2 = document.querySelector('.constant');
	 for(var i = 0; i < commodity.length; i++){
	 	productStr += `
	 		<div class="content">
		 		<a><img src="${commodity[i].img}"/></a>		 		
		 		<p class="p1">${commodity[i].p1}</p>
		 		<p class="p2">${commodity[i].p2}</p>
		 		<h2>
		 			<img src="img/images/4太他_03.gif" class="aimg"/>
		 		</h2>
		 		<h3>
		 			 <img src="img/images/index的SD_03.gif"/>
		 		</h3>
		 	</div> 	
	 	`
	 	oBox2.innerHTML = productStr;
	 }
	 
	 //返回顶部
	 var toptop = document.querySelector('.playe');
		function goTop(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var timer = setInterval(function(){
			scrollTop-=30;
			document.documentElement.scrollTop = document.body.scrollTop = scrollTop;
			if(scrollTop <= 0){
				clearInterval(timer);
			}
		},0)		 
		}
	  toptop.onclick = function(){
	 	goTop();
	 }
	  
	var one = document.querySelectorAll('.batt li');
	for(var i = 0; i < one.length; i++){
			one[i].onmouseover = function(){
		    this.style.background = '#ffe300';	     
		}
	}
	for(var i =1; i < one.length ; i++){
		one[i].onmouseout = function(){
	    this.style.background = "#fff";    	      
		}
	}	