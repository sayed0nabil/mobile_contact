


function isEmpty(value){
    return value === null 
    || value === undefined
    || (value instanceof Array && value.length === 0)
    || (typeof value === 'object' && Object.keys(value).length == 0)
    || (typeof value === 'string' && value.trim().length === 0)
}


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
