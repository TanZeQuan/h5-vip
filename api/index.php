<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

echo json_encode([
  'success' => true,
  'message' => '登录成功',
  'data' => [
    'user' => [
      'username' => $_POST['username'],
      'user_id' => 123
    ],
    'games' => [
      [
        "id" => 1,
        "name" => "JILI Lucky Dragon",
        "img" => "/images/jili/lucky-dragon.jpg",
        "category_name" => "JILI"
      ],
      [
        "id" => 2,
        "name" => "PG Fortune Tiger",
        "img" => "/images/pg/fortune-tiger.jpg",
        "category_name" => "PG"
      ]
    ]
  ]
]);
