
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8E4DBEFD-B662-4D55-A6CB-8D77FD9BA1A3"}
 */

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2B33BDAB-CD16-45DB-9AF3-CE15B92E411B"}
 */
var pri;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F421B2B2-8E04-4DA5-8160-D1F2AEC27834"}
 */
var prod;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7D26E631-32B0-4B7B-8280-73C6996F1384"}
 */
var quant; 

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"A216074F-7329-49E7-93A3-B00BF31B90AD"}
 */
function onAction(event) {
	// TODO Auto-generated method stub

	

	databaseManager.saveData();
	application.output("saved");
	
	history.back();
}

/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"37211E50-4B6A-435E-BAEE-A37432BB39C0"}
 */
function onFocusGained(event) {
	// TODO Auto-generated method stub
	databaseManager.setAutoSave(false);
}

/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"07991C02-6865-4935-AEFD-8C3D72AA1C9D"}
 */
function on(event) {
	// TODO Auto-generated method stub
	
	databaseManager.setAutoSave(false);
	
}

/**
 * @param {JSEvent} event
 * @param {string} dataTarget
 *
 * @properties={typeid:24,uuid:"505FAC37-F268-4516-B55F-92E642615F0E"}
 */
function onAction1(event, dataTarget) {
	// TODO Auto-generated method stub
	history.back();

}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"BEE16AFD-4EE8-4208-B5F4-91D34A078613"}
 */
function onDataChange(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	
	return true
}

/**
 * @properties={typeid:24,uuid:"CCC3BDF1-849C-4E89-984B-15D8BBC4A39B"}
 */

/**
 * @properties={typeid:24,uuid:"2DFB7F50-181B-4BE6-8493-0AA5840246F0"}
 */
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"649BACD3-3D73-442C-93B0-A7FE52E2A2C9"}
 */

