import phaser from 'phaser/src/phaser.js';
import CustomShapesPlugin from '../../plugins/customshapes-plugin.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() { }

    create() {
        CreateShapeGameObject(this)
            .setSize(200, 200)
            .setPosition(400, 300)

    }

    update() { }
}

var CreateShapeGameObject = function (scene) {
    var shape = scene.add.rexCustomShapes({
        type: 'shape',
        create: {
            roundRectangle: 1
        },
        update: function () {
            var centerX = this.width / 2,
                centerY = this.height / 2,
                radius = Math.min(centerX, centerY);
            var width = radius * 2,
                height = width;
            var x = centerX - radius,
                y = centerY - radius;
            var lineWidth = 4;
            var radius = lineWidth * 3;
            var fillColor = 0x1B1F2A;
            var strokeColor = 0x2F3B55;

            var shape = this.getShapes()[0];
            if (this.isSizeChanged) {
                var halfBoxLineWidth = lineWidth / 2;
                shape
                    .setTopLeftPosition(x + halfBoxLineWidth, y + halfBoxLineWidth)
                    .setSize(width - lineWidth, height - lineWidth)
                    .setRadius(radius)
                    .setDashPattern([30, 30])
            }

            shape.fillStyle(fillColor).lineStyle(lineWidth, strokeColor)
        }
    })

    shape.setColor = function (color) {
        shape.setFillStyle(color);
        return shape;
    }

    shape.setChecked = function (checked) {
        if (checked === undefined) {
            checked = true;
        }
        if (shape.checked === checked) {
            return shape;
        }
        shape.checked = checked;
        shape.setDirty();
        return shape;
    }

    shape.setChecked(false);

    return shape;
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
            key: 'CustomShapesPlugin',
            plugin: CustomShapesPlugin,
            start: true
        }]
    }
};

var game = new Phaser.Game(config);