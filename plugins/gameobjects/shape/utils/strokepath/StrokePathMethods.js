import BuildDashStroke from './BuildDashStroke.js';

export default {
    setDashPattern(dashPattern, dashOffset = 0) {
        // dashPattern: [draw, gap] , or {segments, drawRatio}
        this.dashPattern = dashPattern;
        this.dashOffset = dashOffset;
        this.isDashed = !!dashPattern;
        return this;
    },

    clearDashPattern() {
        this.setDashPattern();
        return this;
    },

    setDashed(enable) {
        if (enable === undefined) {
            enable = true;
        }

        this.isDashed = enable;
        return this;
    },

    // Internal use
    buildStrokePath() {
        if (this.isDashed) {
            var result = BuildDashStroke(this.pathData, {
                closePath: this.closePath,
                dashPattern: this.dashPattern,
                dashOffset: this.dashOffset
            }, this);

            if (result) {
                this.strokePathData = result.strokePathData;
                this.strokePathMask = result.strokePathMask;
            } else {
                this.isDashed = false;
            }

        }

        return this;
    }
}