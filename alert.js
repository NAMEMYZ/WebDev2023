alert("ฮั่นแน่!!!!!!!!! อยากดูหน้าเว็บเราหรออ");
alert("ไม่ให้ดูหรอก");
alert("ยังๆ ยังไม่หยุดกดอีก");
alert("อะๆให้ดูก็ได้ เซ้าซี้จริง");
let sum = 0;
function testclick(){
    sums = ++sum;
    sums%10 == 0 ? alert("กดไป " + sums + " ครั้งแล้วนะ ดูท่าน่าจะเหงาจริง") : alert("กดไปแล้ว " + sums + " ครั้ง");;
    
}
console.log("แอบมองเธออยู่นะจ๊ะ");
console.log("เธอจะเห็น console ตรงนี้ไหมน้า");
console.log("ถ้าเห็นก็ ก็เห็นนั่นแหละไม่มีอะไรหรอกอิอิ");

function clicks(){
    let result = confirm("อยากรู้เปล่าว่าซ่อน Easter egg ไว้กี่ที่?");
    if(result){
        alert("ไม่รู้เหมือนกันไม่ได้นับอิอิ");
    }
    else{
        let r2 = confirm("ไม่อยากรู้จริงๆหรอ");
        if(r2){
            alert("ไม่รู้เหมือนกันไม่ได้นับอิอิ");
        }
        else{
            alert("ไปก็ได้ชิ");
            const button = document.getElementById("myButton");
            button.style.display = "none";
            
        }
    }
}
