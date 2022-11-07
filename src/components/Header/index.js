import classNames from 'classnames/bind';
import style from './Header.module.scss';

const cx = classNames.bind(style);

function Header({ name, shadow }) {
    const text = name.split(' ');
    let comp = '';
    let title = '';
    if (text.length > 2) {
        comp = text[0] + ' ' + text[1];
        title = ' ' + text[2];
    }
    return (
        <header className={cx('Wrapper')}>
            <h1 className={cx('Component')}>
                {comp !== '' ? comp : text[0] + ' '}
                <span className={cx('Title')}>{title !== '' ? title : text[1]}</span>
            </h1>
            <span className={cx('SubComponent')}>{shadow}</span>
        </header>
    );
}

export default Header;
