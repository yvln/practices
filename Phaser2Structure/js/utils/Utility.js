window.MyGame.namespace('Utility', {}, (function (game) {'use strict';
    var gameObject = game.gameObject,
        textStyle20 = {font: 'bold 20pt Verdana', align: 'center'},
        textStyle17 = {font: 'bold 17pt Verdana', align: 'center'},
        textStyle12 = {font: 'bold 12pt Verdana', align: 'center'};

    return {

        deepFreezeAnObject: function (myObject) {
            var prop, 
                propKey;

            Object.freeze(myObject);
            for (propKey in myObject) {
                prop = myObject[propKey];
                if (!myObject.hasOwnProperty(propKey) || !(typeof prop === 'object') || Object.isFrozen(prop)) {
                    continue;
                }
                deepFreeze(prop);
            }
        },

        createSafeArray: function (arrayObject) {
            return arrayObject.slice();
        },

        disableDisplayObject: function (item) {
            item.inputEnabled = false;
        },

        enableDisplayObject: function (item) {
            item.inputEnabled = true;
        },

        numOfElemInObject: function (myObject) {
            return Object.keys(myObject).length;
        },

        getTextStyle20: function () {
            return textStyle20;
        },

        getTextStyle17: function () {
            return textStyle17;
        },

        getTextStyle12: function () {
            return textStyle12;
        },

        /** 
         * randomNumber(min, max), min and max are inclusive.
         * @method randomNumber
         * @param {Integer} min
         * @param {Integer} max
         * @return {Integer} 
         */
        randomNumber: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    };
    }(window.MyGame)));
