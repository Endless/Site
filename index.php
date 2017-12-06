<?php
require_once './inc/page.php';

$page = new Page();
?>

<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Endless website">
    <meta name="author" content="Artuto">
    <title>Endless - Home</title>
    <link href="https://bootswatch.com/4/darkly/bootstrap.min.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrap.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Endless</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="index.php">Home <span class="sr-only">(current)</span></a>
                <a class="nav-link" href="https://discord.gg/CXKfYW3">Support</a>
                <a class="nav-link" href="invite.php">Invite</a>
            </li>
        </ul>
    </div>
</nav>

<div class="jumbotron">
    <h2>Home</h2>

    <div class="text-success">
        Hello!
    </div>
    <br>
    <a href="../" class="btn btn-primary">Click me! :D</a>
</div>
</body>
</html>

<?php $page->printFooter(); ?>
