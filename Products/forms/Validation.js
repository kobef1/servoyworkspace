/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"487F5EB8-3B1D-4687-9EA3-C75AA1AFA02A"}
 */
var callout = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4D12737C-3CAB-45C0-943E-93B0DEDC2DA8"}
 */
var INVALID = 'invalid';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"05E3FFCB-94A8-4558-B57F-F2F722FC26B7"}
 */
var VISIBLE = 'visible';

/**
 * @protected 
 * @type {Array<{dataProviderID:String,message:String}>}
 * @properties={typeid:35,uuid:"8CD2FB88-579E-432E-98BA-4EC0CE1A1E43",variableType:-4}
 */
var validationMarkers = {};

/**
 * Handle changed data, return false if the value should not be accepted. 
 * In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"1584DBFD-13B8-43D1-A334-7CE60102F175"}
 */

/**
 * @properties={typeid:24,uuid:"BF0D8ECB-9B6E-4F1C-801E-2E2C705190D3"}
 */


/**
 * @properties={typeid:24,uuid:"A08F5673-1014-40A5-BF54-AD0A8960051C"}
 */

function validate(){
	validationMarkers = [];
	
	/** @type {Function} */	
	var validationHandler = foundset['validate'];
	if(validationHandler){		
		validationMarkers = validationHandler();
	}
	updateUI();
	return validationMarkers.length > 0;
}

/**
 * @properties={typeid:24,uuid:"01D33F47-9CB4-42EE-8080-53D65597C231"}
 */
function updateUI(){
	
	
	// collect messages
	var messages = [];
	
	//	check each field
	for(var i in elements.allnames){
		var name = elements.allnames[i];
		var e = elements[name];
		/** @type {RuntimeTextField} */
		var field = e;
		if(!field.getDataProviderID) continue;	// really anything that can have a data provider
		
		//	Error marker associated with this field's data provider
		var marker = getMarker(field);
		if(marker){
			
			// Add the invalid style class to the field nd set a tooltip
			field.addStyleClass(INVALID);
			field.toolTipText = marker.message;
			
			// move callout bubble
			var x = 400; //field.getLocationX() + field.getWidth() + 10;
			var y = field.getLocationY();
			elements.callout.setLocation(x,y)
			
			// collect messages
			messages.push(marker.message);
			
		//	no markers associated with this field's data provider
		} else {
			field.removeStyleClass(INVALID);
			field.toolTipText = '';
		}
	}
	
	// add messages to callout bubble and show (fade-in)
	if(messages.length){
		callout = messages.join('<br>');
		elements.callout.addStyleClass(VISIBLE);

	// no messages?  then hid callout
	} else {
		elements.callout.removeStyleClass(VISIBLE);
		callout = '';
	}
}

/**
 * @protected 
 * @param {RuntimeTextField} target
 * @return {{dataProviderID:String,message:String}}
 * @properties={typeid:24,uuid:"094B707D-E220-45B4-8D2A-44F9E69FBA43"}
 */
function getMarker(target){
	for(var i in validationMarkers){
		var marker = validationMarkers[i];
		if(marker.dataProviderID == target.getDataProviderID()){
			return marker;
		}
	}
	return null;
}
	
	

	/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"4AE6DBA9-53C0-4AD3-B1AD-263F32E195AC"}
 */

	
	/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"551BB1F2-EDFB-420F-B180-B386F7A8BDD8"}
 */
function onElementDataChange1(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	validate();
	return true
}
	