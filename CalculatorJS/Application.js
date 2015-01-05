/**
 * APPLICATION is a main application file that holds general properties and functions for the whole application
 * It also holds the main Calculator namespace. All necessary initializations are made in init() function. 
 * @module APPLICATION
 */
var APPLICATION = APPLICATION || {
	name: "Calculator",
	version: "1.0.0",
	Constants: function () {},
	namespace: function () {},
	getName: function () {
		return name;
	}, 
	
	/**
	 * Creates new immutable constant of the main application object.
	 * @class APPLICATION
	 * @method init
	 * @return {Object} Returs the main APPLICATION object. false if the creation failed somehow. It is called upon page load, so
	 * all necessary initializations which cannot be called befor page load should be called in this function. 
	 */
	init: function (config) {
		try {
			this.Calculator.Main.currentState = this.Calculator.Main.Constants.get(this.Calculator.Main.constMap.STANDARD);
			this.Calculator.Trigonometry.currentAngleFormat = this.Calculator.Trigonometry.Constants.get(this.Calculator.Trigonometry.constMap.DEGREES);
			return this;
		} catch (error) {
			console.log(error.message);
			return false;
		}
	}
};

/**
 * Constants is a contructor so it should be called with new keyword. Each object should have its own Constants object.
 * Creates object of four functions, set(), isDefined(), list() and get() which enable creation of new immutable constant
 * that cannot be changed with Firebug or other debugging tool. 
 * @class APPLICATION
 * @method Constants
 * @return {Object} Returs object with functions necessary to define new constant and prevent its change. 
 */
APPLICATION.Constants = function () {
	var constants = {},
		ownProp = Object.prototype.hasOwnProperty,
		allowed = {
			string: 1,
			number: 1,
			boolean: 1
		},
		prefix = (Math.random() + "_").slice(2);
		
	return {
	
		/**
		 * Creates new immuatble constant. 
		 * @class Constants
		 * @method set
		 * @return {Boolean} Returs true if new constant is created or false otherwise.
		 */
		set: function (name, value) {
			if (this.isDefined(name)) {
				return false;
			}
			if (!ownProp.call(allowed, typeof value)) {
				return false;
			}
					
			constants[prefix + name] = value;
			return true;
		},
		
		/**
		 * Creates new immuatble constant. 
		 * @class Constants
		 * @method isDefined
		 * @return {Boolean} Returs true if new constant is created or false otherwise.
		 */
		isDefined: function (name) {
			return ownProp.call(constants, prefix + name);
		},
		
		/**
		 * Returns the value of the required constant. 
		 * @class Constants
		 * @method get
		 * @return {Object} Returns the value of the required constant. 
		 */
		get: function (name) {
			if (this.isDefined(name)) {
				return constants[prefix + name];
			}
			return null;
		},
		
		/**
		 * Lists all constants with their values in array like format. Useful in JavaScript console. 
		 * @class Constants
		 * @method list
		 */
		list: function () {
			var index = 0,
				newStr = "";
				
			for (constant in constants) {
				index = constant.indexOf('_');
				newStr = constant.substr(index + 1);
				console.log(newStr + ": " + constants[constant]);
			}
		}
	};
};

/**
 * Creates objects and subobjects by using just a string in dotted notation. 
 * Example namespace('my.new.namespace'); will create object 'my' that contains subobject 'new', which contains 
 * subobject 'namespace'. 
 * @class APPLICATION
 * @method namespace
 * @param {String} String describing the namespace of objects separated by a dots. 
 * @param {Object} And object to initialize each of the newly created subobject. If you add a property with all caps it will consider it as a
 * constant and therefore use Constants object to create new constant that cannot be changed using Firebug and console. 
 * @return {Object} Returns the new object that represents the new namespace of objects and subobjects, defined by the dots in the string
 * argument.
 */
APPLICATION.namespace = function (nsString, newObjectDefinition) {
	var parts = nsString.split('.'),
		parent = this,
		newObject = {};
		
	newObject.Constants = new this.Constants();
	newObject.constMap = {};
	
	if (parts[0] === this.getName()) {
		parts = parts.slice(1);
	}
	
	for (var i = 0; i < parts.length; i += 1) {
		if (typeof parent[parts[i]] === "undefined") {			
			for (var property in newObjectDefinition) {
				if (property === property.toUpperCase()) {
					newObject.Constants.set(property, newObjectDefinition[property]);
					newObject.constMap[property] = property;
				} else {
					newObject[property] = newObjectDefinition[property];
				}
			}
			parent[parts[i]] = newObject;
		}
		parent = parent[parts[i]];
	}	
	
	return parent;
};

/**
 * Calculator submodule. It contains all calculator related properties, methods and submodules, like, Main, Trigonometry.
 * @submodule Calculator
 */
 APPLICATION.namespace('Calculator', {
	
});

/**
 * Main class object for all properties and methods of the Calculator application
 * @submodule Calculator
 * @class Main
 */
