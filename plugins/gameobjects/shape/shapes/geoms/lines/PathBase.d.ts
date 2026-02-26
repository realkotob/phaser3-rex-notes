import BaseGeom from '../base/BaseGeom';

declare namespace PathBase {
    /**
     * Auto dash pattern configuration.
     */
    type DashPatternConfig = {
        /**
         * Number of dash segments along the full path.
         */
        segments?: number,
        /**
         * Drawn ratio of each segment, from 0 to 1.
         */
        drawRatio?: number,
    };

    /**
     * Dash pattern definition.
     */
    type DashPatternType = number[] | DashPatternConfig;
}

/**
 * Base class for path-based geometries.
 */
export default class PathBase extends BaseGeom {
    /**
     * True if the path should be closed.
     */
    closePath: boolean;

    /**
     * Set stroke dash pattern and optional dash offset.
     *
     * @param dashPattern - Dash array or auto dash configuration.
     * @param dashOffset - Dash offset along the path.
     * @returns This instance.
     */
    setDashPattern(
        dashPattern?: PathBase.DashPatternType,
        dashOffset?: number
    ): this;

    /**
     * Clear dash pattern and disable dashed stroke.
     *
     * @returns This instance.
     */
    clearDashPattern(): this;

    /**
     * Enable or disable dashed stroke rendering.
     *
     * @param enable - Set to true to enable dashed rendering.
     * @returns This instance.
     */
    setDashed(
        enable?: boolean
    ): this;

    /**
     * True if dashed stroke rendering is enabled.
     */
    isDashed: boolean;

    /**
     * Current dash pattern definition.
     */
    dashPattern: PathBase.DashPatternType | undefined;

    /**
     * Current dash offset along the path.
     */
    dashOffset: number;
}
