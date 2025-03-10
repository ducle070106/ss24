let arrCol=[];
let input;
let i;
let j;
let choose=1;
let firstTime=true;
let total;
let arrRow=[];
let row;
let col;
do{
    if(!firstTime){
        choose= +prompt("1. Nhập mảng 2 chiều\n2. Hiển thị mảng 2 chiều\n3. Tính tổng các phần tử trong mảng\n4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n5. Tính trung bình cộng các phần tử của một hàng cụ thể\n6. Đảo ngược các hàng trong mảng\n7. Thoát chương trình");
    }
    switch(choose){
        case 1:
            row= +prompt("Mời nhập số hàng");
            col= +prompt("Mời nhập số cột");
            if(Number.isInteger(row)&&row>0&&Number.isInteger(col)&&col>0){
                i=0;
                arrRow=[];
                while(i<row){
                    j=0;
                    arrCol=[];
                    while(j<col){
                        do{
                            arrCol[j]= +prompt("Mời nhập giá trị cho hàng "+(i+1)+" cột "+(j+1));
                        }while(!Number.isInteger(arrCol[j]))
                        j++;
                    }
                    arrRow[i]=arrCol;
                    i++;
                }
            }else{
                alert("Giá trị không hợp lệ");
            }
            break;
        case 2:
            i=0;
            input="";
            while(i<arrRow.length){
                input=input+"\n"+arrRow[i];
                i++;
            }
            alert(input);
            break;
        case 3:
            total=0;
            i=0;
            while(i<row){
                j=0;
                while(j<col){
                    total+=arrRow[i][j];
                    j++;
                }
                i++;
            }
            alert("Tổng các phần tử bằng: "+total);
            break;
        case 4:
            i=0;
            cloneArr=[];
            while(i<arrRow.length){
                cloneArr[i]=Math.max(...arrRow[i]);
                i++;
            }
            alert("Max: "+Math.max(...cloneArr)+"\nVị trí hàng "+(cloneArr.indexOf(Math.max(...cloneArr))+1)+" cột "+(arrRow[cloneArr.indexOf(Math.max(...cloneArr))].indexOf(Math.max(...cloneArr))+1));
            break;
        case 5:
            input= +prompt("Mời nhập hàng cần tính");
            if(input<arrRow.length&&input>=0){
                i=0;
                total=0;
                while(i<arrRow[input].length){
                    total+=arrRow[input][i];
                    i++;
                }
                alert("Trung bình cộng phần tử bằng: "+total/arrRow[input].length);
            }else{
                alert("Vị trí nằm ngoài mảng");
            }
            break;
        case 6:
            i=0;
            while(i<arrRow.length){
                arrRow[i].reverse();
                i++;
            }
            break;
    }
    firstTime=false;
}while(choose!==7);