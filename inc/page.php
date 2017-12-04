<?php

class Page
{
    public function __construct()
    {
        ini_set('default_charset', 'utf-8');
        require_once './inc/settings.php';
        $settings = new Settings();
        $this->settings = $settings;
    }

    function printTitle()
    {
        echo $this->settings->title;
    }

    function printFooter()
    {
        echo "Copyright Artuto - 2017";
    }
}
?>