
<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
$pwd = mysqli_real_escape_string($mysqli, trim($request->password));
$email = mysqli_real_escape_string($mysqli, trim($request->username));
<<<<<<< HEAD
$sql = "SELECT * FROM user where email='$email' and password='$pwd'";
=======
$sql = "SELECT * FROM user where Email='$email' and Password='$pwd'";
>>>>>>> d42bc53b78ba947430c00e2a47b2af5493ea6953
if($result = mysqli_query($mysqli,$sql))
{
$rows = array();
while($row = mysqli_fetch_assoc($result))
{
$rows[] = $row;
}
echo json_encode($rows);
}
else
{
http_response_code(404);
}
}
?>