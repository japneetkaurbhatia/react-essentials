public class Ixigo {
    
    // var = 0 -> n - 1


    // for (var i = 0; i < 5; i++) {
    //     setTimeout(() => console.log(i), 0); 
    // }


    // var = 1

    // for (let i = 0; i < 5; i++) {
    //     setTimeout(() => console.log(i), 0);
    // }


    const promise = new Promise((resolve, reject) => {
        console.log(1);
        setTimeout(() => console.log(2));
        resolve(3);
        console.log(4);
    });
    
    // promise.then(data => {
    //     console.log(data)
    // });

    // output
    1sec -> 1 2 -> var 3, 4 data
    data -> 3


    1
    2
    4


    // create a autocomplete
    // input box -> enter input -> fetch from api -> how to user


}
