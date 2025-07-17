<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$data = [
  "success" => true,
  "data" => [
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
];

echo json_encode($data);
