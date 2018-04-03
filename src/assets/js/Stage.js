/*场景舞台文件*/

//加载全局配置
import G from './gloable.js';

// 场景样式
import '../scss/stage.scss';

/*
*Stage 场景类 
*stageDom: canvas舞台的id选择器
*
*/
export default function Stage(stageDom='stage'){

	const that = this;
	that.stage = new G.ctj.Stage(stageDom);
	G.stage = that.stage;
	G.ctj.Touch.enable(that.stage);

}
