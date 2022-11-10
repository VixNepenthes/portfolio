import classNames from 'classnames/bind';
import style from './Card.module.scss';

const cx = classNames.bind(style);

function Card({ year, project, type }) {
    return (
        <div className={cx('Wrapper')}>
            {type === 1 ? (
                <>
                    <div className={cx('Count')}>
                        {year}
                        <sup>+</sup>
                    </div>
                    <div className={cx('Value')}>Month(s) Experience</div>
                </>
            ) : (
                <>
                    <div className={cx('Count')}>
                        {project}
                        <sup>+</sup>
                    </div>

                    <div className={cx('Value')}>Project(s) Experience</div>
                </>
            )}
        </div>
    );
}

export default Card;
