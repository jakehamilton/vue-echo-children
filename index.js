(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define('vue-echo-children', factory)
    } else if (typeof exports === 'object') {
        // Node
        module.exports = factory()
    } else {
        // Browser
        var library = factory()

        // Automatically install component
        if (root.Vue) {
            root.Vue.use(library)
        }

        // Attach library to window
        root.VueEchoChildren = library
    }
})(this, function () {
    var EchoChildren = {
        functional: true,
        render: function (h, context) {
            return context.children
        }
    }

    var library = {
        install: function (Vue) {
            Vue.component('echo-children', EchoChildren)
        },

        EchoChildren: EchoChildren
    }

    return library
})
