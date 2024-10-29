export default class GameObject {
    constructor(game_width, game_height, spritesheet){
        // Generic
        this.scale = 4;
        this.game_width = game_width;
        this.game_height = game_height;
        this.fps = 30;
        this.frame_timer = 0;
        this.frame_interval = 1000 / this.fps;
        this.frame = 0;
        this.states = [];
        this.current_state = 0;

        // spritesheet positions
        this.frames = [0,25,60,80];

        //position on canvas
        this.x = 0;
        this.y = 0;
        this.x_velocity = 0;
        this.y_velocity = 0;

        // must get set
        this.spritesheet = spritesheet;
    }
    initialize_states(states){
        this.states = states;
        this.current_state = this.states[0];
        this.current_state.enter_state();
    }
    draw(context, deltaTime){
        // calculate next frame limited by fps
        if (this.frame_timer < this.frame_interval){
            this.frame_timer += deltaTime;
        }else{
            this.x += this.x_velocity;
            this.y += this.y_velocity;
            this.frame_timer = 0;
            this.frame++;
            this.frame %= this.frames.length;
        }
        let frame_data = this.frames[this.frame];
        console.log(`x: ${this.x}, y: ${this.y} - spritesheet col: ${frame_data[0]}, spritesheet row: ${frame_data[1]} - w: ${frame_data[2]}, h: ${frame_data[3]}`)

        context.drawImage(
            this.spritesheet,// img to take section of
            frame_data[0], frame_data[1], //row and col of section
            frame_data[2], frame_data[3],// height and width of img selection
            this.x, this.y,// where on canvas
            this.scale * frame_data[2], this.scale * frame_data[3]//scale image
        );  
    }
    setState(state){
        this.current_state = this.states[state];
        this.frame = 0;
        this.current_state.enter_state();
    }
    update(input){
        this.current_state.handle_input(input);
    }
    setFPS(fps){
        this.fps = fps;
        this.frame_interval = 1000 / this.fps;}
}