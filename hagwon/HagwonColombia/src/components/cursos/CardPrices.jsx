import { Swiper, SwiperSlide } from "swiper/react"



import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

// import Swiper and modules styles

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';





const CardPrices = () => {

    return (
        <div className="w-full ">
            <Swiper
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container "
            >
                <SwiperSlide className="box-slider p-5 ">
                    <h1 className="font-primary text-center font-bold mb-10">PLAN BASICO</h1>

                    <h3 className="hover:text-accent hover:font-semibold">Beneficios</h3>
                    <ul className="place-content-center p-2">
                        <li className="font-bold ">⚡1 semana de 5 horas  + 1 clase gratuita evaluativa </li>
                        <li className="font-bold"> ⚡la clase extra es repaso de temas, consejos por parte del docente
                        </li>
                        <li className="font-bold">⚡Clases totalmente personalizadas al estudiante y su manera de aprendizaje
                        </li>

                    </ul>

                    <button className="underline items-center justify-center p-5 hover:text-accent hover:font-bold">Ver mas beneficios...</button>

                    <div className="text-center mb-10">
                        <button className="btn "> 1 Week <span className="font-semibold">$ 105.900</span></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="box-slider  p-5">
                    <h1 className="font-primary text-center font-bold mb-10">PLAN PREMIUM</h1>


                    <h3 className="hover:text-accent hover:font-semibold">Beneficios</h3>
                    <ul className="place-content-center p-2">
                        <li className="font-bold">⚡1 mes de 20 horas + 4 clases totalmente gratuitas el día sabado en donde se reforzaran los temas y se brindaran concejos y métodos de autoaprendizaje
                        </li>

                        <li className="font-bold">⚡Clases totalmente personalizadas al estudiante y su manera de aprendizaje</li>
                        <li className="font-bold">⚡Seguimiento y desarrollo garantizado
                        </li>

                    </ul>
                    <button className="underline items-center justify-center p-5 hover:text-accent hover:font-bold">Ver mas beneficios...</button>

                    <div className="text-center mb-10">
                        <button className="btn"> 1 Month <span className="semibold">$ 429.900</span></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="box-slider p-5">
                    <h1 className="font-primary text-center font-bold mb-10">
                        PRUEBA
                    </h1>

                    <h3 className="hover:text-accent hover:font-semibold">Beneficios</h3>
                    <ul className="place-content-center p-2">
                        <li className="font-bold ">⚡1 hora  + 25 minutos gratuitos con el fin de conocer al estudiante
                        </li>
                        <li className="font-bold"> ⚡Los 25 minutos son válidos en el primer contacto, clases siguientes se tomarán normal

                        </li>
                        <li className="font-bold">⚡Clases totalmente personalizadas al estudiante y su manera de aprendizaje
                        </li>

                    </ul>
                    <button className="underline items-center justify-center p-5 hover:text-accent hover:font-bold">Ver mas beneficios</button>

                    <div className="text-center mb-10">
                        <button className="btn"> 1 hour <span className="font-semibold">$ 25.000</span></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="box-slider p-5">
                    <h1 className="font-primary text-center font-bold mb-10">
                        PLAN VACACIONAL
                    </h1>

                    <h3 className="hover:text-accent hover:font-semibold">Beneficios</h3>
                    <ul className="place-content-center p-2">
                        <li className="font-bold">— Plan válido en temporada de diciembre a 02 de febrero, semana santa o vacaciones de Junio—
                        </li>
                        <li className="font-bold"> ⚡2 semanas de 5 horas cada una  + 1 clase gratuita extra de refuerzo como clase re evaluativa a mitad del curso
                        </li>
                        <li className="font-bold">⚡Clases totalmente personalizadas al estudiante y su manera de aprendizaje
                        </li>

                    </ul>

                    <button className="underline items-center justify-center p-5 hover:text-accent hover:font-bold">Ver mas beneficios</button>

                    <div className="text-center mb-10">
                        <button className="btn"> 2 Weeks <span className="font-semibold">$ 199.900</span></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="box-slider p-5">
                    <h1 className="font-primary text-center font-bold mb-10 uppercase">PLAN intensivo</h1>


                    <h3 className="hover:text-accent hover:font-semibold">
                        Beneficios
                    </h3>

                    <ul className="place-content-center p-2">
                        <li className="font-bold">⚡1 semana de 10 horas + 1 clase gratuita extra de refuerzo como clase re evaluativa
                        </li>
                        <li className="font-bold"> ⚡La clase extra es repaso de temas, consejos por parte del docente
                        </li>
                        <li className="font-bold">⚡Clases totalmente personalizadas al estudiante y su manera de aprendizaje
                        </li>

                    </ul>

                    <button className="underline items-center justify-center p-5 hover:text-accent hover:font-bold">Ver mas beneficios</button>
                    <div className="text-center mb-10">
                        <button className="btn"> 1 Week  <span className="font-semibold">$ 205.900</span></button>
                    </div>
                </SwiperSlide>
                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name='arrow-back-outline'></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name='arrow-forward-outline'></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>

            </Swiper>
        </div >
    )
}

export default CardPrices