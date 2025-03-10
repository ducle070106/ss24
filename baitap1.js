let arr=[];
let input;
let i;
let j;
let choose=1;
let firstTime=true;
let total;
do{
    if(!firstTime){
        choose= +prompt("1 Nhập mảng\n2 Hiện thị mảng\n3 Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n4 Tính tổng các phần tử trong mảng\n5 Tìm số lần xuất hiện của một phần tử trong mảng\n6 Sắp xếp mảng tăng dần\n7 Thoát chương trình");
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
            alert("Max: "+Math.max(...arr)+"\nMin: "+Math.min(...arr));
            break;
        case 4:
            i=0;
            total=0;
            while(i<arr.length){
                total+=arr[i];
                i++;
            }
            alert("Tổng các phần tử bằng: "+total);
            break;
        case 5:
            input= +prompt("Mời nhập số cần đếm");
            if(arr.includes(input)){
                total=0;
                i=0;
                while(i<arr.length){
                    if(arr[i]===input){
                        total++;
                    }
                    i++;
                }
                alert("Số "+input+" xuất hiện "+total+" lần");
            }else{
                alert("Giá trị không có trong mảng");
            }
            break;
        case 6:
            arr.sort((a,b)=>a-b);
            break;
    }
    firstTime=false;
}while(choose!==7);