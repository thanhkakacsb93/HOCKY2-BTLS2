// function thanh(){
//     let num = [48, 75, 92, 61, 54, 83, 76];
//     let max = num.reduce(function(a, b){
//     // return (accumulator > element) ? accumulator : element
//     if(a > b){
//        return (a=a);
//     }
//     else {
//         return (a=b);
//     }
//     }, 0);

//     console.log(max);
// }
// // thanh();

// function anh(){

//     let num = [1, 2, 3, 2, 3, 4, 7, 7, 8];
    
//     let x = num.reduce(function(a, b){ 
//         if(a.indexOf(b)==-1){
//             a.push(b);
//         }
//         return (a);
//     }, [])
//     console.log(x);
// }
// // anh();

// function array_unique(array){
//     array.sort();

//     let max =[0,0];

//     //Sử dụng vòng lặp for để lọc ra các phần tử xuất hiện nhiều hơn 1 lần
//     //So sánh số lần xuất hiện và thay đổi max khi cần.
//     let count =1;
//     for (let i = array.length-1; i > 0; --i) {
//         if (array[i] == array[i-1]) ++count; //Thấy phần tử trùng nhau thì tiếp tục đếm
//         else{
//              //So sánh số lần xuất hiện với max[1] 
//              if (max[1] < count){ 
//                   //Nếu tìm thấy phần tử xuất hiện nhiều hơn thì gán phần tử vào max[0]
//                   //Và gán số lần xuất hiện vào max[1]
//                   max[0] = array[i];
//                   max[1] = count;   
//              }
//              count = 1;
//         }
//     }
//     console.log( "Phần tử "+max[0]+" xuất hiện nhiều nhất với "+max[1]+" lần");
// }


// // let array = [ 7, 7, 6, 7, 6, 6, 8 ];


// //Tìm phần tử xuất hiện nhiều nhất trong mảng JavaScript
// // array_unique(array);

// function homework3 (){
//         let arr = [7, 7, 6, 7, 5, 6, 8];
//         let x=1;
//         let y=1;
//         // console.log(arr.length);
//         // let z
//         for( let i = 0; i < arr.length; i++)
//         {
//             console.log(arr[i]);
//             // for( let j=i+1; j < arr.lenght; j++)
//             // {
//             //     if( arr[i]==arr[j])
//             //     {
//             //         y=y+1;
//             //         console.log(y);
//             //     }
//             // }
      
//         }
//     }
//     // }
//     homework3();
function thanh(){
    let btn = document.getElementById(`btn`);
    btn.addEventListener(`click`, nhan)
    let a;
    let c
    function nhan(){
        let b=0;
        a = b+6;
        // console.log(a);
    }
    let btn2 = document.getElementById(`btn2`);
    // btn2.addEventListener(`click`, tong);
    console.log(a);
    // function tong(){
    //     c=a*2
    //     console.log(c);
    // }
    
}
thanh()