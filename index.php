<!DOCTYPE html>

<html lang="pt-br">

	<head>
		<title>Projeto</title>

		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0" />
		
		<!--Tags para seo-->
		<meta name="description" content="Projeto" />
		<meta name="keyword" content="projeto, web, design, site" />
		<meta name="author" content="João G. Bortoletto" />
		<!----------------->

		<!--Compatibilidade-->
		<meta http-equiv="X-AU-Compatible" content="IE-Edge" />
		<!------------------->

		<!--Estilização-->
		<link href="css/style.css" type="text/css" rel="stylesheet" />
		<!--------------->

        <!--Icone-->
        <link rel="apple-touch-icon" sizes="180x180" href="assets/icons/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="assets/icons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="assets/icons/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        <!--------->

	</head>

	<body>
        <section class="main">
            <div class="container">
                <form method="post">
                    <h2>Sum system</h2>

                    <div class="form-input">
                        <label>Number One:</label>
                        <input type="number" id="number1" name="number1" />
                    </div><!--form-input-->

                    <div class="form-input">
                        <label>Number Two:</label>
                        <input type="number" id="number2" name="number2" />
                    </div><!--form-input-->

                    <button onclick="sumTwoNumbers(event)" type="submit">Calculate</button>
                </form>
            </div><!--container-->
        </section><!--main-->

        <script src="script.js"></script>
	</body>
</html>