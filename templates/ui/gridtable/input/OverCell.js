import PointerOverTest from './PointerOverTest.js';

var OverCell = function (table, tableConfig) {
    table
        .on('pointermove', OnMove, this)
        .on('pointerover', OnMove, this)
        .on('pointerout', OnOut, this)  // pointer-up is included too
}

var OnMove = function (pointer, localX, localY, event) {
    this.pointerOverTest(pointer, event);
}

var OnOut = function (pointer, event) {
    this.pointerOverTest(pointer, event);
}

export default OverCell;