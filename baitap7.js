let str;
let input;
let i;
let j;
let choose=1;
let firstTime=true;
let total;
do{
  if(!firstTime){
    choose= +prompt("1. Nhập chuỗi\n2. Hiển thị chuỗi\n3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi\n4. Đảo ngược chuỗi ký tự\n5. Đếm số lượng từ trong chuỗi ký tự\n6. Tìm kiếm và thay thế các ký tự trong chuỗi gốc\n7. Thoát chương trình");
  }
  switch(choose){
    case 1:
      str=prompt("Mời nhập chuỗi");
      break;
    case 2:
      alert(str);
      break;
    case 3:
      str=str.trim();
      break;
    case 4:
      str=str.split("").reverse().join("");
      break;
    case 5:
      input=str.trim().split(/\s+/);
      alert("Số lượng từ trong chuỗi: "+input.length);
      break;
    case 6:
      input=prompt("Mời nhập ký tự cần thay thế");
      if(input.length===1){
        if(str.includes(input)){
          total=prompt("Mời nhập ký tự thay thế");
          if(total.length===1){
            str=str.replaceAll(input,total)
          }else{
            alert("Nhập vào không phải chỉ 1 ký tự");
          }
        }else{
          alert("Ký tự không xuất hiện trong chuỗi");
        }
      }
      break;
  }
  firstTime=false;
} while(choose!==7);