APPLICATION.namespace('Calculator.Main', {
	
	/**
	 * STANDARD is a constant of a value 1 which describes state in which the Calculator holds only basic math operations
	 * like aritmetic operations.
	 * @property STANDARD
	 * @type {Number}
	 * @final
	 * @default 1
	 */
	STANDARD: 1,

	/**
	 * SCIENTIFIC is a constant of a value 2 which describes state in which the Calculator holds basic math operations
	 * but also trigonometric, exponential, logaritmic, factorial etc...
	 * @property SCIENTIFIC
	 * @type {Number}
	 * @final
	 * @default 2
	 */
	SCIENTIFIC: 2,

	 /**
	 * PROGRAMMER is a constant of a value 3 which describes state in which the Calculator holds basic math operations
	 * but also binary, hexadecomal and logical operations.
	 * @property PROGRAMMER
	 * @type {Number}
	 * @final
	 * @default 3
	 */
	PROGRAMMER: 3, 
	
	/**
	 * currentState is the current state of the Calculator, which can be between STANDARD(1), SCIENTIFIC(2) and PROGRAMMER(3)
	 * @property currentState
	 * @type {Number}
	 * @default 1 (STANDARD)
	 */
	currentState: null,

	/**
	 * A property that holds current value of the Calculator
	 * @property currentValue
	 * @type {Number}
	 * @default 0
	 */
	currentValue: 0,

	/**
	 * A property that holds memorized value
	 * @property memoValue
	 * @type {Number}
	 * @default 0
	 */
	memoValue: 0,
	
	/**
	 * A property showing whether digit grouping is enabled(true) or diabled(false)
	 * @property digitGrouping
	 * @type {Boolean}
	 * @default false (disabled)
	 */
	digitGrouping: false,
	
	/**
	 * A property showing whether history panel is displayed(true) or hidden(false)
	 * @property historyPanel
	 * @type {Boolean}
	 * @default false (hidden)
	 */
	historyPanel: false,
	
	/**
	 * A property showing whether unit conversion panel is displayed(true) or hidden(false)
	 * @property unitConversionPanel
	 * @type {Boolean}
	 * @default false (hidden)
	 */
	unitConversionPanel: false,
	
	/**
	 * A property showing whether date calculation panel is displayed(true) or hidden(false)
	 * @property dateCalculationPanel
	 * @type {Boolean}
	 * @default false (hidden)
	 */
	dateCalculationPanel: false,
		
	/**
	 * Changes the state of the Calculator and displays different sets of buttons/operations 
	 * specific to each state: STANDARD, SCIENTIFIC, PROGRAMMER
	 * @event changeState
	 * @param {Object} event Event object holding event specific data
	 */
	changeState: function (event) {
		/** 
		 * @todo currentState = event.newState;
		 */
	},
		
	/**
	 * Displays the history panel
	 * @event showHistoryPanel
	 * @param {Object} event Event object holding event specific data
	 */
	showHistoryPanel: function (event) {
		/** 
		 * @todo 
		 */
	},
		
	/**
	 * Displays the unit conversion panel
	 * @event showUnitConversionPanel
	 * @param {Object} event Event object holding event specific data
	 */
	showUnitConversionPanel: function (event) {
		/** 
		 * @todo 
		 */
	},
		
	/**
	 * Displays the date calculation panel
	 * @event showDateCalculationPanel
	 * @param {Object} event Event object holding event specific data
	 */
	showDateCalculationPanel: function (event) {
		/** 
		 * @todo 
		 */
	}
});

/**
 * Trigonometry class for all properties and methods specific for trigonometry
 * @submodule Calculator
 * @class Trigonometry
 */
APPLICATION.namespace('Calculator.Trigonometry', {
	/**
	 * DEGREES is a string constant which tells the whole application that angles are in degrees format.
	 * @property DEGREES
	 * @type {String}
	 * @final
	 * @default "degrees"
	 */
	DEGREES: "degrees",
	
	/**
	 * RADIANS is a string constant which tells the whole application that angles are in radian format.
	 * @property RADIANS
	 * @type {String}
	 * @final
	 * @default "radians"
	 */
	RADIANS: "radians",
	
	/**
	 * GRADS is a string constant which tells the whole application that angles are in grads format.
	 * @property GRADS
	 * @type {String}
	 * @final
	 * @default "grads"
	 */
	GRADS: "grads",
	
	/**
	 * currentAngleFormat is a string variable which represents current format of angles.
	 * @property currentAngleFormat
	 * @type {String}
	 * @default "null"
	 */
	currentAngleFormat: null
});

/**
 * Basic Events class for all needed events
 * @submodule Calculator
 * @class EventFunctions
 */
APPLICATION.namespace('Calculator.EventFunctions', {

	/**
	 * Called when 0 button was pressed
	 * @event pressZero
	 * @param {Object} event Event object holding event specific data
	 */
	pressZero: function (event) {
	
	},
	
	/**
	 * Called when 1 button was pressed
	 * @event pressOne
	 * @param {Object} event Event object holding event specific data
	 */
	pressOne: function (event) {
	
	},
	
	/**
	 * Called when 2 button was pressed
	 * @event pressTwo
	 * @param {Object} event Event object holding event specific data
	 */
	pressTwo: function (event) {
	
	},
	
	/**
	 * Called when sum(+) button was pressed
	 * @event pressSum
	 * @param {Object} event Event object holding event specific data
	 */
	pressSum: function (event) {
	
	},
	
	/**
	 * Called when subtract(-) button was pressed
	 * @event pressSubtract
	 * @param {Object} event Event object holding event specific data
	 */
	pressSubtract: function (event) {
	
	},
	
	/**
	 * Called when multiply(*) button was pressed
	 * @event pressMultiply
	 * @param {Object} event Event object holding event specific data
	 */
	pressMultiply: function (event) {
	
	},
	
	/**
	 * Called when divide(/) button was pressed
	 * @event pressDivide
	 * @param {Object} event Event object holding event specific data
	 */
	pressDivide: function (event) {
	
	}
});

APPLICATION.init({});