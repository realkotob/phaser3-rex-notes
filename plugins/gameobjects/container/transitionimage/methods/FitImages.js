import FitToSize from '../../../../utils/size/FitTo.js';

var FitImages = function () {
    for (var i = 0, cnt = this.images.length; i < cnt; i++) {
        var image = this.images[i];
        var result = FitToSize(image, this, true, true);
        image.setDisplaySize(result.width, result.height);
        this.resetChildScaleState(image);
    }
}

export default FitImages;