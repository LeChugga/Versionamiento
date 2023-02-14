<?php

include("conexion.php");
$nombre = $_POST["usuario"];
$pass = $_POST["pass"];

//Login
if(isset($_POST["btningresar"]))
{
	$query = mysqli_query($conn,"SELECT * FROM login WHERE usuario = '$nombre' AND password = '$pass'");
	$nr = mysqli_num_rows($query);
	
	if($nr==1){
		echo "<script> alert('Welcome $nombre'); window.location='inicio_sesion.php' </script>";
	}
	else{
		echo "<script> alert('User doesnt exist'); window.location='index.html' </script>";
	}
}

//Registro
if(isset($_POST["btnregistrar"]))
{
	$sqlgrabar = "INSERT INTO login(usuario,password) values ('$nombre','$pass')";
	
	if(mysqli_query($conn,$sqlgrabar)){
		echo "<script> alert('User registered succesfully: $nombre'); window.location='index.html' </script>";
	}
	else {
		echo "Error: ".$sql."<br>".mysql_error($conn);
	}
}
?>