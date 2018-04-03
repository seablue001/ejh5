/*资源加载文件*/

//加载全局配置
import G from './gloable.js';

// import loadQueue from './config/loadqueue.json';


// 加载类
export default function Load(){
	this.container = {};
	this.queue = {};
	this.htmlDom = document.querySelector('#progress');
	this.progress = '0%';

	//添加背景到舞台
	this.container = new G.ctj.Container();

	this.queue = new G.ctj.LoadQueue();
	G.queue = this.queue;
	const path = require('path');
	this.queue.loadManifest([
		//声音素材
		/*{id:"music",src:path.resolve(__dirname,'static')+'/media/music.mp3'},
		{id:"cry",src:path.resolve(__dirname,'static')+'/media/cry.mp3'},
		{id:"btn",src:path.resolve(__dirname,'static')+'/media/btn.mp3'},*/

		//图像素材
		{id:'loadbg',src:path.resolve(__dirname,'static')+'/images/load_bg.jpg'},
		{id:'scene01bg',src:path.resolve(__dirname,'static')+'/images/scene01_bg.jpg'},
		{id:'girl',src:path.resolve(__dirname,'static')+'/images/girl.png'},
		{id:'girlrole',src:path.resolve(__dirname,'static')+'/images/girl_role.png'},
		{id:'fern01',src:path.resolve(__dirname,'static')+'/images/fern_01.png'},
		{id:'fern02',src:path.resolve(__dirname,'static')+'/images/fern_02.png'},
		{id:'fern03',src:path.resolve(__dirname,'static')+'/images/fern_03.png'},
		{id:'fern04',src:path.resolve(__dirname,'static')+'/images/fern_04.png'},
		{id:'fern05',src:path.resolve(__dirname,'static')+'/images/fern_05.png'},
		{id:'fern06',src:path.resolve(__dirname,'static')+'/images/fern_06.png'},
		{id:'fern07',src:path.resolve(__dirname,'static')+'/images/fern_07.png'},
		{id:'fern08',src:path.resolve(__dirname,'static')+'/images/fern_08.png'},
		{id:'fern09',src:path.resolve(__dirname,'static')+'/images/fern_09.png'}


	]);
	// this.queue.loadManifest(loadQueue);

	
	//资源加载进度显示
	this.queue.on("progress", (evt)=> {
		let progress = Math.ceil(this.queue.progress*100)+'%';
		this.progress = progress;
		this.htmlDom.querySelector('span').innerText = progress;
	});

	//资源加载完毕处理
	this.queue.on('complete',()=>{
		G.stage.addChild(this.container);
		this.container.addChild(new G.ctj.Bitmap(this.queue.getResult('loadbg')));
		G.scene = 1;

		//隐藏进度提示
		this.htmlDom.style.display = 'none';
	});
}