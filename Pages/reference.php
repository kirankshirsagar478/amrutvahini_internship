<?php
$conn = mysqli_connect("localhost", "root", "", "codeclause") or die(mysqli_error($conn));

// Value to check
$valueToCheck = '9020';

// SQL query to check if the value exists in the database
$sql = "SELECT * FROM `references` WHERE ref_id = ?";

// Prepare the statement using the connection
$stmt = $conn->prepare($sql);

if ($stmt) {
    // Bind the parameter as an integer
    $stmt->bind_param('i', $valueToCheck);

    // Execute the query
    $stmt->execute();

    // Get the result
    $result = $stmt->get_result();

    // Check if rows were found
    if ($result->num_rows > 0) {
        echo "Reference Id exists in the database.";
    } else {
        echo "Reference Id  does not exist in the database.";
    }

    // Close the statement
    $stmt->close();
} else {
    echo "Error preparing SQL statement: " . $conn->error;
}

// Close the database connection
$conn->close();
?>
