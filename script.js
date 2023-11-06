//--------------part-1------------//
let array=[1,2,3,4,5];
console.log(array);

let array_1=[];
for(let i=array.length-1; i>=0; i--){
    array_1.push(array[i]);
}
console.log(array_1);

//--------------part-2------------//
const strArray=["cat","mouse","panter","chicken"];
strArray.shift();
strArray.push("bird");
console.log(strArray);

//--------------part-3------------//

let array_2=[1,2,3,4,5];
for(let i=0; i<5; i++){
    array_2.push(array_2[i]**2);
}
console.log(array_2)
//-------------part-4-1--------------//

let array_3=[1,2,3,4,5,6,7,8,9,10];
let elave=[];

for( let i=0; i<10; i++){
    if(array_3[i]%2==0){
        elave.push(array_3[i]);
    }
}
console.log(elave)
//-------------part 4-2-----------//
//-----------elave dustur---------//

let array_4=[1,2,3,4,5,6,7,8,9,10];
let elave_1=[];

for( let i=0; i<10; i++){
    if([i]%2==1){
        elave_1.push(array_4[i]);
    }
}

console.log(elave_1)