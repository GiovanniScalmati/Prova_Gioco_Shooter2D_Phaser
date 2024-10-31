import { Physics } from "phaser";

export class Player extends Physics.Arcade.Sprite{
    speed = 60;

    constructor(scene, x, y, texture = "knight_idle"){
        super(scene, x, y, texture);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        scene.anims.create({
            key:'player_idle',
            frameRate:10,
            repeat:-1,
            frames: scene.anims.generateFrameNumbers("knight_idle", {
                start:0,
                end:5,
            })
        });

        this.play("player_idle")

        scene.input.keyboard.on('keydown-S',()=>{
            this.setVelocityY(this.speed);
        });
        scene.input.keyboard.on('keyup-S',()=>{
            this.setVelocityY(0);
        });
        scene.input.keyboard.on('keydown-W',()=>{
            this.setVelocityY(-this.speed);
        });
        scene.input.keyboard.on('keyup-W',()=>{
            this.setVelocityY(0);
        });
        scene.input.keyboard.on('keydown-A',()=>{
            this.setVelocityX(-this.speed);
        });
        scene.input.keyboard.on('keyup-A',()=>{
            this.setVelocityX(0);
        }); scene.input.keyboard.on('keydown-D',()=>{
            this.setVelocityX(this.speed);
        });
        scene.input.keyboard.on('keyup-D',()=>{
            this.setVelocityX(0);
        })
    }

}