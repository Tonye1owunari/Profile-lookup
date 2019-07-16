var contacts = [
    {
        'firstName':'Akira',
        'lastName':'Laine',
        'number':'08048783985',
        'likes':['Pizza','Coding','Brownie']
    },
    {
        'firstName':'Harry',
        'lastName':'Potter',
        'number':'08144893783',
        'likes':['Wonds','Magic','Hogwarts']            
    },
    {
        'firstName':'Sherlock',
        'lastName':'Holmes',
        'number':'07048783985',
        'likes':['Mentalism','Violin']           
    },
    {
        'firstName':'Tamunotonye',
        'lastName':'Owunari',
        'number':'unknown',
        'likes':['Javascript','Coding','You']            
    }
];

function lookUpProfile(name,prop) {
    for (i=0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || 'No such property';
        }
    }
    return 'No such contact';
}
console.log(lookUpProfile('Tamunotonye','lastName'));
console.log(lookUpProfile('Tamunotonye','age'));
console.log(lookUpProfile('Sarah','lastName'));
console.log(lookUpProfile('Sherlock','number'));