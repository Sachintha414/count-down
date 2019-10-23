<!DOCTYPE HTML>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
p{
  text-align: center;
  font-size: 60px;
  margin-top: 0px;
}
</style>
</head>
<body>

<p id="demo"></p>

<script>
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var current = new Date().getTime();
    
    // Find the distance between current and the count down date
    var distance = countDownDate - current;
    
    // Time calculations for days, hours, mins and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + mins + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance <= 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "oops..! EXPIRED!";
    }
}, 1000);
</script>

</body>
</html>