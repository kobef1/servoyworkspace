
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"ABFC2F4A-A44C-4EB2-9D99-79D67CE99E98"}
 */
function save(event) {
	// TODO Auto-generated method stub
	databaseManager.saveData();
	history.back();
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"8B126F96-E43C-4450-B853-AA1B9EFC7352"}
 */
function back(event) {
	// TODO Auto-generated method stub
	history.back();
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"1B066D51-CE58-4C2C-8B13-72FE60421AD8"}
 */
function onFocusGained(event) {
	// TODO Auto-generated method stub
	databaseManager.setAutoSave(false);
}

/**
 * @properties={typeid:24,uuid:"DE817621-6A13-41FD-BA7E-6190360BF180"}
 */
