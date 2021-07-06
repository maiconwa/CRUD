(function(win,doc){
    'use strict';

    //Verifica se o usuário realmente quer deletar o dado.
    if(doc.querySelector('.btnDel')){
        let btnDel = doc.querySelectorAll('.btnDel');
        for(let i=0; i < btnDel.length; i++){
            btnDel[i].addEventListener('click', function(event){
                if(confirm('Deseja mesmo apagar este dado?')){
                    return true;
                }else{
                    event.preventDefault();
                }
            });
        }
    }

    //Ajax do form
    if(doc.querySelector('#form')){
        let form=doc.querySelector('#form');
        function sendForm(event)
        {
            event.preventDefault();
            let data = new FormData(form);
            let ajax = new XMLHttpRequest();
            let token = doc.querySelectorAll('input');
            ajax.open('POST', form.action);
            ajax.setRequestHeader('X-CSRF-TOKEN',token);
            ajax.send(data);
        }
        form.addEventListener('submit',sendForm, false);
    }

})(window, document);