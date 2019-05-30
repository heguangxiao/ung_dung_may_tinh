function tinhtoan(i) {
    let inputBien1;
    let inputBien2;
    let inputValueSubmit;

    inputBien1 = document.getElementById('bien1').value;
    inputBien2 = document.getElementById('bien2').value;

    if(inputBien1==""){
        alert('ban phai nhap bien1');
    }else if(inputBien2==""){
        alert('ban phai nhap bien 2');
    }else{
        let bien1 = parseInt(inputBien1);
        let bien2 = parseInt(inputBien2);

        let tinhtoan;

        if(i==1){
            tinhtoan = bien1+bien2;
            document.write(bien1+' + '+bien2+' = '+tinhtoan);
        }else if(i==2){
            tinhtoan = bien1-bien2;
            document.write(bien1+' - '+bien2+' = '+tinhtoan);
        }else if(i==3){
            tinhtoan = bien1*bien2;
            document.write(bien1+' x '+bien2+' = '+tinhtoan);
        }else if(i==4){
            tinhtoan = bien1/bien2;
            document.write(bien1+' / '+bien2+' = '+tinhtoan);
        }
    }

}