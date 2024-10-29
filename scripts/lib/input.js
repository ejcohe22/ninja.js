export default class InputHandler {
    constructor(){
        this.last_key='';
        this.double = false;
        this.last_down = Date.now();
        window.addEventListener('keydown', (event) => {
            const now = Date.now();
            const delta = now - this.last_down;
            this.last_down = now;
            console.log(delta)
            switch(event.key){
                case "ArrowLeft":
                    if ( this.last_key === 'Left up' && delta < 275 ){ this.double = true; }
                    this.last_key = "Left down";
                    break;
                case "ArrowRight":
                    if ( this.last_key === 'Right up' && delta < 275 ){ this.double = true; }
                    this.last_key = "Right down";
                    break;
                case "ArrowDown":
                    this.last_key = "down down";
                    break;
                case "ArrowUp":
                    this.last_key = "up down";
                    break;
            }
        });
        window.addEventListener('keyup', (event) => {
            this.double = false;
            switch(event.key){
                case "ArrowLeft":
                    this.last_key = "Left up";
                    break;
                case "ArrowRight":
                    this.last_key = "Right up";
                    break;
                case "ArrowDown":
                    this.last_key = "down up";
                    break;
                case "ArrowUp":
                    this.last_key = "up up";
                    break;
            }
        });
    }
}