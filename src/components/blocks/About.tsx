export function About() {
	return (
		<section className={"block-about pb-[8rem] relative"}>
			<div className="container">
				<div className={"px-[9.1rem] relative"}>
					<h2 className={"title mb-[0.7rem]"}>О компании</h2>
					<div className={"flex flex-col gap-y-[11rem]"}>
						<div className={"flex items-center gap-[4rem_14rem]"}>
							<div className={"flex-grow"}>
								<hgroup className={"flex flex-col text-[3.2rem] font-bold leading-[1.2]"}>
									<h3 className={"logo block-about__logo"}>MERITOCRAT<span
										className={"inline-block ms-4 font-normal"}>—</span></h3>
									<h4>комплексные бизнес-решения</h4>
								</hgroup>
								<div className="content mt-[2.8rem]">
									<p>Мы являемся экспертами в области стратегического консультирования и оптимизации
										операционных процессов для бизнеса. Наши консультанты предлагают клиентам
										услуги,
										позволяющие им принимать смелые решения для обеспечения устойчивого
										развития.</p>
									<p><span className={"font-normal"}>MERITOCRAT</span> оказывает полный комплекс
										бизнес-услуг от стратегического планирования и
										аутсорсинга бизнес-процессов до реализации цифровых проектов.</p>
								</div>
							</div>
							<img className={"w-[34.2rem] me-[1.7rem] object-contain pointer-events-none select-none"}
								src={"/Illustration1.png"} alt="launch-rocket" />
						</div>
						<div className={"flex items-center gap-[4rem_16rem]"}>
							<img className={"w-[40rem] object-contain pointer-events-none select-none"}
								src={"/Illustration2.png"} alt="user-data" />
							<div className={"flex flex-col"}>
								<div className="content text-color-6 mb-[2rem]">
									<p>Цель сотрудничества — претворить в жизнь новаторские идеи и выстроить
										долгосрочные
										отношения, чтобы применять современные методы работы, добиваться улучшения
										операционной
										деятельности и развивать навыки персонала. Независимо от сложности задач, мы
										сосредоточены на достижении практических результатов.</p>
									<p>Среди наших экспертов — бизнес-аналитики, ученые и консультанты различных
										индустрий.
										Мы
										изучаем рынки, тенденции и передовые практики во всех отраслях как на местном,
										так и
										на
										международном уровне.</p>
									<p>Будучи меритократами в сфере консалтинга, мы поможем вам стать корифеем своего
										дела.
										Взаимодействие с нами станет поворотным моментом в истории вашей компании.</p>
								</div>
								<a href="/"
									className="btn btn-default min-w-[23rem] block-about__btn-default relative bottom-0 right-[-11rem] ms-auto">Связаться
									с нами</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}