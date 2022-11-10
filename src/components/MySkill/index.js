import classNames from 'classnames/bind';
import style from './MySkill.module.scss';
import { logos } from '../../data';
import { useRef } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';

const cx = classNames.bind(style);
function MySkill() {
    const refRef = useRef(null);

    const logo = Object.keys(logos);
    return (
        <div className={cx('Skill')} ref={refRef}>
            {logo.map((item, index) => (
                <ScrollAnimation
                    animateIn={index % 2 == 0 ? 'lightSpeedInLeft' : 'lightSpeedInRight'}
                    animateOut={index % 2 == 0 ? 'lightSpeedOutLeft' : 'lightSpeedOutRight'}
                    duration={0.6}
                    className={cx('Wrapper')}
                    key={index}
                >
                    <div className={cx('Img')}>
                        <img className={cx('Logo')} src={logos[item]} alt={logo} />
                    </div>
                    <div className={cx('Title')}>{item}</div>
                </ScrollAnimation>
            ))}
        </div>
    );
}

export default MySkill;
