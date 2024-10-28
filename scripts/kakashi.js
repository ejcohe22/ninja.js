import GameObject from "./lib/gameObject.js";
import State from "./lib/state.js";
const states = {
    STANCERIGHT:0,
    STANCELEFT:1,
    WALKRIGHT:2,
    WALKLEFT:3,
}
export default class Kakashi extends GameObject{
    constructor(game_width, game_height){
        let spritesheet = document.getElementById('kakashi_sprites');
        super(game_width, game_height, spritesheet);

        let states = [
            new STANCERIGHT(this),
            new STANCELEFT(this),
            new WALKRIGHT(this),
            new WALKLEFT(this),
        ];

        //Start Player
        this.initialize_states(states);
        this.fps=1;
    }
}

class STANCERIGHT extends State {
    constructor(player){
        super('STANCERIGHT')
        this.player = player
    }
    enter_state(){
        this.player.x_velocity = 0;
        this.player.frames = [         
            [18, 352, 50, 70],
            [68, 352, 50, 70],
            [118, 352, 50, 70],
            [163, 352, 50, 70],
            [212, 352, 50, 70],
            [258, 352, 50, 70],
        ];
        this.player.frame = 0;
    }
    handle_input(input){
        switch (input.last_key){
            case 'Left down':
                this.player.setState(states.WALKLEFT);
                break;
            case 'Right down':
                this.player.setState(states.WALKRIGHT);
                break;
            default:
                null;
        }
    }
}

class STANCELEFT extends State {
    constructor(player){
        super('STANCELEFT')
        this.player = player
    }
    enter_state(){
        this.player.x_velocity = 0;
        this.player.frames = [
                         /** **/
            [400, 352, 50, 70],
            [448, 352, 50, 70],
            [495, 352, 50, 70],
            [541, 352, 50, 70],
            [588, 352, 50, 70],
            [635, 352, 50, 70],
        ];
        this.player.frame = 0;
    }
    handle_input(input){
        switch (input.last_key){
            case 'Left down':
                this.player.setState(states.WALKLEFT);
                break;
            case 'Right down':
                this.player.setState(states.WALKRIGHT);
                break;
            default:
                null;
        }
    }
}

class WALKRIGHT extends State {
    constructor(player){
        super('WALKRIGHT')
        this.player = player
    }
    enter_state(){
        this.player.x_velocity = 20;
        this.player.frames = [         
            [20, 477, 40, 70],
            [55, 477, 40, 70],
            [92, 477, 40, 70],
            [130, 477, 40, 70],
            [165, 477, 40, 70],
            [200, 477, 40, 70],
        ];
        this.player.frame = 0;
    }
    handle_input(input){
        switch (input.last_key){
            case 'Right up':
                this.player.setState(states.STANCERIGHT);
                break;
            default:
                null;
        }
    }
}

class WALKLEFT extends State {
    constructor(player){
        super('WALKLEFT')
        this.player = player
    }
    enter_state(){
        this.player.x_velocity = -20;
        this.player.frames = [            
            [333, 478, 40, 70],
            [372, 478, 40, 70],
            [410, 478, 40, 70],
            [448, 478, 40, 70],
            [487, 478, 40, 70],
            [524, 478, 40, 70],
        ];
        this.player.frame = 0;
    }
    handle_input(input){
        switch (input.last_key){
            case 'Left up':
                this.player.setState(states.STANCELEFT);
                break;
            default:
                null;
        }
    }
}