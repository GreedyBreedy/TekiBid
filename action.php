<?php
//This section is dedicated for the login page of teki bid
$EMAIL=$_POST['EMAIL'];
$PASSWORD=$_POST['PASSWORD'];
$conn=new mysqli('localhost','root','','tekibid');
if($conn->connect_error){
    die('Connection Failed :'.$conn->connect_error);
}else{
    $select=mysqli_query($conn, "SELECT * FROM login WHERE email='".$_POST['EMAIL']."'") or exit(mysqli_error($conn));;
    
    if(mysqli_num_rows($select)){
        echo "we found ur account :D";
    }
    else{
        echo "We did not find your account D:";
    }
    $select->close();
    $conn->close();
}
?>