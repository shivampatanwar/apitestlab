
let method = document.getElementById('method');
let url = document.getElementById('url');
let body = document.getElementById('body');
let btn = document.getElementById('btn');
let response = document.getElementById('response');
let beautify = document.getElementById('beautify');



beautify.addEventListener('click', function (e) {
    if (body.value != '') {
        body.value = JSON.stringify(JSON.parse(body.value), null, 2);
    }
});



btn.addEventListener('click', function (e) {
    e.preventDefault();
    let header= {
        method: method.value,
    }   



    if(method.value == 'POST' || method.value == 'PUT' || method.value=='PATCH' ){

        let obj = JSON.parse(body.value);
        header.body=JSON.stringify(obj); 
        header.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }

    fetch(url.value, header)
    .then(resp => resp.json())
    .then((data) => {
        response.value = JSON.stringify(data, null, 2);

    })
    .catch((error) => {
        response.value = error;
    });

});


