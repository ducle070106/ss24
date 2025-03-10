let arr=[];
let input;
let i;
let j;
let choose=1;
let firstTime=true;
let total;
let cloneArr=[];
let check;
do{
    if(!firstTime){
        choose= +prompt("1. Nhập mảng số nguyên\n2. Hiển thị mảng\n3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó\n4. Tính tổng và trung bình cộng của các số dương trong mảng\n5. Đảo ngược mảng\n6. Kiểm tra mảng có đối xứng không\n7. Thoát chương trình");
    }
    switch(choose){
        case 1:
            input= +prompt("Mời nhập số lượng phần tử");
            if(Number.isInteger(input)&&input>0){
                i=0;
                arr=[];
                while(i<input){
                    arr[i]= +prompt("Mời nhập số nguyên thứ "+(i+1));
                    if(!Number.isInteger(arr[i])){
                        alert("Giá trị không hợp lệ");
                    }else{
                        i++;
                    }
                }
            }else{
                alert("Giá trị không hợp lệ");
            }
            break;
        case 2:
            alert(arr);
            break;
        case 3:
            alert("Max: "+Math.max(...arr)+"\nVị trí: "+arr.indexOf(Math.max(...arr)));
            break;
        case 4:
            i=0;
            total=0;
            input=0;
            while(i<arr.length){
                if(arr[i]>0){
                    total+=arr[i];
                    input++;
                }
                i++;
            }
            if(total===0){
                alert("Mảng không có số dương");
            }else{
                alert("Tổng các số dương bằng: "+total+"\nTrung bình cộng số dương bằng: "+total/input);
            }
            break;
        case 5:
            arr.reverse();
            break;
        case 6:
            i=0;
            check=true;
            while(i<Math.floor(arr.length)){
                if(arr[i]!==arr[arr.length-i-1]){
                    check=false;
                    break;
                }
                i++;
            }
            if(check){
                alert("Mảng đối xứng");
            }else{
                alert("Mảng không đối xứng");
            }
            break;
    }
    firstTime=false;
}while(choose!==7);