<?php
require_once './inc/page.php';

$page = new Page();

$page->printHeader();
?>

<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <title>Endless - Home</title>
    <link href="./inc/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container">
    <div class="jumbotron">
        <h2>Home</h2>

        <div class="text-success">
            Hello!
        </div>
        <br>
        <a href="../" class="btn btn-default">Click me! :D</a>
    </div>
</div>
</body>
</html>

<?php $page->printFooter(); ?>
