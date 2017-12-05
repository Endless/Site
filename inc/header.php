<?php

require_once 'page.php';

$page = new Page();

class Header
{
    public function __construct()
    {
        $settings = $this->page->getSettings();
        $this->settings = $settings;
    }

    function printNavbar()
    {
        ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <title>Endless Web Dashboard - Unconfigured</title>
    <link href="../inc/css/bootstrap.min.css" rel="stylesheet">
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
</body>
</html>
        <?php
    }
}
?>


