<?php
    include_once('config.php');

    $input = file_get_contents('php://input');
    $message = array();
    $id = $_GET['id'];

    $query = "DELETE FROM itpeldb WHERE id = '$id' LIMIT 1";
    $result = mysqli_query($con, $query);

    if($result){
        http_response_code(201);
        $message['status'] = "Success";
    }else{
        http_response_code(422);
        $message['status'] = "Error";
    }

    echo json_encode($message);
    echo mysqli_error($con);
?>
