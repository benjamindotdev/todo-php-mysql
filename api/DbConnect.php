<?php

class DbConnect
{
    private $server = "localhost";
    private $dbname = 'todo';
    private $user = 'root';
    private $pass = '';

    public function connect()
    {
        try {
            $conn = new PDO("mysql:host=$this->server;dbname=$this->dbname", $this->user, $this->pass);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (PDOException $e) {
            echo "Connection Error: " . $e->getMessage();
        }
    }
}
?>