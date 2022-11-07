import { motion } from 'framer-motion';

import classNames from 'classnames/bind';
import style from './About.module.scss';
import Header from '../../components/Header';

const cx = classNames.bind(style);
function About() {
    return (
        <motion.div
            className={cx('Wrapper')}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ y: window.innerHeight, transition: { duration: 0.25 } }}
        >
            <Header name="About me" shadow="about me" />
        </motion.div>
    );
}

export default About;
