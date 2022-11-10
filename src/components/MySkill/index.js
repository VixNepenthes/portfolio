import classNames from 'classnames/bind';
import style from './MySkill.module.scss';
import { logos } from '../../data';
import Aos from 'aos';

const cx = classNames.bind(style);
Aos.init();
function MySkill() {
    const logo = Object.keys(logos);
    return (
        <div className={cx('Skill')}>
            {logo.map((item, index) => (
                <div data-aos="fade-up" className={cx('Wrapper')} key={index}>
                    <div className={cx('Img')}>
                        <img className={cx('Logo')} src={logos[item]} alt={logo} />
                    </div>
                    <div className={cx('Title')}>{item}</div>
                </div>
            ))}
        </div>
    );
}

export default MySkill;
