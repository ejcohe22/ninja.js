import GameObject from "./lib/gameObject.js";
import State from "./lib/state.js";
const states = {
    INTRODUCTION:0,
    IDLE:1,
}
export default class Sasuke extends GameObject{
    constructor(game_width, game_height){
        let spritesheet = document.getElementById('sasuke_sprites');
        super(game_width, game_height, spritesheet);

        let states = [new Introduction(this), new Idle(this)];
        //Start Player
        this.initialize_states(states);
        this.fps=60;
    }
}

class Introduction extends State {
    constructor(player){
        super('Introduction')
        this.player = player
    }
    enter_state(){
        this.player.frames = [
            [0, 25, 61, 80],
            [52, 25, 61, 80],
            [112, 25, 62, 80],
            [177, 25, 63, 80],
            [249, 25, 64, 80],
            [320, 24, 64, 80],
            [425, 24, 65, 80],
            [485, 24, 64, 80],
            [545, 24, 62, 80]
        ];
        this.player.frame = 0;
    }
    handle_input(){

    }
}

class Idle extends State {
    constructor(player){
        super('Idle')
        this.player = player
    }
    enter_state(){
        this.player.frames = [
            [0, 273, 61, 80],
            [57, 273, 61, 80],
            [110, 273, 62, 80],
            [150, 273, 63, 80],
            [220, 273, 64, 80]
        ];
        this.player.frame = 0;
    }
    handle_input(){

    }
}