/*场景Scene01文件*/

//加载全局配置
import G from './gloable.js';



// 场景scene01类
export default function Scene01(){
	this.pics = { 
		bg: G.queue.getResult('scene01bg'),
		girl: G.queue.getResult('girl'),
		girlrole: G.queue.getResult('girlrole'),
		fern01: G.queue.getResult('fern01'),
		fern02: G.queue.getResult('fern02'),
		fern03: G.queue.getResult('fern03'),
		fern04: G.queue.getResult('fern04'),
		fern05: G.queue.getResult('fern05'),
		fern06: G.queue.getResult('fern06'),
		fern07: G.queue.getResult('fern07'),
		fern08: G.queue.getResult('fern08'),
		fern09: G.queue.getResult('fern09')
	}

	this.ferns = [];

	this._init();
}

Scene01.prototype._init = function(){
	//设置当前场景锁值为 1
	G.sceneLock = 1;

	const girlrole = this.pics.girlrole;
	const girlRollSprite = new G.ctj.SpriteSheet({
						images:[girlrole],
						frames:{
							width:545,
							height:515,
							count:3
						},
						animations:{
							 roll: {
					            frames: [0,1,2]
					        }
						}
					});
	
	//女孩晃动动画
	this.girlAnimation = new G.ctj.Sprite(girlRollSprite,"roll");

	//添加背景到场景container容器
	this.container = new G.ctj.Container();
	this.container.addChild(new G.ctj.Bitmap(this.pics.bg));

	//添加女孩到场景container容器
	this.girl = new G.ctj.Bitmap(this.pics.girl);
	this.girl.x = 100;
	this.girl.y = 450;
	this.container.addChild(this.girl);

	//添加女孩晃动动画到场景container容器
	this.girlAnimation.x = 100;
	this.girlAnimation.y = 450;
	this.container.addChild(this.girlAnimation);

	//蕨类
	const fernArr = [
		{fernKey:this.pics.fern01,x:0,y:790,w:106,h:429,rotation01:-2,rotation02:2,time:2000},
		{fernKey:this.pics.fern02,x:80,y:750,w:110,h:269,rotation01:-3,rotation02:3,time:1000},
		{fernKey:this.pics.fern03,x:70,y:930,w:362,h:472,rotation01:2,rotation02:-2,time:1500},
		{fernKey:this.pics.fern04,x:145,y:1010,w:148,h:421,rotation01:-2,rotation02:2,time:1000},
		{fernKey:this.pics.fern05,x:0,y:860,w:224,h:545,rotation01:-2,rotation02:2,time:1200},
		{fernKey:this.pics.fern06,x:130,y:1120,w:119,h:282,rotation01:-2,rotation02:2,time:1000},
		{fernKey:this.pics.fern07,x:260,y:1265,w:83,h:172,rotation01:5,rotation02:5,time:700},
		{fernKey:this.pics.fern08,x:220,y:1080,w:133,h:328,rotation01:-3,rotation02:3,time:1000},
		{fernKey:this.pics.fern09,x:635,y:1090,w:135,h:224,rotation01:-1,rotation02:1,time:1200}
	];


	fernArr.forEach((item,v)=>{
		const fern = new G.ctj.Bitmap(item.fernKey);
		
		fern.x = item.x;
		fern.y = item.y + item.h;
		fern.regY = item.h;
		fern.rotation = 0;
		//添加摆动动画
		G.ctj.Tween.get(fern,{loop:true},true)
		.to({rotation:item.rotation01},item.time,G.ctj.Ease.linear)
		.to({rotation:0},item.time,G.ctj.Ease.linear)
		.to({rotation:item.rotation02},item.time,G.ctj.Ease.linear)
		.to({rotation:0},item.time,G.ctj.Ease.linear);
		this.ferns.push(fern);
		this.container.addChild(fern);
	});


	//添加场景container容器到舞台
	G.stage.addChild(this.container);
}