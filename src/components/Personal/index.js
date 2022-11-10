import classNames from 'classnames/bind';
import style from './Personal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import Details from '../Details';
import Card from '../Card';
import { personal } from '../../data';

const cx = classNames.bind(style);
function Personal() {
    const keys = Object.keys(personal);

    return (
        <div className={cx('Wrapper')}>
            <h3 className={cx('Header')}>Personal Infos</h3>
            <div className={cx('Container')}>
                <div className={cx('Info')}>
                    <div className={cx('Detail')}>
                        {keys.map((key, index) => {
                            return <Details title={key} value={personal[key]} key={index} />;
                        })}
                    </div>
                    <div className={cx('Hover')}>
                        <Button className={cx('Btn')}>
                            <div className={cx('Slide')}>
                                <FontAwesomeIcon icon={faAngleRight} className={cx('Icon')} />
                            </div>
                            <div className={cx('SlideName')}>CV</div>
                        </Button>
                    </div>
                </div>
                <div className={cx('Card')}>
                    <Card type={1} year={6} />
                    <Card type={0} project={3} />
                </div>
            </div>
        </div>
    );
}

export default Personal;
