<?php
 include('config.php');

 $data = array();
 $query = "SELECT * FROM itpeldb";
 $result = mysqli_query($con,$query);

 while($row = mysqli_fetch_object($result)){
     $data[] = $row;
 }

 echo json_encode($data);
 echo mysqli_error($con);

?>