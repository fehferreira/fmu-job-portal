<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8" />
    <title>Home | Jobs4U</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
    <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        rel="stylesheet" />
    <link href="../../css/reset.css" rel="stylesheet" />
    <link href="../../css/home-logada/home-logada.css" rel="stylesheet" />
    <link href="../../css/home.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N"
        crossorigin="anonymous"></script>
    <script src="../../utils/jquery.js"></script>
    <script>
        // Include external .html files
        $(function () {
            var includes = $('[data-common]');
            $.each(includes, function () {
                var file = './common/' + $(this).data('common') + '.html';
                $(this).load(file);
            });
        });
    </script>
</head>

<body class="container-fluid">
    <header data-common="header"></header>
    <header data-common="hero"></header>
    <main>
        <section class="d-flex justify-content-center align-items-center employment-cards-section">
            <div class="mt-5 w-75 d-flex flex-wrap justify-content-center align-items-center card-section">
                <h2 class="body-filter-title">Uma Plataforma, muitas <span>Soluções</span></h2>
                <div class="d-flex flex-wrap justify-content-center align-items-center">
                    <div class="card">
                        <div class="card-body">
                            <div id="marketing-fi" class="d-flex align-items-center w-100 filter">
                                <img src="../../assets/icons/marketing-icon.svg" height="40px"></img>
                                <h5 class="card-title">Marketing e Comunicação</h5>
                            </div>
                            <h6 class="card-subtitle mb-2 text-body-secondary">5000 Vagas</h6>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div id="marketing-fi" class="d-flex align-items-center w-100 filter">
                                <img src="../../assets/icons/atendimento-cliente-icon.svg" height="40px"></img>
                                <h5 class="card-title">Atendimento ao Cliente</h5>
                            </div>
                            <h6 class="card-subtitle mb-2 text-body-secondary">5000 Vagas</h6>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div id="marketing-fi" class="d-flex align-items-center w-100 filter">
                                <img src="../../assets/icons/gestao-projetos-icon.svg" height="40px"></img>
                                <h5 class="card-title">Finanças</h5>
                            </div>
                            <h6 class="card-subtitle mb-2 text-body-secondary">5000 Vagas</h6>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div id="marketing-fi" class="d-flex align-items-center w-100 filter">
                                <img src="../../assets/icons/recursos-humanos-icon.svg" height="40px"></img>
                                <h5 class="card-title">Recursos Humanos</h5>
                            </div>
                            <h6 class="card-subtitle mb-2 text-body-secondary">5000 Vagas</h6>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div id="marketing-fi" class="d-flex align-items-center w-100 filter">
                                <img src="../../assets/icons/design-desenvolvimento-icon.svg" height="40px"></img>
                                <h5 class="card-title">Design e Desenvolvimento</h5>
                            </div>
                            <h6 class="card-subtitle mb-2 text-body-secondary">5000 Vagas</h6>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div id="marketing-fi" class="d-flex align-items-center w-100 filter">
                                <img src="../../assets/icons/consultoria-negocios-icon.svg" height="40px"></img>
                                <h5 class="card-title">Consultoria de Negocios</h5>
                            </div>
                            <h6 class="card-subtitle mb-2 text-body-secondary">5000 Vagas</h6>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div id="marketing-fi" class="d-flex align-items-center w-100 filter">
                                <img src="../../assets/icons/gestao-projetos-icon.svg" height="40px"></img>
                                <h5 class="card-title">Gestão de Projetos</h5>
                            </div>
                            <h6 class="card-subtitle mb-2 text-body-secondary">5000 Vagas</h6>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div id="marketing-fi" class="d-flex align-items-center w-100 filter">
                                <img src="../../assets/icons/concurso-publico-icon.svg" height="40px"></img>
                                <h5 class="card-title">Concursos Publicos</h5>
                            </div>
                            <h6 class="card-subtitle mb-2 text-body-secondary">5000 Vagas</h6>
                        </div>
                    </div>
                </div>
        </section>
        <section class="d-flex justify-content-center align-items-center">
            <div class="mt-5 w-75 d-flex flex-wrap justify-content-center align-items-center category-section">
                <h2 class="body-filter-title">Principais <span>Vagas</span></h2>
                <div class="d-flex flex-wrap justify-content-center align-items-center">
                    <?php
                    $url = 'http://localhost:8000/api/employments';
                    $params = [
                        'page' => rand(1, 10),
                    ];
                    $urlCompleta = $url . '?' . http_build_query($params);
                    $options = [
                        'http' => [
                            'method' => 'GET',
                            'header' => 'Content-type: application/json'
                        ]
                    ];
                    $context = stream_context_create($options);
                    $resposta = file_get_contents($urlCompleta, false, $context);
                    if ($resposta === false) {
                        die('Erro na requisição GET.');
                    }
                    $respostaObject = json_decode($resposta);
                    foreach ($respostaObject->data as $data) {
                        echo '<div class="card" style="max-width: 40%">
                                <div class="card-body">
                                    <h5 class="card-title">' . $data->office . '</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">' . $data->office . '</h6>
                                    <p class="card-text">' . $data->description . '</p>
                                    <a href="./cadastro-conta/cadastro-conta.html" class="link-register">
                                        <button class="button button--secondary">Candidate-se</button>
                                    </a>
                                </div>
                            </div>';
                    }
                    ?>
                </div>
        </section>
        <section class="m-5 p-5 footer-card-section">
            <div class="card-footer d-flex flex-wrap">
                <div class="footer-image">
                    <img src="../../assets/img/footer-background.svg" />
                </div>
                <div class="card-body">
                    <h2 class="card-title">Encontre as vagas que mais se encaixam com o seu perfil, cadastre-se e tenha
                        acesso a soluções personalizadas</h5>
                        <a href="./cadastro-conta/cadastro-conta.html" class="link-register"><button
                                class="button button--primary">Candidate-se</button></a>
                </div>
            </div>
        </section>
    </main>
</body>

</html>