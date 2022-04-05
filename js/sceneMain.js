class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        this.load.image("background","assets/background.png");
        this.load.atlas("bird","assets/bird.png","assets/bird.json");
    }
    create() {
        let bg = this.add.image(0,0,"background");
        
        bg.displayHeight = this.sys.game.config.height;
        bg.displayWidth = this.sys.game.config.width;
       // bg.scaleX = bg.scaleY;

        bg.y= game.config.height/2;
        bg.x= game.config.width/2;

        //set grid lines to locate positions
        //this.blockGrid =new AlignGrid({
        //    scene:this,
        //    rows:33,
        //    cols:33,
        //    height:bg.displayHeight,
        //    width:bg.displayWidth
        //});
        //this.blockGrid.showNumbers();

        this.bird = this.add.sprite(300,300,"bird");
        var frameNames = this.textures.get("bird").getFrameNames();
        console.log(frameNames);
        this.anims.create({
            key: "Frame",
            frames: [{
                key: "bird",
                Frame: "Frame-1.png"
            }, {
                key: "bird",
                Frame: "frame-2.png"
            }, {
                key: "bird",
                Frame: "frame-3.png"
            }, {
                key: "bird",
                Frame: "frame-4.png"
            }],
            frameRate: 20,
            repeat: -1
            });
            this.bird.play("Frame");

    }
    update() {}
}