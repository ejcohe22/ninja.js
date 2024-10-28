export default class State {
    constructor(state){
        this.state
    }
    enter_state(){
        console.log('warning: enter_state not defined for', this)
    }
    handle_input(input){
        console.log('warning: handle_input not defined for', this)
    }
}