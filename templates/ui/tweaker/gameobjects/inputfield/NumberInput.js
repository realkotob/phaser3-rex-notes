import Sizer from '../../../sizer/Sizer.js';
import InputFiledBase from './InputFieldBase.js';
import CreateCanvasInput from './CreateCanvasInput.js';

class NumberInput extends InputFiledBase(Sizer) {
    constructor(scene, config) {
        if (config === undefined) {
            config = {};
        }

        var sizerConfig = {
            orientation: 0, // x            
        }
        super(scene, sizerConfig);

        var inputNumberConfig = config.inputNumber || config.inputText;
        var inputNumber = CreateCanvasInput(scene, inputNumberConfig)
            .setNumberInput();

        this.add(
            inputNumber,
            { proportion: 1, expand: true }
        )

        this.addChildrenMap('inputNumber', inputNumber);

        inputNumber.on('close', this.onValueChange, this);
    }

    get value() {
        return this.childrenMap.inputNumber.value;
    }

    set value(value) {
        this.childrenMap.inputNumber.value = value;
    }

}

export default NumberInput;