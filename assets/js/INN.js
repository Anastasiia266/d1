

function calc(){

    let number = usersINN.value;

    let arr = [...number];

    console.log(arr);

    let controlSum = arr[0] * (-1) + arr[1] * 5 + arr[2] * 7 + arr[3] * 9 + arr[4] * 4 + arr[5] * 6 + arr[6] * 10 + arr[7] * 5 + arr[8] * 7;

    let controlN = controlSum % 11 % 10;

    let days = +arr.slice(0,5).join('');

    console.log(days);

    let date = new Date(1899, 11, 31);

    date.setDate(date.getDate() + days);

    let Ndate = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();

    console.log(date);

    let today = new Date();

    let age = Math.round((today - date) / 1000 / 60 / 60 / 24 / 365) ;

    console.log('Age:', age);

    console.log('Control number:', controlN);

    if(controlN == arr[9] && arr[8] % 2 == 0){

        resultPlace.innerHTML = "Номер корректный" + '<br/>' + "Пол: женский" + '<br/>' + "Дата рождения: " + `${Ndate}` +  '<br/>' + 'Возраст: ' + `${age}`;

    }else if(controlN == arr[9] && arr[8] % 2 != 0){

        resultPlace.innerHTML = "Номер корректный" + '<br/>' + "Пол: мужской" + '<br/>' + "Дата рождения: " + `${Ndate}`+  '<br/>' + 'Возраст: ' + `${age}`;
        
    }else{
        resultPlace.innerHTML = "Номер некорректый";
            
    }

}