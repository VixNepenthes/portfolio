import classNames from 'classnames/bind';
import style from './TabMenu.module.scss';
import { tags, projects } from '../../data';
import React, { useState, useEffect } from 'react';
import portfolio from '../../assets/images/portfolio.png';
import PopUp from '../PopUp';
const cx = classNames.bind(style);

function TabMenu() {
    const [isActive, setIsActive] = useState(1);
    const [project, setProject] = useState([]);
    const [showPopUp, setShowPopUP] = useState(0);

    const handleRemove = () => {
        setShowPopUP(0);
    };

    useEffect(() => {
        switch (isActive) {
            case 1:
                setProject(projects);
                break;
            case 2:
                setProject(projects.filter((value) => value.tag === 'HTML/CSS/JS'));
                break;
            case 3:
                setProject(projects.filter((value) => value.tag === 'REACT/SCSS'));
                break;
            default:
                break;
        }
    }, [isActive]);

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
                    {project.map((item) => (
                        <React.Fragment key={item.id}>
                            <div
                                className={cx('ProjectItem')}
                                style={{ backgroundImage: `url(${item.img[0]})` }}
                                onClick={() => {
                                    setShowPopUP(item.id);
                                }}
                            >
                                <h3 className={cx('ProjectName')}>{item.name}</h3>
                            </div>
                            <PopUp active={showPopUp === item.id ? true : false} remove={handleRemove} project={item} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TabMenu;
