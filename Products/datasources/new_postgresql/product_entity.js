/**
 * @properties={typeid:24,uuid:"2885A3AB-CF93-472B-A96A-8090F28649C1"}
 */
function validate()
{
var markers = [];
	
	var requiredFields = [
		'prodname',
		'price',
		'quantity'
	];
	for(var i in requiredFields){
		var dataProviderID = requiredFields[i];
		var title = databaseManager.getTable(this).getColumn(dataProviderID).getTitle();
		if(!getSelectedRecord()[dataProviderID]){
			markers.push({dataProviderID:dataProviderID,message:'Missing required field: ' + title});
		}
	}

	return markers;
	// TODO Auto-generated method stub
}
