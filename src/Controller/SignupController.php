<?php 
    $servername = "localhost";
    $username   = "root";
    $password   = "";
    $dbname     = "umadio";
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
        $sql = "INSERT INTO personnel (nom_personne, prenom_personne, fonction, id_org_id, sexe, tel, email, username, password )
            VALUES ('".$_POST['myName']."','".$_POST['myLast']."','".$_POST['myFonction']."','".$_POST['myIdOrg']."','".$_POST['mySexe']."','".$_POST['myTel']."','".$_POST['myEmail']."','".$_POST['myUsername']."', '".$_POST['myPassword']."')";
        if (mysqli_query($conn,$sql)) {
        $data = array("data" => "You Data added successfully");
            echo json_encode($data);
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    ?>