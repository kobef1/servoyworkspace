
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"B93C03D5-22EB-42BF-868D-0738EBCD03EA"}
 */
function Del(event) {
	// TODO Auto-generated method stub
	foundset.deleteRecord();
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"EFA6C344-ABBA-49B7-8AEC-A668B53B3CCC"}
 */
function Edit(event) {
	// TODO Auto-generated method stub
	forms.Edit.controller.show();
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"3D0EFD21-781A-4555-9926-718B30DBE02B"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	forms.Home.controller.show();
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"31C77883-B54E-40EF-8896-487A8A57D765"}
 */
function onAction1(event) {
	// TODO Auto-generated method stub
	foundset.newRecord();
	forms.product.controller.show();
	

}
