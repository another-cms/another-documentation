module.exports = {
    // Map of hooks
    hooks: {},

    // Map of new blocks
    blocks: {
    tag1: {
            process: function(block) {
                return "Hello "+block.body+", How are you?";
            }
        }
    },

    // Map of new filters
    filters: {}
};