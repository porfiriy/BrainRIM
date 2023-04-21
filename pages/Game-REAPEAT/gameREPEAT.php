<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>2048 игр</title>
	<link rel="stylesheet" href="/pages/Game-REAPEAT/css/gameREPEAT.css">    
</head>
<body>
	<div class="marg">
		<p>SCORE:<span id="score01">0</span></p>    
		<div class="main">                                              
			<div class="cell" id="c00"></div>
			<div class="cell" id="c01"></div>
			<div class="cell" id="c02"></div>
			<div class="cell" id="c03"></div>

			<div class="cell" id="c10"></div>
			<div class="cell" id="c11"></div>
			<div class="cell" id="c12"></div>
			<div class="cell" id="c13"></div>
			
			<div class="cell" id="c20"></div>
			<div class="cell" id="c21"></div>
			<div class="cell" id="c22"></div>
			<div class="cell" id="c23"></div>

			<div class="cell" id="c30"></div>
			<div class="cell" id="c31"></div>
			<div class="cell" id="c32"></div>
			<div class="cell" id="c33"></div>
		</div>
		<div class="gameover" id="gameover">                
			<div class="over">
				<p>GAME OVER!!!</p>
				<p>SCORE:<span id="score02"></span></p>
				<a href="javascript:game.start()">try again!</a>
			</div>
		</div>
	</div>
    <script src="/pages/Game-REAPEAT/js/gameREPEAT.js"></script>  
</body>
</html>