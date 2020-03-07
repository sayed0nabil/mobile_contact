
let contacts = [];
// on Load Page
/*

    1. Get Json From Local Storage
    2. Convert Json To Array And Assign It To contacts array variable
    2. Create GUI Div In Main Page Of Each Object In Array
*/



// Constructor Function Of Contact Object
// gender = 0 --> Male || gender = 1 --> Female
let id = 0;
function Contact(name, phone, email, gender){
    this.id = ++id;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.gender = gender;
}

// Object For Example
//  let newContact = new Contact("Elsayed Nabil", "01279425232", "sayed0nabil@gmail.com", 0);


function saveButtonClicked(event){
    /*
    1. Check About Validation
    2. Create New Contact Object
    3. Add new Contact Object To Array
    4. Convert Array To Json And Save It In LocalStorage
    5. Add New Contact To GUI
    */
}



function contactClicked(){
    /*
    1. Get Name Of Contact And Set It As Header In Profile Page
    2. Get Gender Of Contact And Set Image depend On It
    3. Get Number Of Contact And Set It In Phone Icon
    */
}


function deleteContact(){
    /*
    1. Get Id Of Contact 
    2. Delete Contact From Array
    3. Convert Array To Json And Save It In LocalStorage
    4. Remove GUI Div That Represent Contact
    */
}


// If We Have Time We Can Make Some Utilization
/*
    1. Make Footer In Bottom Section All Time
    2. Make Update Profile Page

*/