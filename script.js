showlist();
let name1 = document.getElementById("name1");
let price1 = document.getElementById("price1");
let image1 = document.getElementById("image1");
let addbtn = document.getElementById("addbtn");
let name2 = document.getElementById("name2");
let price2 = document.getElementById("price2");
let image2 = document.getElementById("image2");
let editbtn = document.getElementById("editbtn");

// add items
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
    let addedtasklist = document.getElementById("addedtasklist");
    f_Obj.forEach((item, index) => {

        if(item.completeStatus==true){
            taskCompleteValue = `<td class="completed">${item.task_name}</td>`;
        }else{
            taskCompleteValue = `<td>${item.task_name}</td>`;
        }
        html += `<tr>
                    <td>${index+1}</td>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td>${item.image}</td>
                    <td>
                            <a href="" onclick="edittask(${index})" class="btn" data-toggle="modal" data-target="#edit"><i class="fa fa-pencil"></i></a>
                            <a href="" class="btn" onclick="deleteitem(${index})"><i class="fa fa-trash" style="color:red"></i></a>
                    </td>
                </tr>`;
    });
    addedtasklist.innerHTML = html;
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
        alert("opppssss!!!");
    }
}
// delete item ends

// edit item
function edittask(index){
    let index2 = document.getElementById("index2");
    index2.value = index;

    let f_item = localStorage.getItem("fruits");
    let f_Obj = JSON.parse(f_item); 
    
    name2.value = f_Obj[index]['name'];
    price2.value = f_Obj[index]['price'];
    image2.value = f_Obj[index]['image'];
}

editbtn.addEventListener("click", function(){
    let f_item = localStorage.getItem("fruits");
    let f_Obj = JSON.parse(f_item); 
    let editindex = document.getElementById("index2").value;
    
    for (keys in f_Obj[editindex]) {

            f_Obj[editindex].name = name2.value;
            f_Obj[editindex].price = price2.value;
            f_Obj[editindex].image = image2.value;
        
      }
    localStorage.setItem("fruits", JSON.stringify(f_Obj));
    showlist();
})
// edit item ends




$(document).ready(function () {
    $('#fruits').DataTable();
});
$('#fruits').dataTable( {
    "lengthChange": false
});
