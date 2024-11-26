<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'GET':
        $sql = "SELECT * FROM todo";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[3]) && is_numeric($path[3])) {
            $sql .= ' WHERE id = :id';
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(":id", $path[3]);
            $stmt->execute();
            $todos = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $todos = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        echo json_encode($todos);
        break;
    case 'POST':
        $todo = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO todo (id, title, description, due_date, due_time, created_at, updated_at) VALUES (NULL, :title, :description, :due_date, :due_time, :created_at, :updated_at)";
        $created_at = date('Y-m-d');
        $updated_at = $created_at;
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(":title", $todo->title);
        $stmt->bindParam(":description", $todo->description);
        $stmt->bindParam(":due_date", $todo->due_date);
        $stmt->bindParam(":due_time", $todo->due_time);
        $stmt->bindParam(":created_at", $created_at);
        $stmt->bindParam(":updated_at", $updated_at);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Todo created successfully'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create todo'];
        }
        echo json_encode($response);
        break;
    case 'PUT':
        $todo = json_decode(file_get_contents('php://input'));
        $sql = "UPDATE todo SET title =:title, description =:description, due_date =:due_date, due_time =:due_time, updated_at =:updated_at WHERE id =:id";
        $updated_at = date('Y-m-d');
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(":id", $todo->id);
        $stmt->bindParam(":title", $todo->title);
        $stmt->bindParam(":description", $todo->description);
        $stmt->bindParam(":due_date", $todo->due_date);
        $stmt->bindParam(":due_time", $todo->due_time);
        $stmt->bindParam(":updated_at", $updated_at);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Todo updated successfully'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update todo'];
        }
        echo json_encode($response);
        break;
}