import { Physics } from "phaser";

export class Fly extends Physics.Arcade.Sprite{
    constructor(scene, x, y, texture = "fly"){
        super(scene, x, y, texture);

        scene.add.existing(this);
        scene.physics.add.existing(this);

       
    }  
}