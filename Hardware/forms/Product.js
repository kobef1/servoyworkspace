
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"B1111D24-4129-4525-8B82-1E84C4AA9728"}
 */


/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8F1B03F2-0467-4DBA-876C-E27A8B301BD4"}
 */
var price1;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"03A9290D-BC5C-457A-8AE9-9B1137BF7657"}
 */
var name;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6E613D5A-0506-4EE0-9EF6-F7A08A798957"}
 */
var quant;
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"A2DF2981-FB91-4052-8BE0-62E5D7938024"}
 */

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"8B8EA2D3-DFD0-4C07-94B4-97678514DE87"}
 */
function submit(event) {
	// TODO Auto-generated method stub
databaseManager.startTransaction();
	foundset.prodname = name;
	foundset.price = price1;
	foundset.quan = quant;
	
	foundset.newRecord();
	databaseManager.saveData();
	databaseManager.setAutoSave(true);
	application.output("saved");
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"77AA277C-B227-4B95-AAE0-0B0AE86CDB2B"}
 */
function onFocusGained(event) {
	// TODO Auto-generated method stub
	
	databaseManager.setAutoSave(false);
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"43485975-DEF4-44AF-ABEA-2C584B9ADAAC"}
 */
function onFocusGained1(event) {
	// TODO Auto-generated method stub
	databaseManager.setAutoSave(false);
	foundset.newRecord();

}
