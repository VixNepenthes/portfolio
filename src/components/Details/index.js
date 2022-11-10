import classNames from 'classnames/bind';
import style from './Details.module.scss';

const cx = classNames.bind(style);

function Details({ title, value }) {
    return (
        <div className={cx('Wrapper')}>
            <div className={cx('Info')}>{title}:</div>
            <div className={cx('InfoDesc')}>{value}</div>
        </div>
    );
}

export default Details;
