class GamePad extends UIBlock
{
    constructor(config)
    {
        super();
        this.emitter=EventDispatcher.getInstance();

        this.scene = config.scene;
        this.grid= config.grid;

        this.btnRight = this.scene.add.image(0,0,"Welcome");
        Align.scaleToGameW(this.btnRight,0.15);
        this.grid.placeAtIndex(452,this.btnRight);

        this.bntLeft = this.scene.add.image(0,0,"Left");
        Align.scaleToGameW(this.bntLeft,0.15);
        this.grid.placeAtIndex(448,this.bntLeft);

        this.btnRight.setInteractive();
        this.bntLeft.setInteractive();

        this.btnRight.on("pointerdown", this.goRight.bind(this));
        this.bntLeft.on("pointerdown", this.goLeft.bind(this));

        this.btnRight.alpha=.01;
        this.bntLeft.alpha=.01;

        this.add(this.btnRight);
        this.add(this.bntLeft);

       /* this.children.forEach(function(child)
        {
            child.setScrollFactor(0)
        });*/
    }
    goRight() {
        console.log("go right");
        this.emitter.emit("GO_RIGHT");
    }
    goLeft() {
        console.log("go left");
        this.emitter.emit("GO_LEFT");
    }
}