class Form{
    constructor(){

        this.title = createElement('h1')
        this.input = createInput('Enter your name')
        this.button = createButton('start');
        this.greeting = createElement('h2')
    }
        hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
        }
    display(){
        this.title.html('car racing game');
        this.title.position(displayWidth/2-200,0);
        this.input.position(displayWidth/2-200,displayHeight/2-200);
        this.button.position(displayWidth/2-200,displayHeight/2-150);
        this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playercount = playercount + 1;
        player.index = playercount
        player.update()
        player.updatecount(playercount)
        this.greeting.html('Welcome' + player.name)
        this.greeting.position(displayWidth/2-200,displayHeight/4)
        })
    }
}