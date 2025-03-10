let str;
let input;
let i;
let j;
let choose=1;
let firstTime=true;
let total;
do{
    if(!firstTime){
        choose= +prompt("1. Nhập chuỗi\n2. Hiển thị chuỗi\n3. Tính độ dài của chuỗi\n4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi\n5. Kiểm tra chuỗi có phải là chuỗi đối xứng không\n6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ\n7. Thoát chương trình");
    }
    switch(choose){
        case 1:
            str=prompt("Mời nhập chuỗi");
            break;
        case 2:
            alert(str);
            break;
        case 3:
            alert(str.length);
            break;
        case 4:
            input=prompt("Mời nhập ký tự cần tìm");
            if(input.length===1){
                if(str.includes(input)){
                    i=0;
                    total=0;
                    while(i<str.length){
                        if(str[i]===input){
                            total++;
                        }
                        i++;
                    }
                    alert("Ký tự xuất hiện "+total+" lần");
                }else{
                    alert("Ký tự không xuất hiện trong chuỗi");
                }
            }
            break;
        case 5:
            i=0;
            check=true;
            while(i<Math.floor(str.length/2)){
                if(str[i]!==str[str.length-i-1]){
                    check=false;
                    break;
                }
                i++;
            }
            if(check){
                alert("Chuỗi đối xứng");
            }else{
                alert("Chuỗi không đối xứng");
            }
            break;
        case 6:
            input=str.split(" ");
            i=0;
            while(i<input.length){
                input[i]=input[i].charAt(0).toUpperCase()+input[i].slice(1);
                i++;
            }
            str=input.join(" ");
            break;
    }
    firstTime=false;
}while(choose!==7);