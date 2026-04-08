<?php

interface ICrud {
    public function get();
    public function find($id);
    public function first();
    public function create(array $data);
}
