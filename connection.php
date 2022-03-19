<?php
   // PHP version 7.4 used here
    try {
        // connect to OVHcloud Public Cloud Databases for MongoDB (cluster in version 4.4, MongoDB PHP Extension in 1.8.1)
        $m = new MongoDB\Driver\Manager('mongodb://miguelibrahim:Pagi9021@cluster0-shard-00-00.lrfwj.mongodb.net:27017,cluster0-shard-00-01.lrfwj.mongodb.net:27017,cluster0-shard-00-02.lrfwj.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-sx9b0g-shard-0&authSource=admin&retryWrites=true&w=majority');
        echo "Connection to database successfully";
        // display the content of the driver, for diagnosis purpose
        var_dump($m);
    }
    catch (Throwable $e) {
        // catch throwables when the connection is not a success
        echo "Captured Throwable for connection : " . $e->getMessage() . PHP_EOL;
    }
?>