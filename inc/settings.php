<?php

class Settings
{
    public function __construct()
    {
        $this->title = 'test';

        $this->host = 'localhost';
        $this->port = 3306;

        $username = 'e';
        $password = 'e';

        $this->authToken = '';

        $clientId = 0;
        $clientSecret = '';
        $redirectUri = 'https://endless.artuto.me';

        if($username === "" || $password === "" || $this->authToken === "")
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