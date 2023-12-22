export function SchemeWork() {
    return (
        <section className={"block-scheme-work pt-[7.5rem] pb-[15rem]"}>
            <div className="container">
                <div className="flex flex-col items-center">
                    <div className="title mb-[10rem]">Схема работы</div>
                    <div className="px-[9.1rem] block-scheme-work__grid grid grid-cols-5 justify-between mb-[13.6rem] w-full">
                        <div className="block-scheme-work__grid-item">
                            <div>1</div>
                            <p>Анализируем заказ</p>
                        </div>
                        <span className="block-scheme-work__grid-elem"></span>
                        <div className="block-scheme-work__grid-item">
                            <div>2</div>
                            <p>Обсуждаем формат работы и заключаем договор</p>
                        </div>
                        <span className="block-scheme-work__grid-elem"></span>
                        <div className="block-scheme-work__grid-item">
                            <div>3</div>
                            <p>Реализуем проект</p>
                        </div>
                    </div>
                    <div className="flex justify-start gap-[5rem_7.6rem] w-full">
                        <div className={"w-[clamp(30rem,auto,64.3rem]"}>
                            <h3 className="text-[3rem] font-semibold mb-[2.7rem]">Мы готовы приступить к работе. А вы?</h3>
                            <form className={'flex flex-col gap-[1.8rem]'} action="">
                                <input className={"input"} type="text" placeholder={"Имя"}/>
                                <input className={"input"} type="text" placeholder={"Телефон"}/>
                                <input className={"input"} type="text" placeholder={"E-mail"}/>
                            </form>
                        </div>
                        <a href="/" className="btn btn-default w-[42rem] mt-auto">Оформить заявку</a>
                    </div>
                </div>
            </div>
        </section>
    );
}