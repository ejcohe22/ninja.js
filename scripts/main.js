import Sasuke from "./sasuke.js";
import Kakashi from "./kakashi.js";
import InputHandler from "./lib/input.js";

window.addEventListener('load', function(){
    const loading = this.document.getElementById('loading');
    loading.style.display = 'none';
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const input = new InputHandler();
    //const sasuke = new Sasuke(canvas.width, canvas.height);
    const kakashi = new Kakashi(canvas.width, canvas.height);

    let lastTime = 0;
    function animate(timeStamp){
        const delta = timeStamp-lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0,0,canvas.width,canvas.height)
        console.log(input.last_key);
        //sasuke.draw(ctx, delta);
        kakashi.update(input);
        kakashi.draw(ctx, delta);
        requestAnimationFrame(animate);
    };
    animate(0);
})