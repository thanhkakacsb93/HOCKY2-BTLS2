function homework1(){
    let ent =document.getElementById(`str`)
     //gán sự kiên enter
     ent.addEventListener(`keyup`, function(x){
         if (x.key=== `Enter`){
            str();
         }
     });
    let btn =document.getElementById(`btn`);
     //gán sự kiện click
    btn.addEventListener(`click`, str)
    function str(){
        let str =ent.value;
        let arr = str.split("");
        let reverseArr = arr.reverse();
        let reverseStr = reverseArr.join("");
        let lastString = document.getElementById(`Last-str`)
        let p1 = document.createElement(`span`);
            p1.innerHTML= `Chuỗi mới: `;
            lastString.appendChild(p1);
        let p2 =document.createElement(`span`);
            p2.innerHTML=reverseStr;
            lastString.appendChild(p2);
    }
}
homework1();

function homework2(){
    let ent =document.getElementById(`arr`);
     //gán sự kiên enter
     ent.addEventListener(`keyup`, function(x){
         if (x.key=== `Enter`){
            arr();
         }
     });
     // gán sự kiên click
     let btn = document.getElementById(`btn2`);
     btn.addEventListener(`click`, arr);
     function arr(){
        let str = ent.value;
        let arr = str.split(/[,\s]+/);
        //--------cách1 dùng vòng lặp for--------
        // for (let i=0 ; i < arr.length; i++){
        //     for ( let j=i+1; j < arr.length; j++){
        //         if( arr[i]==arr[j]){
        //             arr.splice(j, 1);
        //         }
        //     } 
        // }
        //  let lastStr = arr.join(`, `);
        //------xong cách 1-----------
        //-----------cách 2 dùng phương thước reduce và indexOf của array----
        let Arr2 = arr.reduce(function(a, b){
            if(a.indexOf(b)==-1){
                a.push(b);
            }
            return(a);
        }, [])
        let lastStr = Arr2.join(", ");
        //-------xong cách 2---------
        let lastArr = document.getElementById(`lastArr`)
        let span = document.createElement(`span`)
            span.innerHTML=`[${lastStr}]`
            lastArr.appendChild(span);
        let br = document.createElement(`br`);
            lastArr.appendChild(br);
    }
}
homework2()

function homework3 (){
let ent = document.getElementById(`arr3`)
//gán sự kiến enter
ent.addEventListener(`keyup`, function(x){
    if(x.key=== `Enter`){
        find();
    }
})
// gán sự kiện click
let btn3 = document.getElementById(`btn3`);
btn3.addEventListener(`click`, find)
function find(){
    let str = ent.value;
    let arr = str.split(/[,\s]+/);
    let x=0
    let y=1
    let vlue=[];
    let quantity=[1]
    for( let i = 0; i < arr.length-1; i++)
    {
        for( let j=i+1; j < arr.length; j++)
        {
            if( arr[i]===arr[j])
            {
                y=y+1;
            }
        }
        if(y>x)
        {
            x=y;
            vlue.splice(0, vlue.length);
            vlue.push(arr[i]);
            quantity.splice(0, quantity.length);
            quantity.push(y)
            y=1;
        }
        if(x==y)
        {
            vlue.push(arr[i]);
            y=1;
        }
        if(x > y){
            y=1
        }
    }
    let lastArr = document.getElementById(`lastArr3`);
    let span = document.createElement(`span`);
        span.innerHTML=`Phần tử xuất hiện nhiều nhất là:  ${vlue} với sô lần xuất hiện: ${ quantity}`
        lastArr.appendChild(span);
    let br = document.createElement(`br`);
        lastArr.appendChild(br);
}
}
homework3();

