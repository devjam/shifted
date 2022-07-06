<?php
header("Content-Type: application/json; charset=utf-8");

date_default_timezone_set('Asia/Tokyo');

$data = [
  'message' => 'ok',
];

echo json_encode($data);