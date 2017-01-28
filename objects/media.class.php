<?php


class Media
{
    /**
     * @var Request
     */
    private $requete;

    public function __construct()
    {
        global $requete;

        $this->requete = $requete;
    }


    public function get_media($extern_id,$type, $principale = false)
    {

        return $this->requete->querySecure("SELECT *
        FROM media 
        WHERE media_type = ?
        AND media_externid = ?
        ORDER BY media_order ASC", [$type, $extern_id], $principale);

    }
}