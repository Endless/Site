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

        <?php
    }
}
?>


