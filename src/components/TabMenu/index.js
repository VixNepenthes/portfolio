import classNames from 'classnames/bind';
import style from './TabMenu.module.scss';
import { tags } from '../../data';
import { useState } from 'react';
const cx = classNames.bind(style);

function TabMenu() {
    const [isActive, setIsActive] = useState(1);
    return (
        <div className={cx('Wrapper')}>
            <ul className={cx('TabList')}>
                {tags.map((item) => (
                    <li
                        className={isActive === item.id ? cx('TabItem', 'active') : cx('TabItem')}
                        key={item.id}
                        onClick={() => {
                            setIsActive(item.id);
                        }}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
            <div className={cx('Project')}>
                <div className={cx('Container')}>
                    <div className={cx('ProjectItem')}>
                        <h3 className={cx('ProjectName')}></h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabMenu;
