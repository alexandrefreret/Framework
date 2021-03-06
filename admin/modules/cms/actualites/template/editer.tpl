<form action="{path_media}cms/actualites/save.html" method="POST" id="news_form">
    <input type="hidden" name="news_id_encode" id="news_id_encode" value="{news_id_encode}">

    <div class="col-xs-12">
        <div class="pull-right">
            <a href="{path_media}cms/actualites/" class="button button-default"><span>Retour</span> <i class="fa fa-reply"></i></a>
            <button class="button button-vert"><span>Enregistrer</span> <i class="fa fa-floppy-o"></i></button>
        </div>
    </div>

    <div class="col-xs-12 col-sm-8">
        <section class="box">
            <header class="panel-header">
                <h2 class="title pull-left">Informations principales</h2>
                <div class="actions panel_actions pull-right">
                    <i class="box_toggle fa fa-chevron-down"></i>
                    <!--<i class="box_close fa fa-times"></i>-->
                </div>
            </header>

            <div class="content-body">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="form-group">
                            <label for="news_label">Titre <sup>*</sup></label>
                            <input type="text" name="news_label" id="news_label" value="{news_label}" class="form-control" required>
                        </div>

                        <div class="form-group">
                            <label for="news_categorie">Catégorie <sup>*</sup></label>
                            <select name="news_categorie" id="news_categorie" class="form-control" required>
                                <!--<option value="-&#45;&#45;">-&#45;&#45;</option>-->
                                <!-- BEGIN categorie -->
                                <option value="{categorie.categorie_id}" {categorie.selected}>{categorie.categorie_label}</option>
                                <!-- END categorie -->
                            </select>
                        </div>


                        <div class="form-group">
                            <label for="news_contenu">Contenu <sup>*</sup></label>
                            <textarea name="news_contenu" id="news_contenu" class="trumbowyg" required>{news_contenu}</textarea>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <div class="col-xs-12 col-sm-4">
        <section class="box">
            <header class="panel-header">
                <h2 class="title pull-left">Méta</h2>
                <div class="actions panel_actions pull-right">
                    <i class="box_toggle fa fa-chevron-down"></i>
                    <!--<i class="box_close fa fa-times"></i>-->
                </div>
            </header>

            <div class="content-body">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="row">
                            <div class="col-xs-12">
                                <h3 class="subtitle">Publication</h3>
                            </div>
                            <div class="col-xs-12 col-sm-6 border-right">
                                <div class="form-group">
                                    <label for="news_datedebut">Début</label>
                                    <input type="text" name="news_datedebut" id="news_datedebut" value="{news_datedebut_fr}" class="form-control airdatepicker airdatepicker_debut">
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group">
                                    <label for="news_datefin">Fin</label>
                                    <input type="text" name="news_datefin" id="news_datefin" value="{news_datefin_fr}" class="form-control airdatepicker airdatepicker_fin">
                                </div>
                            </div>

                            <div class="col-xs-12">
                                <p class="help-block">Laisser vide la date de fin s'il n'y en a pas</p>
                            </div>
                        </div>

                        <hr>

                        <div class="row">
                            <div class="col-xs-12">
                                <h3 class="subtitle">Illustration</h3>

                                <div class="row">
                                    <div class="col-xs-12">
                                        <!-- BEGIN no_photo -->
                                        <a href="{path_media}cms/recadrage/?type=news&media_id={news_id}" onclick="save_news(); return load_modal(this, 'Ajout d\'une image d\'illustration', true);" class="button button-vert btn-block"><span>Ajouter une image</span> <i class="fa fa-picture-o"></i></a>
                                        <!-- END no_photo -->


                                        <!-- BEGIN photo -->
                                        <img src="{site_url}assets/img/news/illustration/{news_id_encode}/{photo.media_filename}" alt="Image d'illustration" class="img-thumbnail img-responsive ">
                                        <br>
                                        <br>
                                        <a href="{path_media}cms/recadrage/?type=news&media_id={news_id}" onclick="save_news(); return load_modal(this, 'Modifier l\'image d\'illustration', true);" class="button button-vert btn-block"><span>Modifier l'image</span> <i class="fa fa-picture-o"></i></a>
                                        <!-- END photo -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

</form>