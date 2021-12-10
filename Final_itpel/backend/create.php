<?php
require_once('config.php');

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$id = $data['student_num'];
$student_name = $data['student_name'];
$student_course = $data['student_course'];
$student_year = $data['student_year'];
$address = $data['address'];
$message = array();

$q = "INSERT INTO itpeldb (id, name, Address) VALUES ('$id','$student_name','$address')";

$query = mysqli_query($con, $q); 

if ($query){
    http_response_code(201);
    $message['status'] = "Success";
}
else {
    http_response_code(422);
    $message['status'] = "Error";
}
echo json_encode($message);
echo mysqli_error($con);

?>