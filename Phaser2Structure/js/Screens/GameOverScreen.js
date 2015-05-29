window.MyGame.namespace('GameOverScreen', window.MyGame.Screen, (function (game) {'use strict';    var thisObject = null,        gameObject = null,        woodBg = null,        levelsButton = null,        daResults = null,        youScoredText = null,        finalResultText = null,        inLove = null,        humanly = null,        HUMANLY_POINTS = 9900,        ACH_IMG_X_POS = 280,        ACH_IMG_Y_POS = 200,        finalResult = function (points) {            var gameResult = '';            if (points >= HUMANLY_POINTS && points < HEAD_GROWING_POINTS) {                gameResult = 'You did humanly!';                humanly.visible = true;            }            return gameResult;        };    return {        init: function () {            gameObject = wml.gameObject;            thisObject = this;            thisObject.screenObjects = gameObject.add.group();        },        create: function () {            woodBg = gameObject.add.sprite(0, 0, wml.ImageAssetKeys.GUIDES_AND_BACKGROUNDS_ATLAS, 'woodBg.jpg');            thisObject.screenObjects.add(woodBg);            daResults = gameObject.add.sprite(217, 20, wml.ImageAssetKeys.OTHER_GUI_ASSETS_ATLAS, 'daResults.png');            thisObject.screenObjects.add(daResults);            youScoredText = gameObject.add.text(200, 100, 'You scored: ' + wml.getScore(), wml.Utility.getTextStyle17());            youScoredText.update = function () {                var youScoredTextObject = this;                youScoredTextObject.setText('You scored: ' + wml.getScore());            }            thisObject.screenObjects.add(youScoredText);            humanly = gameObject.add.sprite(ACH_IMG_X_POS, ACH_IMG_Y_POS, wml.ImageAssetKeys.OTHER_GUI_ASSETS_ATLAS, 'beingHumanAch.png');            humanly.visible = false;            thisObject.screenObjects.add(humanly);            levelsButton =                 wml.GoToScreen.Button(wml.LevelsScreen.KEY, thisObject.screenObjects, 250, 440, wml.ImageAssetKeys.STANDARD_BUTTONS_SHEET, wml,                                         null, null, null, null, 17, 16, 16, 17);            thisObject.screenObjects.add(levelsButton);                        finalResultText = gameObject.add.text(325, 160, 'Final result: ' + finalResult(wml.getScore()), wml.Utility.getTextStyle17());            finalResultText.anchor.set(0.5, 0.5);            finalResultText.update = function () {                var finalResultTextObject = this;                finalResultTextObject.setText('Final result: ' + finalResult(wml.getScore()));            }            thisObject.screenObjects.add(finalResultText);            wml.fadeInGroup(thisObject.screenObjects);        }    };    }(window.MyGame)));