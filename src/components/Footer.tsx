export default function Footer() {
    return (
        <footer className="footer">
            <img className="sh-elem sh-elem-1 w-[129.5rem] h-[118.1rem]" src="/footer-circle-1.png"/>
            <img className="sh-elem sh-elem-2 w-[155.2rem] h-[157.2rem]" src="/footer-circle-2.png"/>

            <div className="footer-inner">
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-block">
                            <a href="./" className="footer-logo logo">
                                MERITOCRAT
                            </a>
                            <div className="footer__contact-data">
                                <address>
                                    <a href="tel:88002671945">
                                        8 (800) 267-19-45
                                    </a>
                                </address>
                                <ul>
                                    <li>
                                        <div>Общие вопросы:</div>
                                        <div>
                                            <a href="mailto:info@meritocratconsulting.ru">
                                                info@meritocratconsulting.ru
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div>Пресс-служба:</div>
                                        <div>
                                            <a href="mailto:pr@meritocratconsulting.ru">
                                                pr@meritocratconsulting.ru
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div>Партнерство:</div>
                                        <div>
                                            <a href="mailto:partner@meritocratconsulting.ru">
                                                partner@meritocratconsulting.ru
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-block footer-block--nav-menu">
                            <nav className="footer-menu">
                                <ul>
                                    <li><a href="./">Главная</a></li>
                                    <li><a href="#">О компании</a></li>
                                    <li><a href="#">Услуги</a></li>
                                    <li><a href="#">Аналитика</a></li>
                                    <li><a href="#">Проекты</a></li>
                                    <li><a href="#">Партнеры</a></li>
                                    <li><a href="#">Вакансии</a></li>
                                    <li><a href="#">Контакты</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#">Пользовательское соглашение
                                        и политика конфиденциальности</a></li>
                                    <li><a href="#">Политика использования файлов cookies</a></li>
                                    <li><a href="#">Соглашение по продаже обзоров</a></li>
                                    <li><a href="#">Способы оплаты</a></li>
                                    <li><a href="#">Реквизиты</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="footer-block footer-block--form">
                            <p className="footer-block__text">Подпишитесь на рассылку
                                Новости и спецпредложения</p>
                            <form className="form form-mailing" id="formMailing" name="form-mailing" action="">
                                <input type="text" className="input" placeholder="E-mail"/>
                                <button className="btn btn-default btn-submit" type="button">Подписаться</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <p className="copyright">2023 <span>MERITOCRAT.</span> Все права защищены</p>
                        <section className="footer__social-networks">
                            <ul>
                                <li>
                                    <a className="social-icon" href="#">
                                        <img
                                            src="/icons/icon-whatsapp.png"
                                            alt=""
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a className="social-icon" href="#">
                                        <img
                                            src="/icons/icon-telegram.png"
                                            alt=""
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a className="social-icon" href="#">
                                        <img
                                            src="/icons/icon-instagram.png"
                                            alt=""
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a className="social-icon" href="#">
                                        <img src="/icons/icon-vk.png" alt=""/>
                                    </a>
                                </li>
                            </ul>
                        </section>
                        <p className="creator">Разработано | DaT-Studio</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
