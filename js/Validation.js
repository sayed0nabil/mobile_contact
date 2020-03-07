


function isEmpty(value){
    return value === null 
    || value === undefined
    || (value instanceof Array && value.length === 0)
    || (typeof value === 'object' && Object.keys(value).length == 0)
    || (typeof value === 'string' && value.trim().length === 0)
}