function homework4(){
    let Phonelist = [];
    // let phone = {};
    let btnAdd = document.getElementById(`btnAdd`);
    btnAdd.addEventListener(`click`, add);
    let clonekey;
    let cloneobjectPhone;
    let boxphone = document.querySelector(`.boxphone`);
    let boxshearch = document.querySelector(`.boxshearch`);
    // let btnDelete = document.querySelector(`.btnDelete`);
    function add(){
        
        let name = document.getElementById(`name`).value;
        let number = document.getElementById(`number`).value;
        let phone = {[name]: number};
            Phonelist.push(phone)
        let objectPhone = Phonelist.reduce((a,b) => Object.assign(a,b), {});
        cloneobjectPhone = {...objectPhone};
        let key = Phonelist.map(itemt => Object.keys(itemt)).flat();
            // key.sort();
            key.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        // console.log(key);
            clonekey=[...key];
        // let boxphone = document.querySelector(`.boxphone`);
            boxphone.innerHTML=``;
        for(let i=0; i<key.length; i++){
            let div4 = document.createElement(`div`);
                div4.classList.add(`line`)
            let span1 = document.createElement(`span`);
                span1.innerHTML= key[i];
                div4.appendChild(span1);
            let span2 =document.createElement(`span`);
                span2.innerHTML= objectPhone[key[i]]
                div4.appendChild(span2)
                boxphone.appendChild(div4);
        }
        // console.log(`sdvdv`, clonekey);
    }
    // console.log(`ndgn`, clonekey);
    //     //----tìm kiếm danh bạ---------
    let btnShearch = document.getElementById(`btnShearch`)
    btnShearch.addEventListener(`click`,search)
    // let boxshearch = document.querySelector(`.boxshearch`);
        function search(){
            let valueShearch = document.getElementById(`shearch`).value;      
            let arrShearch = [];
            if(valueShearch!==""){ 
                boxphone.classList.add(`hide`)

                for(let i=0; i<clonekey.length; i++){
                    if( clonekey[i].toUpperCase().includes(valueShearch.toUpperCase())){
                        arrShearch.push(clonekey[i]);
                    }
                }
                boxshearch.innerHTML=``;
                for(let k=0; k < arrShearch.length; k++){
                    let div4 = document.createElement(`div`);
                        div4.classList.add(`line`)
                    let span1 = document.createElement(`span`);
                        span1.innerHTML= arrShearch[k];
                        div4.appendChild(span1);
                    let span2 =document.createElement(`span`);
                        span2.innerHTML= cloneobjectPhone[arrShearch[k]]
                        div4.appendChild(span2)
                        boxshearch.appendChild(div4);
                }
            }
        }
    
    //     //  ---xoá trùng sô--
    // let btnDelete = document.getElementById(`btnDelete`);
    // btnDelete.addEventListener(`click`, deleteNumber);
    // let arrnumber = [];
    // function deleteNumber(){
    //     for ( let i =0; i<clonekey.length; i++ ){
    //         arrnumber.push(cloneobjectPhone[clonekey[i]])
    //     }
    //     // console.log(arrnumber);
    //     for (let i = 0; i <  arrnumber.length; i++){
    //         for ( let j = i+1; j < arrnumber.length; j++ ){
    //             if(arrnumber[i]==arrnumber[j]){
    //                 boxphone.classList.add(`hide`);
    //                 boxshearch.classList.add(`hide`);
    //                 delete cloneobjectPhone[clonekey[j]];
    //                 clonekey.splice(j, 1);
    //                 }
    //             }
    //         }
    //         // let btnDelete = document.querySelector(`.btnDelete`);
    //         for ( let i = 0; i<clonekey.length; i++ ){
    //             let div4 = document.createElement(`div`);
    //                     div4.classList.add(`line`)
    //                 let span1 = document.createElement(`span`);
    //                     span1.innerHTML= clonekey[i];
    //                     div4.appendChild(span1);
    //                 let span2 =document.createElement(`span`);
    //                     span2.innerHTML= cloneobjectPhone[clonekey[i]];
    //                     div4.appendChild(span2)
    //                     btnDelete.appendChild(div4);

            

    //     }
    // }

}
homework4();