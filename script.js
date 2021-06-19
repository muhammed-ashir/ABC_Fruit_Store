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
    location.reload();
})

// showlist
function showtask(){
    let webtask = localStorage.getItem("fruits");
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }
    let html = '';
    let addedtasklist = document.getElementById("addedtasklist");
    taskObj.forEach((item, index) => {

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

// delete item
function deleteitem(index){
    if(confirm('Do you want to Delete')){
        let webtask = localStorage.getItem("fruits");
        let taskObj = JSON.parse(webtask);
        taskObj.splice(index, 1);
        localStorage.setItem("fruits", JSON.stringify(taskObj));
        showtask();
    }
    else{
        alert("opppssss!!!");
    }
}
// delete item ends



$(document).ready(function () {
    $('#fruits').DataTable();
});
$('#fruits').dataTable( {
    "lengthChange": false
});
