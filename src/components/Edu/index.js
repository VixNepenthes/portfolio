import classNames from 'classnames/bind';
import style from './Edu.module.scss';
import Aos from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { edu } from '../../data';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function Edu() {
    Aos.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-quad',
        delay: 100,
    });

    return (
        <div className={cx('Wrapper')}>
            <div className={cx('Container')}>
                {edu.map((item) => (
                    <div data-aos="fade-right" className={cx('EduMoment')} key={item.id}>
                        <div className={cx('Icon')}>
                            <FontAwesomeIcon icon={faBriefcase} />
                        </div>
                        <div className={cx('Content')}>
                            <span className={cx('Time')}>{item.time}</span>
                            <h3 className={cx('Name')}>{item.name}</h3>
                            <p className={cx('Desc')}>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Edu;
