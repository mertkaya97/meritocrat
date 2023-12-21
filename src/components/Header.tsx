export default function Header() {
	return (
		<header className={"header"}>
			<div className={"container"}>
				<div className={"header-inner"}>
					<a href="Header" className={"logo"}>
						MERITOCRAT
					</a>
					<nav className={"header-menu"}>
						<ul>
							<li><a href="#">О компании</a></li>
							<li><a href="#">Услуги</a></li>
							<li><a href="#">Аналитика</a></li>
							<li><a href="#">Проекты</a></li>
							<li><a href="#">Партнеры</a></li>
							<li><a href="#">Контакты</a></li>
						</ul>
					</nav>
					<address className={"header-address"}>
						<a href="tel:88002671945">8 (800) 267-19-45</a>
					</address>
				</div>
			</div>
		</header>
	);
}
