function Game_of_3s(num){
    while(num > 1){
        if(num % 3 == 0){
            console.log(num, 0);
            num /= 3;
        } else if(num % 3 == 1){
            console.log(num, -1); 
            num = (num - 1) / 3;
        } else {
            console.log(num, +1); 
            num = (num + 1) / 3;
        }
    }
    console.log(1);
}
Game_of_3s(100);
