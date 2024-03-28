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


// Database configuration
$host = 'rdbms.strato.de';
$port = 3306;
$dbName = 'dbs12666222';
$username = 'dbu4223278';
$password = 'ABC1234abc&&&';

// Connection string (DSN)
$dsn = "mysql:host={$host};port={$port};dbname={$dbName};charset=utf8";

try {
    // Create a PDO instance
    $pdo = new PDO($dsn, $username, $password);

    // Set PDO to throw exceptions on error
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // echo "Database Connected...";
    

    // You are now connected to the database, and $pdo contains the connection object

    // You can perform database operations here

} catch (PDOException $e) {
    // If there is an error with the connection, catch it here
    echo "Connection failed: " . $e->getMessage();
    die;
}
