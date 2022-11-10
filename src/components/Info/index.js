import classNames from 'classnames/bind';
import style from './Info.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFacebookMessenger, faGithub } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(style);

function Info() {
    return (
        <div className={cx('Wrapper')}>
            <h3 className={cx('Header')}>Don't be shy!</h3>
            <p className={cx('Desc')}>
                Mọi thông tin liên hệ của mình ở bên dưới nhé, bạn có thể mail cho mình nếu thích
            </p>
            <div className={cx('Container')}>
                <div className={cx('Icon')}>
                    <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className={cx('Content')}>
                    <span className={cx('Title')}>Address</span>
                    <br />
                    <span className={cx('Value')}>District 5, Ho Chi Minh City, Vietnam</span>
                </div>
            </div>
            <div className={cx('Container')}>
                <div className={cx('Icon')}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                    <span className={cx('Title')}>Email</span>
                    <br />
                    <span className={cx('Value')}>viht61220@gmail.com</span>
                </div>
            </div>
            <div className={cx('Container')}>
                <div className={cx('Icon')}>
                    <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                    <span className={cx('Title')}>Phone</span>
                    <br />
                    <span className={cx('Value')}>0898616934</span>
                </div>
            </div>
            <div className={cx('Link')}>
                <a
                    href="https://facebook.com/quydai0612"
                    className={cx('LinkWrapper')}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className={cx('LinkIcon')}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </div>
                </a>
                <a href="https://www.messenger.com/t/quydai0612" className={cx('LinkWrapper')} target="_blank">
                    <div className={cx('LinkIcon')}>
                        <FontAwesomeIcon icon={faFacebookMessenger} />
                    </div>
                </a>
                <a
                    href="https://github.com/VixNepenthes"
                    className={cx('LinkWrapper')}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className={cx('LinkIcon')}>
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Info;
