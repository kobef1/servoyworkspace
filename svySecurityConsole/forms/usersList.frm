customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/svy_security/users",
extendsID:"EAE3DC77-8EEA-41E2-8564-F52829D98C82",
items:[
{
anchors:0,
cssPosition:"160,10,-109,10,780,429",
customProperties:null,
extendsID:"904AF726-ED01-443E-A94B-4F28A5F4D28D",
json:{
anchors:0,
columns:[
{
autoResize:false,
dataprovider:"tenant_name",
headerText:"Tenant",
svyUUID:"36A630B9-E113-47E7-B8FA-9BD97E82C81B",
width:"160"
},
{
dataprovider:"user_name",
headerText:"User",
svyUUID:"FC82C900-274B-40D0-9C35-EB05CA878670",
width:"160"
},
{
dataprovider:"display_name",
headerText:"Display Name",
svyUUID:"C684D708-2D6D-417B-99AB-B6D86749B100"
},
{
dataprovider:"creation_datetime",
format:"yyyy-MM-dd HH:mm",
headerText:"Last Login",
svyUUID:"650569B6-E80C-4499-92A3-D5B98A63A659",
width:"180"
}
],
cssPosition:{
bottom:"-109",
height:"429",
left:"10",
right:"10",
top:"160",
width:"780"
},
foundset:{
foundsetSelector:""
}
},
typeid:47,
uuid:"51B677FF-9D39-4056-A2C3-D69DC1B2C61B"
}
],
name:"usersList",
namedFoundSet:"separate",
titleText:"All Users",
typeid:3,
uuid:"B96B4914-7993-41CC-BE8C-AB3ABF22E5D1"