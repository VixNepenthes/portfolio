import { motion } from 'framer-motion';

import classNames from 'classnames/bind';
import style from './About.module.scss';
import Header from '../../components/Header';
import Personal from '../../components/Personal';
import MySkill from '../../components/MySkill';
import Edu from '../../components/Edu';

const cx = classNames.bind(style);
function About() {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ y: window.innerHeight, transition: { duration: 0.5 } }}
        >
            <Header name="About me" shadow="about me" />
            <div className={cx('Wrapper')}>
                <Personal />

                <h3 className={cx('Header')}>My Skill</h3>
                <MySkill />
                <h3 className={cx('Header')}>Education & Experience</h3>
                <Edu />
            </div>
        </motion.div>
    );
}

export default About;
