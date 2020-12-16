//Hides the optional text box by default
$("#contact-us-who").hide();

//Whenever a new option is selected in "How did you hear about us?"
$("#contact-us-options").on("change", function() {
    //we check if it is 1 of the 3 options that requires aditional info, if so
    let selected = $("#contact-us-options").val();
    //change the placeholder for the additional info field correspondingly
    if (selected == "partner" || selected == "employee" || selected == "other"){
        $("#contact-us-who input").attr("placeholder", `example-${selected}`);
       
        //and reenable it so that it can be seen
        $("#contact-us-who").show();
    }
    //if it is not 1 of those 3 options, the additional info field is hidden
    else $("#contact-us-who").hide();
});