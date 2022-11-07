import classNames from 'classnames/bind';
import routesConfig from '../../../../config/routes';
import Button from '../../../Button';
import style from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBriefcase, faUser, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { NavContext } from '../../../AnimateRoutes';
import { useContext } from 'react';
const cx = classNames.bind(style);

function Navbar() {
    const value = useContext(NavContext);

    return (
        <aside className={cx('Wrapper')}>
            <nav className={cx('Nav')}>
                <div className={cx('Hover')}>
                    <Button
                        to={routesConfig.home}
                        className={cx('Btn')}
                        onClick={() => {
                            value.setIsActive(0);
                        }}
                        active={value.isActive === 0 ? true : false}
                    >
                        <div className={cx('Title')}>Home</div>

                        <FontAwesomeIcon icon={faHouse} />
                    </Button>
                </div>
                <div className={cx('Hover')}>
                    <Button
                        to={routesConfig.projects}
                        className={cx('Btn')}
                        onClick={() => {
                            value.setIsActive(1);
                        }}
                        active={value.isActive === 1 ? true : false}
                    >
                        <div className={cx('Title')}>Projects</div>

                        <FontAwesomeIcon icon={faBriefcase} />
                    </Button>
                </div>
                <div className={cx('Hover')}>
                    <Button
                        to={routesConfig.about}
                        className={cx('Btn')}
                        onClick={() => {
                            value.setIsActive(2);
                        }}
                        active={value.isActive === 2 ? true : false}
                    >
                        <div className={cx('Title')}>About</div>

                        <FontAwesomeIcon icon={faUser} />
                    </Button>
                </div>
                <div className={cx('Hover')}>
                    <Button
                        to={routesConfig.contact}
                        className={cx('Btn')}
                        onClick={() => {
                            value.setIsActive(3);
                        }}
                        active={value.isActive === 3 ? true : false}
                    >
                        <div className={cx('Title')}>Contact</div>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </Button>
                </div>
            </nav>
        </aside>
    );
}

export default Navbar;
