// import * as Phaser from 'phaser';

export default TwoPointersTracer;

declare namespace TwoPointersTracer {

    interface IConfig {
        enable?: boolean,
        bounds?: Phaser.Geom.Rectangle,
        eventEmitter?: boolean | Phaser.Events.EventEmitter,
    }

}

declare class TwoPointersTracer extends Phaser.Events.EventEmitter {

    enable: boolean;
    setEnable(enable?: boolean): this;
    toggleEnable(): this;

    bounds: Phaser.Geom.Rectangle | undefined;
    setDetectBounds(bounds?: Phaser.Geom.Rectangle): this;

    dragCancel(): this;

    pointers: Phaser.Input.Pointer[];
    readonly distanceBetween: number;
    readonly angleBetween: number;
    readonly centerX: number;
    readonly centerY: number;
    readonly prevCenterX: number;
    readonly prevCenterY: number;
    readonly movementCenterX: number;
    readonly movementCenterY: number;
    readonly drag1Vector: { x: number, y: number };

    isPointer0InGameObject(
        gameObject: Phaser.GameObjects.GameObject,
        preTest?: (gameObject: Phaser.GameObjects.GameObject, x: number, y: number) => boolean,
        postTest?: (gameObject: Phaser.GameObjects.GameObject, x: number, y: number) => boolean,
    ): boolean;

    isPointer1InGameObject(
        gameObject: Phaser.GameObjects.GameObject,
        preTest?: (gameObject: Phaser.GameObjects.GameObject, x: number, y: number) => boolean,
        postTest?: (gameObject: Phaser.GameObjects.GameObject, x: number, y: number) => boolean,
    ): boolean;
}