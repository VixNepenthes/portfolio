import classNames from 'classnames/bind';
import style from './PopUp.module.scss';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import portfolio from '../../assets/images/portfolio.png';
import { projects } from '../../data';
const cx = classNames.bind(style);

function PopUp({ header, img }) {
    return (
        <div className={cx('Wrapper')}>
            <div className={cx('Flex')}>
                <div className={cx('Container')}>
                    <div className={cx('XBtn')}>
                        <Button>
                            <FontAwesomeIcon icon={faXmark} />
                        </Button>
                    </div>
                    <div className={cx('ProjectSlide')}>
                        <header className={cx('Header')}></header>
                        <div>
                            <Swiper
                                modules={[Navigation, EffectFade]}
                                navigation
                                effect
                                speed={800}
                                slidesPerView={1}
                                loop
                                className={cx('Swiper')}
                            >
                                <SwiperSlide className={cx('SwipersSlide')}>
                                    <img src={portfolio} alt="Portfolio" />
                                </SwiperSlide>
                                <SwiperSlide className={cx('SwipersSlide')}>
                                    <img src={portfolio} alt="Portfolio" />
                                </SwiperSlide>
                                <SwiperSlide className={cx('SwipersSlide')}>
                                    <img src={portfolio} alt="Portfolio" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopUp;
