({

	calculate : function(component, event, helper) {

        var date = component.get("{!v.DateTime}");
    

        var rezult = date.getTime(); 

        component.set("{!v.outputUnix}", rezult);

       //не понимаю как конвертировать в unix timestamp... с этим все проблемы

    

	}
