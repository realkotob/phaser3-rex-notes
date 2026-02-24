const RemoveItem = Phaser.Utils.Array.Remove;

export default {
    deleteItem(item) {
        // Called by CellContainer.onDeleteItem
        RemoveItem(this.items, item);
        this.lastItemsCount = this.items.length; // Prevent monitor triggering

        this.refresh(); // Invoke createCellContainerCallback for each cell again
        this.resetPointerOver();
    },

    addItem(item) {
        // Calleed by add-button clicking
        this.items.push(item);
        this.lastItemsCount = this.items.length; // Prevent monitor triggering

        this
            .refresh()
            .scrollToBottom()

        // Last cell will be shown
        var newItemIndex = this.items.length - 1;
        var cellContainer = this.getCellContainer(newItemIndex);
        this
            .setChildLocalAlpha(cellContainer, 0)
            .setChildLocalScale(cellContainer, 1, 0)

        var self = this;
        cellContainer.tweenSelf({
            alpha: 1,
            scaleY: 1,
            duration: 500,
            onComplete() {
                self.resetPointerOver();
            }
        })
        return this;
    },

    clearItems() {
        // Called by clear-button clicking
        var cellContainers = this.getAllCellContainers();
        var self = this;
        for (var i = 0, cnt = cellContainers.length; i < cnt; i++) {
            if (i === 0) {
                cellContainers[i].tweenSelf({
                    alpha: 0,
                    duration: 500,
                    onComplete() {
                        self.items.length = 0;
                        self.lastItemsCount = self.items.length; // Prevent monitor triggering
                        self.refresh();
                        self.resetPointerOver();
                    }
                })
            } else {
                cellContainers[i].tweenSelf({
                    alpha: 0,
                    duration: 490,
                })
            }
        }

        return this;
    },

}