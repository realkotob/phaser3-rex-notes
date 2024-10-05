import IsArcCorner from '../../utils/IsArcCorner.js';

var RadToDeg = Phaser.Math.RadToDeg;

var BuildRoundRectangleBarDirection0 = function (
    lines,
    width, height, cornerRadius,
    value,
) {
    var barWidth = width * value;

    // Top-left
    var radius = cornerRadius.tl;
    if (IsArcCorner(radius)) {
        var theta;
        if (barWidth > radius.x) {
            theta = 90;
        } else {
            theta = RadToDeg(Math.acos((radius.x - barWidth) / radius.x));
        }
        var centerX = radius.x;
        var centerY = radius.y;
        lines.ellipticalArc(centerX, centerY, radius.x, radius.y, 180, 180 + theta, false);
    } else {
        lines.lineTo(0, 0);
    }

    // Top-right
    var radius = cornerRadius.tr;
    if (IsArcCorner(radius) && (barWidth > (width - radius.x))) {
        var theta = 90 - RadToDeg(Math.acos((barWidth - (width - radius.x)) / radius.x));
        var centerX = width - radius.x;
        var centerY = radius.y;
        lines.ellipticalArc(centerX, centerY, radius.x, radius.y, 270, 270 + theta, false);
    } else {
        lines.lineTo(barWidth, 0);
    }

    // Bottom-right
    var radius = cornerRadius.br;
    if (IsArcCorner(radius) && (barWidth > (width - radius.x))) {
        var theta = 90 - RadToDeg(Math.acos((barWidth - (width - radius.x)) / radius.x));
        var centerX = width - radius.x;
        var centerY = height - radius.y;
        lines.ellipticalArc(centerX, centerY, radius.x, radius.y, 90 - theta, 90, false);
    } else {
        lines.lineTo(barWidth, height);
    }

    // Bottom-left
    var radius = cornerRadius.bl;
    if (IsArcCorner(radius)) {
        var theta;
        if (barWidth > radius.x) {
            theta = 90;
        } else {
            theta = RadToDeg(Math.acos((radius.x - barWidth) / radius.x));
        }
        var centerX = radius.x;
        var centerY = height - radius.y;
        lines.ellipticalArc(centerX, centerY, radius.x, radius.y, 180 - theta, 180, false);
    } else {
        lines.lineTo(0, height);
    }
}

export default BuildRoundRectangleBarDirection0;