import phaser from 'phaser/src/phaser.js';
import GameObjectShellPlugin from '../../templates/gameobjectshell/gameobjectshell-plugin.js';
import TransformController from '../../templates/gameobjectshell/transformcontroller/TransformController';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {
        this.load.image('mushroom', 'assets/images/mushroom.png');
    }

    create() {
        var controller;

        for (var i = 0; i < 10; i++) {
            let gameObject = this.make.image({
                key: 'mushroom',

                x: { randFloat: [0, 800] },
                y: { randFloat: [0, 600] },
                scale: {
                    x: { randFloat: [0.5, 2] },
                    y: { randFloat: [0.5, 2] },
                },
                angle: { randFloat: [0, 360] },
            })

            gameObject
                .setInteractive()
                .on('pointerdown', function () {
                    controller.bind(gameObject);
                })
        }

        controller = this.rexGameObjectShell.add.transformController({
            boundsRectangle: {
                color: 0x555555,
            },

            controlPoint: {
                color: 0x00ff00
            }
        });

    }

    update() {
    }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: Demo,
    plugins: {
        scene: [{
            key: 'rexGameObjectShell',
            plugin: GameObjectShellPlugin,
            mapping: 'rexGameObjectShell'
        }]
    }
};

var game = new Phaser.Game(config);