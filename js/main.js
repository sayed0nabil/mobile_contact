
let contacts = [];
let activeContact = null;
// on Load Page
/*

    1. Get Json From Local Storage
    2. Convert Json To Array And Assign It To contacts array variable
    2. Create GUI Div In Main Page Of Each Object In Array
*/

$(document).ready(function(){
    let json = localStorage.getItem("contacts");
    if(json != null){
        contacts = JSON.parse(json);
    }
    for(const contact of contacts)
        addGUIContact(contact);
    json = localStorage.getItem("activecontact");
    if(json != null){
        activeContact = JSON.parse(json);
        viewContactProfile(activeContact);
    }
        
})

// Constructor Function Of Contact Object
// gender = 0 --> Male || gender = 1 --> Female
function Contact(name, phone, email, gender){
    this.id = new Date().getTime();
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.gender = gender;
}

// Object For Example
//  let newContact = new Contact("Elsayed Nabil", "01279425232", "sayed0nabil@gmail.com", 0);

function addGUIContact(contact){
    console.log("Id: " + contact.id);
    let gender = "boy"
    if(contact.gender === 1){
        gender = "girl";
    }
    let li = $("<li>", {id: `li${contact.id}`, "class":"ui-li-has-alt ui-li-has-thumb ui-last-child"});
    let firstLink = $("<a>", {"href":"#profilepage", "class":"ui-btn"});
    firstLink.on('click', function(event){
        activeContact = contact;
        localStorage.setItem("activecontact", JSON.stringify(contact));
        viewContactProfile(contact);
    });
    let img = $("<img>", {"src": `./images/${gender}.jpg`, "width":"100", "height":"100", "alt": "Male Person"});
    firstLink.append(img)
    firstLink.append(contact.name + "<br><br> <span style='color: #e6c46d'>" + contact.phone + "</span>");
    let secondLink = $("<a>", {"href":`tel:${contact.phone}`, "class":"ui-btn ui-btn-icon-notext ui-icon-phone ui-btn-d"});
    li.append(firstLink);
    li.append(secondLink);
    $("#listview_id").append(li);


    // After Add Contact Return Switch Button To Male
    $("#slider-flip-m")[0].selectedIndex = 0;
}

function addContactToArrayAndLocalStorage(contact){
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
}

function saveButtonClicked(event){
    /*
    1. Check About Validation
    2. Create New Contact Object
    3. Add new Contact Object To Array
    4. Convert Array To Json And Save It In LocalStorage
    5. Add New Contact To GUI
    */
    const name = $("#name_id").val().trim();
    const phone = $("#number-pattern").val();
    const email = $("#email_id").val().trim();
    const gender = $("#slider-flip-m")[0].selectedIndex;
    if(!isEmpty(name) && !isEmpty(phone) && ( isEmpty(email) || validateEmail(email) )){
        $("#name_error_id").css("visibility", "hidden");
        $("#phone_error_id").css("visibility", "hidden");
        let newContact = new Contact(name, phone, email, gender);
        addContactToArrayAndLocalStorage(newContact);
        addGUIContact(newContact);
        $("#name_id").val("");
        $("#number-pattern").val("");
        $("#email_id").val("");
        $("#slider-flip-m")[0].selectedIndex = 0;
    }else{
        event.preventDefault();
        if(isEmpty(name)){
            $("#name_error_id").css("visibility", "visible");
        }
        else
            $("#name_error_id").css("visibility", "hidden");
        if(isEmpty(phone)){
            $("#phone_error_id").css("visibility", "visible");
        }
        else
            $("#phone_error_id").css("visibility", "hidden");    
        if(!isEmpty(email) && !validateEmail(email)){
            $("#email_error_id").css("visibility", "visible");
        }
        else
            $("#email_error_id").css("visibility", "hidden");   
    }
}



function viewContactProfile(contact){
    console.log(contact);
    /*
    1. Get Name Of Contact And Set It As Header In Profile Page
    2. Get Gender Of Contact And Set Image depend On It
    3. Get Number Of Contact And Set It In Phone Icon
    */
    var name =contact.name;
    var phone =contact.phone;
    document.getElementById("NameOfContact_id").textContent=name;

    if(contact.gender === 1){
        gender = "girl";
        document.getElementById('image_id').src='./images/girl.jpg'
    }else
    {
        document.getElementById('image_id').src='./images/boy.jpg'
    }

    $("#phone_id").attr("href", `tel: ${contact.phone}`) ;
    $("#phone_id").addClass("ui-btn ui-btn-icon-notext ui-icon-phone ui-btn-d");
}

function deleteButtonClicked(event){
    if(activeContact == null){
        event.preventDefault();
        alert("NO CONTACT SELECTED");
    }else{

    }
}

Array.prototype.removeIf = function(callback){
    for(let i=0; i<this.length; i++){
        if(callback(this[i]))
            this.splice(i, 1);
    }
}
function confirmDeletion(){
    deleteContact(activeContact)
}

function deleteContact(contact){
    /*
    1. Get Id Of Contact 
    2. Delete Contact From Array
    3. Convert Array To Json And Save It In LocalStorage
    4. Remove GUI Div That Represent Contact
    */
    console.log(contacts);
    console.log(contact.id);
    contacts.removeIf(contactItem => contactItem.id === contact.id );
    localStorage.setItem("contacts", JSON.stringify(contacts));
    $(`#li${contact.id}`).remove();
}



// If We Have Time We Can Make Some Utilization
/*
    1. Make Footer In Bottom Section All Time   << Done >>
    2. Make Update Profile Page

*/