/*入口文件*/
//加载全局配置
import G from './gloable.js';

// 加载舞台类
import Stage from './Stage.js';

// 加载 资源加载类
import Load from './Load.js'; 

// 加载 声音管理类
import Sound from './Sound.js';

//加载场景类01
import Scene01 from './Scene01.js';

//加载生成分享图片类
import Canvas2Img from './Canvas2Img.js';


//类实例化
const myStage = new Stage();
const load = new Load();

const shareImg = new Canvas2Img();




/*
主逻辑
1、场景变化控制
2、声音控制
*/
//fps设置
G.ctj.Ticker.setFPS(5); 

// 场景更新
G.ctj.Ticker.on("tick", handleTick);
function handleTick(event) {
	//场景控制
	switch(G.scene){
		/*case 0: //加载场景
			
		break;*/
		case 1: //场景一
			if(G.sceneLock !== 0){
				break;
			}
			G.stage.removeChild(load.container);

			//背景音乐播放
			const sound = new Sound();
			const scene01 = new Scene01();

		break;
	}
	G.stage.update(event);
}