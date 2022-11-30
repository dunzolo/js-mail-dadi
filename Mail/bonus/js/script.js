const array_email = [
    'rossidavide108@gmail.com', 
    'boolean@boolean.com', 
    'esercizio.mail@gmail.com',
    'mail@mail.com',
    'pippo@pippo.it',
    'paperino@boolean.it'
]

let button = document.getElementById('button');

button.addEventListener('click', function(){
    
    let email_user = document.getElementById('email-user').value;
    console.log('Email inserita:' + email_user);

    let flag = false;
    
    for(let i = 0; i < array_email.length; i++){
        if(array_email[i] == email_user){
            flag = true;
        }
    }
    
    if(flag){
        document.getElementById('email-verify').innerHTML = `La tua email ${email_user} è presente nell'elenco. Puoi accedere!`;
    }
    else{
        document.getElementById('email-verify').innerHTML = `La tua email non è presente nell'elenco. NON puoi accedere!`;

    }

})
