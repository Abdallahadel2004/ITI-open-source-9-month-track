<?php

class DatabaseHandler {
    protected $connection;

    public function __construct() {
        $this->connection = $this->connect();
    }

    private function connect() {
        $host = 'localhost';
        $dbname = 'php_day4';
        $username = 'root';
        $password = '';

        try {
            $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $pdo;
        } catch (PDOException $e) {
            die("Connection failed: " . $e->getMessage());
        }
    }

    public function RunDml($stmt) {
        return $this->connection->query($stmt);
    }
}
