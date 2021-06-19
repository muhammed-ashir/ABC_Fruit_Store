showlist();
let name1 = document.getElementById("name1");
let price1 = document.getElementById("price1");
let image1 = document.getElementById("image1");
let name2 = document.getElementById("name2");
let price2 = document.getElementById("price2");
let image2 = document.getElementById("image2");
let editbtn = document.getElementById("editbtn");
let addForm = document.getElementById("addForm");
let editForm = document.getElementById("editForm");


// add items
addForm.addEventListener('submit',function(event){
    event.preventDefault();

    var reader = new FileReader();
    // var name = image1.files[0].name;
    name_val = name1.value;
    price_val = price1.value;

    let f_item = localStorage.getItem("fruits");
    if(f_item == null){
        f_Obj = [];
    }
    else{
        f_Obj = JSON.parse(f_item);
    }

    reader.addEventListener('load',function(){
        
           image_val  = this.result;
           //  console.log(this.result);
           f_Obj.push({name:name_val, price:price_val,image:image_val});
           localStorage.setItem("fruits", JSON.stringify(f_Obj));

    });

    reader.readAsDataURL(image1.files[0]);
    location.reload();

})
// add items end

// showlist
function showlist(){
    let f_item = localStorage.getItem("fruits");
    if(f_item == null){
        f_Obj = [];
    }
    else{
        f_Obj = JSON.parse(f_item);
    }
    let html = '';
    let fruitslist = document.getElementById("fruitslist");
    f_Obj.forEach((item, index) => {

        html += `<tr>
                    <td>${index+1}</td>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td><img src="${item.image}" width="60px" height="40px" /></td>
                    <td>
                            <a href="" onclick="edittask(${index})" class="btn" data-toggle="modal" data-target="#edit"><i class="fa fa-pencil"></i></a>
                            <a href="" class="btn" onclick="deleteitem(${index})"><i class="fa fa-trash" style="color:red"></i></a>
                    </td>
                </tr>`;
    });
    fruitslist.innerHTML = html;
}
// showlist ends

// delete item
function deleteitem(index){
    if(confirm('Do you want to Delete')){
        let f_item = localStorage.getItem("fruits");
        let f_Obj = JSON.parse(f_item);
        f_Obj.splice(index, 1);
        localStorage.setItem("fruits", JSON.stringify(f_Obj));
        showlist();
    }
    else{
        
    }
}
// delete item ends



// edit item
function edittask(index){
    let index2 = document.getElementById("index2");
    let dimg = document.getElementById("dimg");
    index2.value = index;

    let f_item = localStorage.getItem("fruits");
    let f_Obj = JSON.parse(f_item); 
    
    name2.value = f_Obj[index]['name'];
    price2.value = f_Obj[index]['price'];
    dimg.src = f_Obj[index]['image'];
    // image2.value = f_Obj[index]['image'];
}


editForm.addEventListener('submit',function(event){
    event.preventDefault();

    let f_item = localStorage.getItem("fruits");
    let f_Obj = JSON.parse(f_item); 
    let editindex = document.getElementById("index2").value;

    if(image2.files[0]){

    var reader = new FileReader();

    reader.addEventListener('load',function(){

        // image2_val  = this.result;
        // console.log(image2_val);

        for (keys in f_Obj[editindex]) {
           f_Obj[editindex].name = name2.value;
           f_Obj[editindex].price = price2.value;
           f_Obj[editindex].image = this.result;
        }
        console.log(f_Obj);
        
        localStorage.setItem("fruits", JSON.stringify(f_Obj));


    });

    reader.readAsDataURL(image2.files[0]);


    }
    else{

        for (keys in f_Obj[editindex]) {
    
            f_Obj[editindex].name = name2.value;
            f_Obj[editindex].price = price2.value;
            f_Obj[editindex].image = dimg.src;
                    
        }
        localStorage.setItem("fruits", JSON.stringify(f_Obj));

    }
    
    location.reload();

})
// edit item ends



$(document).ready(function () {
    $('#fruits').DataTable();
});
