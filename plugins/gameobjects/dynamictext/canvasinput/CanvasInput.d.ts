import DynamicText from '../dynamictext/DynamicText';
import HiddenTextEdit from './textedit/HiddenTextEdit';

export default CanvasInput;

declare namespace CanvasInput {
    type AddCharCallbackType = (
        child: DynamicText.CharBob,
        index: number,
        canvasInput: CanvasInput
    ) => void;

    type MoveCursorCallbackType = (
        currCursorIndex: number,
        prevCursorIndex: number,
        canvasInput: CanvasInput
    ) => void;

    type ParseTextCallbackType = (
        text: string
    ) => unknown;

    interface IConfigBackground extends DynamicText.IConfigBackground {
        'focus.color'?: string | number | null,
        'focus.color2'?: string | number | null,
        'focus.horizontalGradient'?: boolean,

        'focus.stroke'?: string | number | null,
        'focus.strokeThickness'?: number,

        'focus.cornerRadius'?: number |
        ({ x?: number, y?: number }) |
        DynamicText.IRadiusConfig,
        'focus.cornerIteration'?: number
    }

    interface IConfigTextStyle extends DynamicText.IConfigTextStyle {
        'cursor.bold'?: boolean,
        'cursor.italic'?: boolean,
        'cursor.fontSize'?: string | number,
        'cursor.fontFamily'?: string,
        'cursor.color'?: string | number | null,
        'cursor.stroke'?: string | number | null,
        'cursor.strokeThickness'?: number,
        'cursor.shadowColor'?: string | number | null,
        'cursor.shadowOffsetX'?: number,
        'cursor.shadowOffsetY'?: number,
        'cursor.shadowBlur'?: number,
        'cursor.backgroundColor'?: string | number | null,
        'cursor.backgroundHeight'?: number,
        'cursor.backgroundBottomY'?: number,
        'cursor.backgroundLeftX'?: number,
        'cursor.backgroundRightX'?: number,
        'cursor.offsetX'?: number,
        'cursor.offsetY'?: number,
        'cursor.leftSpace'?: number,
        'cursor.rightSpace'?: number,

        'range.bold'?: boolean,
        'range.italic'?: boolean,
        'range.fontSize'?: string | number,
        'range.fontFamily'?: string,
        'range.color'?: string | number | null,
        'range.stroke'?: string | number | null,
        'range.strokeThickness'?: number,
        'range.shadowColor'?: string | number | null,
        'range.shadowOffsetX'?: number,
        'range.shadowOffsetY'?: number,
        'range.shadowBlur'?: number,
        'range.backgroundColor'?: string | number | null,
        'range.backgroundHeight'?: number,
        'range.backgroundBottomY'?: number,
        'range.backgroundLeftX'?: number,
        'range.backgroundRightX'?: number,
        'range.offsetX'?: number,
        'range.offsetY'?: number,
        'range.leftSpace'?: number,
        'range.rightSpace'?: number,
    }

    interface IConfig extends DynamicText.IConfig {
        textArea?: boolean;

        edit?: HiddenTextEdit.IConfig;

        background?: IConfigBackground,

        focusStyle?: DynamicText.IConfigBackground;

        style?: IConfigTextStyle

        cursorStyle?: DynamicText.IConfigTextStyle;

        rangeStyle?: DynamicText.IConfigTextStyle;

        onOpen?: HiddenTextEdit.OnOpenCallbackType;
        onFocus?: HiddenTextEdit.OnOpenCallbackType;

        onClose?: HiddenTextEdit.OnCloseCallbackType;
        onBlur?: HiddenTextEdit.OnCloseCallbackType;

        onUpdate?: HiddenTextEdit.OnUpdateCallbackType;

        onAddChar?: AddCharCallbackType;

        onMoveCursor?: MoveCursorCallbackType;

        parseTextCallback?: ParseTextCallbackType;

        readOnly?: boolean,
        maxLength?: number,
        minLength?: number,
        selectAll?: boolean,

        clickOutSideTarget?: boolean | Phaser.GameObjects.GameObject,
    }
}

declare class CanvasInput extends DynamicText {
    constructor(
        scene: Phaser.Scene,
        x?: number, y?: number,
        fixedWidth?: number, fixedHeight?: number,
        config?: CanvasInput.IConfig
    );
    constructor(
        scene: Phaser.Scene,
        x?: number, y?: number,
        config?: CanvasInput.IConfig
    );
    constructor(
        scene: Phaser.Scene,
        config?: CanvasInput.IConfig
    );

    setText(text: string): this;
    appendText(text: string): this;

    displayText: string;
    setDisplayText(value: string): this;

    inputText: string;
    setInputText(value: string): this;

    setParseTextCallback(callback?: CanvasInput.ParseTextCallbackType): this;
    getValue(): unknown;
    setValue(value: unknown): this;
    value: unknown;

    setReadOnly(enable?: boolean): this;
    readOnly: boolean;

    open(onCloseCallback?: Function): this;
    close(): this;
    readonly isOpened: boolean;

    setFocusStyle(
        style: DynamicText.IConfigBackground
    ): this;

    setCursorStyle(
        style: DynamicText.IConfigTextStyle
    ): this;

    setRangeStyle(
        style: DynamicText.IConfigTextStyle
    ): this;

    setNumberInput(): this;

    setMaxLength(value: number): this;
    maxLength: number;

    setMinLength(value: number): this;
    minLength: number;

    setCursorPosition(value: number): this;
    cursorPosition: number;

    readonly contentWidth: number;
    readonly contentHeight: number;
    readonly linesCount: number;

    readonly topTextOY: number;
    readonly bottomTextOY: number;
    readonly leftTextOX: number;
    readonly rightTextOX: number;

    setTextOYByPercentage(t: number): this;
    getTextOYPercentage(): number;
    t: number;

    setTextOXByPercentage(s: number): this;
    getTextOXPercentage(): number;
    s: number;

    cursorMoveLeft(): this;
    cursorMoveRight(): this;
    cursorMoveUp(): this;
    cursorMoveDown(): this;

}