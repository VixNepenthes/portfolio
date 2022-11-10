import classNames from 'classnames/bind';
import Text from '../../components/Text';
import style from './Home.module.scss';
import { motion } from 'framer-motion';

const cx = classNames.bind(style);

function Home() {
    return (
        <motion.div
            className={cx('Wrapper')}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ y: window.innerHeight, transition: { duration: 0.5 } }}
        >
            <div className={cx('Container')}>
                <div className={cx('ColorBlock')}></div>
                <div className={cx('ImageBlock')}>
                    <div className={cx('Image')}></div>
                </div>
                <div className={cx('Text')}>
                    <Text />
                </div>
            </div>
        </motion.div>
    );
}

export default Home;
