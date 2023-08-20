<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    hello

    <script>
        (function(){
            console.log = function(){};
            console.warn = function(){};
            console.error = function(){};
        })();
        
        console.log("hello");
        console.log("world"); // This won't be displayed
    </script>
</body>
</html>
