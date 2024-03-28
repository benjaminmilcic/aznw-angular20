<?php
require_once '../../database.php';
require_once '../../header.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $json = file_get_contents('php://input');
    $array = json_decode($json, true);

    // INSERT statement with placeholders for title and body
    $sql = 'INSERT INTO posts (name, content, date) VALUES (:name, :content, :date)';

    // Prepare the statement
    $stmt = $pdo->prepare($sql);

    // Params for prepared statement
    $params = [
        'name' => $array['name'],
        'content' => $array['content'] ?? '',
        'date' => $array['date']
    ];

    // Execute the statement
    $stmt->execute($params);
}
