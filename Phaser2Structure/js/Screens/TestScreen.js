window.MyGame.namespace('TestScreen', window.MyGame.Screen, (function (game) {'use strict';
    var gameObject = null;

    return {

        init: function () {
            gameObject = game.gameObject;
        },

        create: function () {
            // create testing environment
        },

	update: function () {
	
	},

        render: function () {
            gameObject.debug.spriteInfo(boxes[3], 32, 32);
        },

        shutdown: function () {
        }
    };
    }(window.MyGame)));
