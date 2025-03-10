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
        choose= +prompt("1. Nhập mảng 2 chiều\n2. Hiển thị mảng 2 chiều\n3. Tính tổng các phần tử trong mảng\n4. Tính tổng đường chéo chính\n5. Tính tổng đường chéo phụ\n6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột\n7. Thoát chương trình");
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
            if(row===col){
                i=0;
                total=0;
                while(i<arrRow.length){
                    total+=arrRow[i][i];
                    i++;
                }
                alert("Tổng đường chéo chính bằng: "+total);
            }else{
                alert("Mảng không có sô hàng bằng số cột");
            }
            break;
        case 5:
            if(row===col){
                i=0;
                total=0;
                while(i<arrRow.length){
                    total+=arrRow[i][arrRow.length-i-1];
                    i++;
                }
                alert("Tổng đường chéo phụ bằng: "+total);
            }else{
                alert("Mảng không có sô hàng bằng số cột");
            }
            break;
        case 6:
            choose= +prompt("1. Tính theo hàng\n2. Tính theo cột");
            if(choose===1||choose===2){
                input= +prompt("Chọn vị trí index "+(choose===1?"hàng":"cột"));
                if((choose===1&&input>=0&&input<row)||(choose===2&&input>=0&&input<col)){
                    i=0;
                    total=0;
                    while((choose===1&&i<col)||(choose===2&&i<row)){
                        choose===1?total+=arrRow[input][i]:total+=arrRow[i][input];
                        i++;
                    }
                    alert("Trung bình cộng "+(choose===1?"hàng ":"cột ")+input+" bằng "+total/(choose===1?col:row));
                }else{
                    alert("Giá trị nằm ngoài mảng");
                }
            }else{
                alert("Giá trị không hợp lệ");
            }
            break;
    }
    firstTime=false;
}while(choose!==7);