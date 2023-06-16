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
    let name = document.getElementById(`name`);
    let number = document.getElementById(`number`);
    let btnAdd = document.getElementById(`btnAdd`);
    let shearch = document.getElementById(`shearch`);
    let btnShearch = document.getElementById(`btnShearch`);
    let btnDelete = document.getElementById(`btnDelete`);
    let lisPhoneNumber = document.getElementById(`lisPhoneNumber`); 
    let objDelete = [];
    let bookphone =[];
    // ------thêm-----
    btnAdd.addEventListener(`click`, arr);
    // --tìm kiếm--
    btnShearch.addEventListener(`click`, search);
    shearch.addEventListener(`input`, search);
    // ---xoá------
    btnDelete.addEventListener(`click`, dlt);
    // --------------------------------------------------------
    function arr(){ //HÀM LẤY GIÁ TRỊ ĐỂ TẠO MẢNG//
        let key = name.value;
        let value = number.value;
        let frend = {[key]: value};
        bookphone.push(frend);
        name.value=``;
        number.value=``;
        arrange();
        addphone()
    }
// -------------------------------------------------------
    function search(){  //HÀM TÌM KIẾM//
        let valueShearch = shearch.value;
        if(valueShearch !== ``){
            // -----bằng tên----------//
            if(isNaN(valueShearch) == true){
                for(let i =0; i<bookphone.length; i++ ){
                    let key = Object.keys(bookphone[i]);
                    if ( !key[0].toUpperCase().includes(valueShearch.toUpperCase())){
                    objDelete.push(bookphone[i]);
                    bookphone.splice(i, 1);
                    i=i-1;
                    }
                } 
            }
            // -----bằng số-----(không thể tìm bằng ký tự đặc biệt) ---------
            else{
                for(let i =0; i<bookphone.length; i++ ){
                    let vl = Object.values(bookphone[i])
                    if ( !vl[0].toString().includes(valueShearch)){
                        objDelete.push(bookphone[i]);
                        bookphone.splice(i, 1);
                        i=i-1;
                    }
                }
            }
            addphone();
        }
        if(valueShearch==``){
            bookphone.push(...objDelete);
            objDelete.splice(0, objDelete.length );
            arrange();
            addphone()
        }
    }
// ----------------------------------------------------------
    function dlt(){ //HÀM XOÁ TRÙNG//
        for(let i =0; i<bookphone.length; i++ ){
            let key1 = Object.keys(bookphone[i])
            for(let j = i+1; j<bookphone.length; j++ ){
                let key2 = Object.keys(bookphone[j]);
                if(bookphone[i][key1[0]]==bookphone[j][key2[0]]){
                bookphone.splice(j, 1);
                j=j-1;
                }
            }
        }
        addphone();
    }
// --------------------------------------------------
    function arrange(){ // HÀM SẮP XẾP//
        bookphone.sort((a, b) => {
        const A = Object.keys(a)[0].toUpperCase();
        const B = Object.keys(b)[0].toUpperCase();
        return A.localeCompare(B);
        });
    }
// -----------------------------------------------------
    function addphone(){ //HÀM HIỂN THỊ DANH SÁCH//
        lisPhoneNumber.innerHTML=``
        for(let i =0; i<bookphone.length; i++ ){
            let key = Object.keys(bookphone[i]);
            let div = document.createElement(`div`)
                div.classList.add(`line`);
                lisPhoneNumber.appendChild(div);
            let span1 = document.createElement(`span`);
                span1.innerHTML = key;
                div.appendChild(span1);
            let span2 = document.createElement(`span`);
                span2.innerHTML= bookphone[i][key[0]];
                div.appendChild(span2);
        } 
    }
}
homework4();