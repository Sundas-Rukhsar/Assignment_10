
        function even(){
        var num1= document.getElementById('n1').value;
        var num2= document.getElementById('n2').value;
         while(num1<=num2){
            num1%2==0;
            document.write(num1 +"<br>")
            num1++;
         }
        }
console.log(even());
