<?php
require_once './inc/page.php';
//require_once './inc/header.php';

$page = new Page();
//$header = new Header();
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
<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Endless</a>
        </div>
        <div class="collapse-navbar-collapse" id="navbar">
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li class="active"><a href="#">Dashboard</a></li>
                <li class="active"><a href="#">GitHub</a></li>
                <li class="active"><a href="#">Support</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#"><span class="glyphicon glyphicon-log-in"></span>Login</a></li>
            </ul>
        </div>
    </div>
</nav>
<?php //$header->printNavbar();
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
