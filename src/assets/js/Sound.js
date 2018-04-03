/*声音管理文件*/

//加载全局配置
import G from './gloable.js';
export default function Sound(){
    this.media = {
        music: G.queue.getResult('music'),
        cry: G.queue.getResult('cry'),
        btn: G.queue.getResult('btn')
    }
	this._init();
}

Sound.prototype._init = function(){
    //生成音乐控制图标
    this.audio = document.createElement('div');
    this.audio.setAttribute('id','audio');
    this.audio.state = 'playing';
    this.audio.style.width = '35px';
    this.audio.style.height = '35px';
    this.audio.style.position = 'fixed';
    this.audio.style.top = '10px';
    this.audio.style.right = '10px';
    this.audio.style.zIndex = 1000;
    this.audio.style.background = "url('static/images/audio_light.png') no-repeat";
    this.audio.style.backgroundSize = '100% 100%';
    
    //音乐控制图标点击事件处理(播放|停止)播放
    this.audio.addEventListener('click',()=>{
        if(this.audio.state === 'playing'){
            this.stopMusic();
            this.audio.state = 'stoping';
        }else{
            this.playMusic();
            this.audio.state = 'playing';
        }
    });
    document.body.appendChild(this.audio);

    //音乐加载
	var sounds = {
        path:"./",
        manifest: [
            {id: "music", src: {mp3:"static/media/music.mp3", ogg:"noExtensionOggFile"}},
            {id: "cry", src: {mp3:"static/media/cry.mp3", ogg:"noExtensionOggFile"}},
            {id: "btn", src: {mp3:"static/media/btn.mp3", ogg:"noExtensionOggFile"}}
    ]};
    G.ctj.Sound.alternateExtensions = ["mp3"];
    G.ctj.Sound.registerSounds(sounds);

    G.ctj.Sound.addEventListener("fileload", ()=>{
        this.playMusic();
    });

    
}


//背景音乐播放
Sound.prototype.playMusic = function(){
    this.audio.style.transform = 'rotateZ(0deg)';
    G.ctj.Sound.play('music',{loop:-1}); 
}

//背景音乐暂停
Sound.prototype.stopMusic = function(){
    this.audio.style.transform = 'rotateZ(90deg)';
    G.ctj.Sound.stop(); 
}