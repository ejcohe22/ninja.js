export default class InputHandler {
    constructor(){
        this.last_key='';
        window.addEventListener('keydown', (event) => {
            switch(event.key){
                case "ArrowLeft":
                    this.last_key = "Left down";
                    break;
                case "ArrowRight":
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