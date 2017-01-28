<?php
    require_once ($root . "objects/param.class.php");

    class _module extends __module
    {

        function index()
        {
            global $template;
            $this->title = "Administration";

            //Je récupere les params
            $param = new Param();

            $params = $param->get_params();

            if(!empty($params))
            {
                foreach ($params as $param)
                {
                    $template->assign_var($param["param_label"], $param["param_value"]);
                }
            }
            


            $this->render("index");
        }

    }