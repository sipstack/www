//Hides the optional text box by default
$("#contact-us-who").hide();

//Whenever a new option is selected in "How did you hear about us?"
$("#contact-us-options").change(function() {
    //we check if it is 1 of the 3 options that requires aditional info, if so
    let selected = $("#contact-us-options").val();
    //change the placeholder for the additional info field correspondingly
    if (selected == "partner" || selected == "employee" || selected == "other"){
        if (selected == "partner") {
            $("#contact-us-who input").attr("placeholder", "example-partner");
        }
        else if (selected == "employee") {
            $("#contact-us-who input").attr("placeholder", "example-employee");
        }
        else if (selected == "other") {
            $("#contact-us-who input").attr("placeholder", "example-other");
        }

        //and reenable it so that it can be seen
        $("#contact-us-who").show();
    }
    //if it is not 1 of those 3 options, we hide the additional info field
    else $("#contact-us-who").hide();
});