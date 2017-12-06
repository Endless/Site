<?php

class Header
{
    public function __construct()
    {
        require_once 'page.php';

        $page = new Page();
        $settings = $page->getSettings();
        $this->settings = $settings;
    }

    function printNavbar()
    {
        ?>
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
        <?php
    }
}
?>


