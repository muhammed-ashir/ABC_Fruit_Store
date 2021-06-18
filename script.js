showtask();
let name1 = document.getElementById("name1");
let price1 = document.getElementById("price1");
let image1 = document.getElementById("image1");
let addbtn = document.getElementById("addbtn");
f_Obj = [];

addbtn.addEventListener("click", function(){
    name_val = name1.value;
    price_val = price1.value;
    image_val  = image1.value;

    let f_item = localStorage.getItem("fruits");
    if(f_item == null){
        f_Obj = [];
    }
    else{
        f_Obj = JSON.parse(f_item);
    }
        
    f_Obj.push({name:name_val, price:price_val,image:image_val});
    localStorage.setItem("fruits", JSON.stringify(f_Obj));
    showtask();
})

