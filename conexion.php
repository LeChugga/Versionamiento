<?php
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "test2";

$conn = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);

if(!$conn){
	die("There are no connection:" .mysqli_connect_error());
}
	



?>