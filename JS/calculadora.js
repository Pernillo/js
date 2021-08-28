
   
    function sumar (){
        var num1 = parseInt(document.getElementById("num1").value);
        var num2 = parseInt(document.getElementById("num2").value);
        document.getElementById("resultado").innerHTML = num1 + num2;
    }
    
    function restar (){
        
        var num1 = parseInt(document.getElementById("num1").value);
        var num2 = parseInt(document.getElementById("num2").value);
        document.getElementById("resultado").innerHTML = num1 - num2;
    }

    function multiplicar (){
        var num1 = parseInt(document.getElementById("num1").value);
        var num2 = parseInt(document.getElementById("num2").value);
        document.getElementById("resultado").innerHTML = num1 * num2;
    }

    function dividir (){
        var num1 = parseInt(document.getElementById("num1").value);
        var num2 = parseInt(document.getElementById("num2").value);
        document.getElementById("resultado").innerHTML = num1 / num2;
    }

    function tabla (){
        var num1 = parseInt(document.getElementById("num3").value);

        document.write("<table border='1'><tr><td>Número</td><td>Resultado</td></tr>");
        for(i=0; i<=10; i++){
            document.write("<tr><td>"+num1+" x " + i +"</td><td>" + num1 * i + "</td></tr>");  
        }
       document.write("</table>");
    }



    function borrar() {
        document.getElementById("formulario").reset();
    }

