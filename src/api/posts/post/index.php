<?php

/* Handle CORS */

// Specify domains from which requests are allowed
header('Access-Control-Allow-Origin: *');

// Specify which request methods are allowed
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');

// Additional headers which may be sent along with the CORS request
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');

// Set the age to 1 day to improve speed/caching.
header('Access-Control-Max-Age: 86400');


require_once '../database.php';

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
