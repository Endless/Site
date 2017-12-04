<?php

class Settings
{
    public function __construct()
    {
        $this->title = 'test';

        $this->host = 'localhost';
        $this->port = 3306;

        $username = '';
        $password = '';

        if($username === "" || $password === "")
        {
            $this->redirect("./error/no_config.php");
        }
    }

    function redirect($url)
    {
        echo "<a href=\"$url\">Redirecting...</a>";
        echo "<script data-cfasync=\"false\" type=\"text/javascript\">document.location=\"$url\";</script>";
    }
}
?>