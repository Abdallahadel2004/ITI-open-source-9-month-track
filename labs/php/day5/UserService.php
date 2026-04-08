<?php
require_once 'User.php';

class UserService {
    private $userModel;

    public function __construct() {
        $this->userModel = new User();
    }

    public function getAllUsers() {
        return $this->userModel->get();
    }

    public function getUserCount() {
        return $this->userModel->count();
    }
}
