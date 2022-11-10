import classNames from 'classnames/bind';
import style from './Edu.module.scss';
import ScrollAnimation from 'react-animate-on-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { edu } from '../../data';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import 'animate.css/animate.compat.css';

const cx = classNames.bind(style);

function Edu() {
    return (
        <div className={cx('Wrapper')}>
            <div className={cx('Container')}>
                {edu.map((item) => (
                    <ScrollAnimation
                        animateIn="rollIn"
                        animateOut="rollOut"
                        duration={0.6}
                        className={cx('EduMoment')}
                        key={item.id}
                    >
                        <div className={cx('Icon')}>
                            <FontAwesomeIcon icon={faBriefcase} />
                        </div>
                        <div className={cx('Content')}>
                            <span className={cx('Time')}>{item.time}</span>
                            <h3 className={cx('Name')}>{item.name}</h3>
                            <p className={cx('Desc')}>{item.desc}</p>
                        </div>
                    </ScrollAnimation>
                ))}
            </div>
        </div>
    );
}

export default Edu;
