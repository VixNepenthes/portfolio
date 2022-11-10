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
const cx = classNames.bind(style);

function PopUp({ active, remove, project }) {
    return (
        <div className={cx('Wrapper', { active })}>
            <div className={cx('Flex')}>
                <div className={cx('Container')}>
                    <div className={cx('XBtn')} onClick={remove}>
                        <Button>
                            <FontAwesomeIcon icon={faXmark} />
                        </Button>
                    </div>
                    <div className={cx('ProjectSlide')}>
                        <header className={cx('Header')}>{project.name}</header>
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
                                {project.img.map((item, index) => (
                                    <SwiperSlide className={cx('SwipersSlide')} key={index}>
                                        <img className={cx('SlideImg')} src={item} alt="Portfolio" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className={cx('ProjectDetails')}>
                        <header className={cx('Header')}>{project.fullname || 'null'}</header>
                        <p className={cx('Desc')}>{project.desc}</p>
                        <ul>
                            <li className={cx('SubDesc')}>
                                Created:
                                <span className={cx('DescData')}>{project.created || 'null'}</span>
                            </li>
                            <li className={cx('SubDesc')}>
                                Role:
                                <span className={cx('DescData')}>{project.role || 'null'}</span>
                            </li>

                            <li className={cx('SubDesc')}>
                                Frontend:
                                <span className={cx('DescData')}>{project.frontend || 'null'}</span>
                            </li>
                            <li className={cx('SubDesc')}>
                                Backend:
                                <span className={cx('DescData')}>{project.backend || 'null'}</span>
                            </li>
                            <li className={cx('SubDesc')}>
                                Demo:
                                <span className={cx('DescData')}>{project.demo || 'null'}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopUp;
