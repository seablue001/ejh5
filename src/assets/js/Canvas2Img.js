/*生成分享图片文件*/

//加载全局配置
import G from './gloable.js';

export default function Canvas2Img(){
	this._init();
}

Canvas2Img.prototype._init = function(){
	G.shareImg = document.createElement('img');
	G.shareImg.style.width = '100vw';
	G.shareImg.style.height = '100vh';
	G.shareImg.style.position = 'fixed';
	G.shareImg.style.top = '0px';
	G.shareImg.style.left = '0px';
	G.shareImg.style.zIndex = 2000;
	G.shareImg.addEventListener('click',()=>{
		G.shareImg.style.display = 'none';
	});

	G.stage.addEventListener('dblclick',()=>{
		this.showShareImg();
	});

}

//生成图片
Canvas2Img.prototype.showShareImg = function(){
	const base64Img = G.stage.toDataURL("image/jpeg");	
	G.shareImg.style.display = 'block';
	G.shareImg.setAttribute('src',base64Img);
}

//关闭图片
Canvas2Img.prototype.closeShareImg = function(){	
	G.shareImg.style.display = 'none';
}