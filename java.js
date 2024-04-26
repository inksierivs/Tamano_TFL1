 var intervalId;

        function lightRed() {
            clearLights();
            document.getElementById('red-light').style.backgroundColor = "red";
            intervalId = setInterval(lightGreen, 6000 + Math.floor(Math.random() * 6000));
            
             //redtogreen
        }

        function lightYellow() {
            clearLights();
            document.getElementById('yellow-light').style.backgroundColor = "yellow";
            intervalId = setInterval(lightRed, 6000 + Math.floor(Math.random() * 3000));
            
             // yellowtored
        }

        function lightGreen() {
            clearLights();
            document.getElementById('green-light').style.backgroundColor = "green";
            intervalId = setInterval(lightYellow, 6000 + Math.floor(Math.random() * 6000));
            
             //greentoyellow
        }

        function clearLights() {
            document.getElementById('red-light').style.backgroundColor = "black";
            document.getElementById('yellow-light').style.backgroundColor = "black";
            document.getElementById('green-light').style.backgroundColor = "black";
        }

        lightRed(); 