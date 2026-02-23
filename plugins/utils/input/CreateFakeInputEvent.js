var CreateFakeInputEvent = function (sourceEvent) {
    return {
        cancelled: false,
        isSynthetic: true,
        sourceEvent: sourceEvent,
        stopPropagation() { this.cancelled = true; }
    }
}
export default CreateFakeInputEvent;
