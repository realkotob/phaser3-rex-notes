import ContainsPoint from '../../../utils/ContainsPoint.js';

var PointToChild = function (x, y, preTest, postTest) {
    for (var nodeKey in this.nodesMap) {
        var node = this.nodesMap[nodeKey];
        if (this.isTreeObject(node)) {
            // Is sub-tree            
            var child = node.pointToChild(x, y, preTest, postTest);
            if (child) {
                return child;
            } else if (ContainsPoint(node, x, y, preTest, postTest)) {
                return node;
            }

        } else {
            // Is leaf-node
            if (ContainsPoint(node, x, y, preTest, postTest)) {
                return node;
            }

        }
    }

    return null;
}

export default PointToChild;