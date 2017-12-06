<?php
require_once './inc/page.php';
require_once './inc/header.php';

$page = new Page();
$header = new Header();
?>

<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <title>Endless - Home</title>
    <link href="./inc/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrap.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
<?php $header->printNavbar();
echo "die"; ?>
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
