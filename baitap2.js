let arr=[];
let input;
let i;
let j;
let choose=1;
let firstTime=true;
let total;
let cloneArr=[];
do{
    if(!firstTime){
        choose= +prompt("1. Nhập mảng số nguyên\n2. Hiển thị mảng\n3. Tìm các phần tử chẵn và lẻ\n4. Tính trung bình cộng của mảng\n5. Xóa phần tử tại vị trí chỉ định\n6. Tìm phần tử lớn thứ hai trong mảng\n7. Thoát chương trình");
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
            i=0
            total=0;
            cloneArr=[];
            while(i<arr.length){
                if(arr[i]%2===0){
                    cloneArr.splice(total,0,arr[i]);
                    total++;
                }else if(arr[i]%2===1){
                    cloneArr.push(arr[i]);
                }
                i++;
            }
            alert("Các số chẵn: "+cloneArr.slice(0,total)+"\nCác số lẻ: "+cloneArr.slice(total,cloneArr.length));
            break;
        case 4:
            i=0;
            total=0;
            while(i<arr.length){
                total+=arr[i];
                i++;
            }
            alert("Trung bình cộng phần tử bằng: "+total/arr.length);
            break;
        case 5:
            input= +prompt("Mời nhập vị chí cần xóa");
            if(input<arr.length&&input>=0){
                arr.splice(input,1);
            }else{
                alert("Vị trí nằm ngoài mảng");
            }
            break;
        case 6:
            i=0;
            input=Math.min(...arr);
            while(i<arr.length){
                if(input<arr[i]&&arr[i]!==Math.max(...arr)){
                    input=arr[i];
                }
                i++;
            }
            alert("Giá trị lớn thứ 2: "+input);
            break;
    }
    firstTime=false;
}while(choose!==7