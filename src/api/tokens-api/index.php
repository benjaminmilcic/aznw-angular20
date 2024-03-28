<?php
require_once '../database.php';
require_once '../header.php';

$full_name = '';
$email_address = '';
$password1 = '';
// $connection = null;
// $db = new DB_Configuration();
// $connection = $db->db_connect();
$api_data = json_decode(file_get_contents("php://input"));
$full_name = $api_data->full_name;
$email_address = $api_data->email;
$password = $api_data->password;
$query = "INSERT INTO  jwt_users SET full_name = :fname, email = :emailAdress, password = :pwd";
$stmt = $conn->prepare($query);
$stmt->bindParam(':fname', $full_name);
$stmt->bindParam(':email', $email_address);
$stmt->bindParam(':password', $password1);
$stmt->execute();
