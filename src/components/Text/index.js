import classNames from 'classnames/bind';
import style from './Text.module.scss';
import Button from '../../components/Button';
import routesConfig from '../../config/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { NavContext } from '../AnimateRoutes';

const cx = classNames.bind(style);

function Text() {
    const value = useContext(NavContext);
    return (
        <div>
            <h1 className={cx('Title')}>
                <div className={cx('Name')}>I'm Huỳnh Tiến Vĩ</div>
                <span>Web DEV!</span>
            </h1>
            <p className={cx('Desc')}>
                Chào mọi người. Mình là Vĩ, hiện là sinh viên năm thứ n của PTIT. Đây là Project đầu tay về ReactJs của
                mình sau 3 tháng học HTML, CSS và ReactJs. Cảm ơn mọi người đã vào xem trang này
            </p>
            <div className={cx('Hover')}>
                <Button
                    to={routesConfig.projects}
                    className={cx('Btn')}
                    onClick={() => {
                        value.setIsActive(1);
                    }}
                >
                    <div className={cx('Slide')}>
                        <FontAwesomeIcon icon={faAngleRight} className={cx('Icon')} />
                    </div>
                    <div className={cx('SlideName')}>Projects</div>
                </Button>
            </div>
            <div className={cx('Hover')}>
                <Button
                    to={routesConfig.projects}
                    className={cx('Btn')}
                    onClick={() => {
                        value.setIsActive(2);
                    }}
                >
                    <div className={cx('Slide')}>
                        <FontAwesomeIcon icon={faAngleRight} className={cx('Icon')} />
                    </div>
                    <div className={cx('SlideName', 'About')}>About</div>
                </Button>
            </div>
        </div>
    );
}

export default Text;
