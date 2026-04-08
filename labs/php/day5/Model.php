<?php
require_once 'DatabaseHandler.php';
require_once 'ICrud.php';

class Model extends DatabaseHandler implements ICrud {
    protected $table;
    protected $primaryKey;

    public function __construct() {
        parent::__construct();
        if (empty($this->primaryKey)) {
            $this->primaryKey = "id";
        }
    }

    public function create(array $data) {

        return "Insert logic for " . $this->table;
    }

    public function get() {
        return $this->RunDml("SELECT * FROM $this->table")->fetchAll(PDO::FETCH_ASSOC);
    }

    public function find($id) {
        $stmt = $this->connection->prepare("SELECT * FROM $this->table WHERE $this->primaryKey = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function first() {
        return $this->RunDml("SELECT * FROM $this->table LIMIT 1")->fetch(PDO::FETCH_ASSOC);
    }

    public function count() {
        return $this->RunDml("SELECT COUNT(*) FROM $this->table")->fetchColumn();
    }
}
