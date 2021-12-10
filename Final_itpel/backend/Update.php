<?php
require_once("config.php");

$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
$student_name = $data['student_name'];
$gender = $data['gender'];
$student_course = $data['student_course'];
$student_year = $data['student_year'];
$address = $data['address'];
$id = $_GET['student_num'];

$q = "UPDATE itpeldb set name = $student_name, gender = $gender, course = $student_course, year = $student_year, Address= $address WHERE id = '{$id}' LIMIT 1)";

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
