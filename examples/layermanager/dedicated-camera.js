import phaser from 'phaser/src/phaser.js';
import LayerManagerPlugin from '../../plugins/layermanager-plugin.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {
    }

    create() {
        // Will add new camera if target camera is not existing
        this.layers = this.plugins.get('rexLayerManager').add(this, [
            { name: 'main' },
            { name: 'ui', cameraName: 'ui' },
        ]);

        var gameObject1 = this.add.circle(400, 300, 20, 0xff0000);
        this.layers.addToLayer('main', gameObject1);

        var gameObject0 = this.add.rectangle(440, 300, 30, 30, 0x00ff00);
        this.layers.addToLayer('ui', gameObject0);

        this.cameras.main.setScroll(100, 100);
    }

    update() { }
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
        global: [{
            key: 'rexLayerManager',
            plugin: LayerManagerPlugin,
            start: true
        }]
    }
};

var game = new Phaser.Game(config);