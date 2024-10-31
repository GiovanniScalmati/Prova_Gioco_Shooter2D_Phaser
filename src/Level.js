import { Scene } from "phaser";
import { Player } from "./player.js";
import { Fly } from "./Enemies/Fly.js";

export class Level extends Scene{
   player;
    enemies = [];

    // Serve per inizializzare i dati del livello 
    init (){

    }

    // Serve per caricare gli assets utilizzati in questo livello 

    preload(){
        this.load.spritesheet("knight_idle","assets/knight_idle_spritesheet.png", {frameWidth:16, frameHeight:16});
        this.load.spritesheet("knight_run","assets/knight_run_spritesheet.png", {frameWidth:16, frameHeight:16});
        this.load.spritesheet("fly","assets/fly_anim_spritesheet.png", {frameWidth:16, frameHeight:16});
    }

    // Serve per costruire il livello 

    create(){
        this.player = new Player(this, 50,50);
        
        this.cameras.main.setZoom(1).startFollow(this.player)

        this.time.addEvent({
            delay: 1000,
            loop: true,
            callback: ()=> {
                this.enemies.push (new Fly(this, 200,200));
            },
        })

    }

    // Rappresenta il game loop 

    update(){
        this.enemies.forEach((enemy)=>{

            this.physics.moveToObject(enemy, this.player)
        })

      

    }
}