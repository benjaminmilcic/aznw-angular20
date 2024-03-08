<?php
require_once '../database.php';

// Prepare a SELECT statement
$stmt = $pdo->prepare('SELECT * FROM posts');

// Execute the statement
$stmt->execute();

// Fetch the results
$posts = $stmt->fetchAll(PDO::FETCH_ASSOC);

$json_response = json_encode($posts);
echo $json_response ;