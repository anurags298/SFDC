({
	doInit : function(component, event, helper) {
		var action = component.get("c.GetAccounts");
        action.setCallback(this, function(response){
            component.set("v.accountList", response.getReturnValue());
            //alert(JSON.stringify(response.getReturnValue()));
        });
        $A.enqueueAction(action);
	}
})