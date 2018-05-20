var page = require('page');
var empty = require('empty-element');
var main = document.getElementById('main-container');
var template = require('template');

page('/', function(ctx, next){
	main.innerHTML = 'Home <a href="/signup"> Signup</a>';
})

page('/signup', function(ctx, next){
	var el = yo`<div class="container">
			<div class="row">
				<div class="col s10 push-s1">
					<div class="row">
						<div class="col m5 hide-on-small-only">
							<img class="iphone" src="public/iphone.png"/>
						</div>
						<div class="col s12 m7">
							<div class="row">
								<div class="singup-box">
									<h1 class="platzigram">Platzigram</h1>
									<form class="signup-form">
										<h2>Registrate para ver fotos de tus amigos estudiando en Platzi</h2>
										<div class="section">
											<a class="btn btn-fb hide-on-small-only"> Iniciar Sesión con Facebook</a>
											<a class="btn btn-fb hide-on-med-and-up"> Iniciar Sesión</a>
										</div>
										<div class="divider"></div>
										<div class="section">
											<input type="email" name="email" placeholder="Correo Electrónico"></input>
											<input type="text" name="name" placeholder="Nombre Completo"></input>
											<input type="text" name="username" placeholder="Nombre de Usuario"></input>
											<input type="password" name="password" placeholder="Contraseña"></input>
											<button class="btn waves-effect waves-light btn-signup" type="submit">Regístrate</button>
										</div>
									</form>
								</div>							
								<div class="row">
									<div class="login-box">
										¿Tienes una cuenta? <a href="/signin">Entrar</a>
									</div>
								</div>

							</div>							
						</div>
					</div>
				</div>
			</div>`;
	empty(main).appendChild(el);
})
page();