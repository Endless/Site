<?php

class Page
{
    public function __construct()
    {
        ini_set('default_charset', 'utf-8');
        require_once 'settings.php';
        require_once 'header.php';
        $settings = new Settings();
        $header = new Header();
        $this->settings = $settings;
        $this->header = $header;
    }

    function printTitle()
    {
        echo $this->settings->title;
    }

    function printFooter()
    {
        echo "Copyright Artuto - 2017";
    }

    function getSettings()
    {
        return $this->settings;
    }

    function printHeader()
    {
        echo $this->header->printNavbar();
    }
}
?>