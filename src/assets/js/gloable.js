/*全局配置文件*/

//createjs相关库
import easeljs from 'imports-loader?this=>window!easeljs';
import preloadjs from 'imports-loader?this=>window!preloadjs';
import soundjs from 'imports-loader?this=>window!soundjs';
import tweenjs from 'imports-loader?this=>window!tweenjs';


export default {
	stage:{},
	ctj: window.createjs,
	scene: 0, //当前场景 默认0(加载场景)
	sceneLock: 0 //场景锁定
}
