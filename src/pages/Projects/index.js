import { motion } from 'framer-motion';
import Header from '../../components/Header';
import classNames from 'classnames/bind';
import style from './Projects.module.scss';
import PopUp from '../../components/PopUp';
import TabMenu from '../../components/TabMenu';

const cx = classNames.bind(style);

function Projects() {
    return (
        <motion.div
            className={cx('Wrapper')}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ y: window.innerHeight, transition: { duration: 0.25 } }}
        >
            <Header name="My Project" shadow="Works" />
            <TabMenu />
        </motion.div>
    );
}

export default Projects;
