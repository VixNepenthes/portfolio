import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return <div className={cx('Wrapper')}>{children}</div>;
}

export default DefaultLayout;
