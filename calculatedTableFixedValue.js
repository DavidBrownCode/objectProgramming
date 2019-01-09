        var byTheMinute = {
            hours: document.getElementById('mHour').value,
            minutes: document.getElementById('mMinute').value,
            time: function(){
                return (this.hours * 60) + this.minutes; //original option taken to perform
            }
            //rate: rate,    commented out because rate wasa replaced with 75 in the function below.
            cost:function(){
                return (this.time / 60) * 75;
            }
        };        
        var byTheHour = {
            hours: document.getElementById('hHour').value,
            //rate: rate,    commented out because rate wasa replaced with 75 in the function below.
            cost:function(){  //method provided by w3schools.com
                return this.hours * 75;
            }
        };            
        //var resultHour = myFunction(hour, rate);
        //var resultMinute = myFunction(minute, rate);
        //document.getElementById("resultMinute").innerHTML = resultMinute;
        //document.getElementById("resultHour").innerHTML = resultHour;
        function myTime(a, b){
            return (a * 60) + b;
        }
        function myFunction(a, b){
            return (a/60)*b;
        }
