<?php
require_once("config.php");

$data= array();
$id = $_GET['id'];
$q = "SELECT * FROM itpeldb where id = $id LIMIT 1";
$query = mysqli_query($con, $q); 

while($row = mysqli_fetch_object($q)){
    $data[] =$row;

}

echo json_encode($data);
echo mysqli_error($con);
