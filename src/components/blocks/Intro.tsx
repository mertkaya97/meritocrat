export function Intro() {
	return (
		<section className="block-intro relative">
			<div className="container">
				<div className="flex flex-col items-center justify-center block-intro__inner min-h-screen py-[10rem]">
					<div className={"flex flex-col items-center gap-[8rem_4rem]"}>
						<hgroup className="flex flex-col items-center text-center">
							<h1 className="logo block-intro__title uppercase">meritocrat</h1>
							<h2 className="block-intro__subtitle uppercase">Комплексное обслуживание бизнеса</h2>
						</hgroup>
						<div className="flex items-center gap-[3rem_5rem]">
							<a href="/src/components/blocks/Contacts" className="btn btn-default block-intro__btn">Связаться с нами</a>
							<a href="/src/components/blocks/Contacts" className="btn btn-ghost block-intro__btn">Скачать презентацию</a>
						</div>
					</div>
					<img src={"/pic-intro.png"} className="sh-elem w-[75.4rem] h-[72.3rem] "
						alt={"main-picture-intro"} />
					<img src={"/pic-intro-sh-1.png"} className="sh-elem w-[51.7rem] inset h-[42.3rem]"
						alt={"picture-intro-1"} />
				</div>
			</div>
		</section>
	);
}