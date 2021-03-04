

function calc(){

    let number = usersINN.value;

    let arr = [...number];

    console.log(arr);

    let controlSum = arr[0] * (-1) + arr[1] * 5 + arr[2] * 7 + arr[3] * 9 + arr[4] * 4 + arr[5] * 6 + arr[6] * 10 + arr[7] * 5 + arr[8] * 7;

    console.log(controlSum);

    let controlN = controlSum % 11 % 10;


    console.log(controlN);

    if(controlN == arr[9] && arr[8] % 2 == 0){

        resultPlace.innerHTML = 'Номер корректный, пол женский';

    }else if(controlN == arr[9] && arr[8] % 2 != 0){

        resultPlace.innerHTML = 'Номер корректный, пол мужской';
        
    }else{
        resultPlace.innerHTML = "Номер некорректый";
            
    }

}