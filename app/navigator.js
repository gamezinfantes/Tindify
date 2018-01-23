

var Navigator = (function () {
    var instance;

    function createInstance() {
        var object = {};
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
        setInstance: function(i) {
          instance = i;
        }
    };
})();

export default Navigator
