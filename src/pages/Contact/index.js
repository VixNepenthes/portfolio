import { motion } from 'framer-motion';

import classNames from 'classnames/bind';
import style from './Contact.module.scss';
import Header from '../../components/Header';

const cx = classNames.bind(style);
function Contact() {
    return (
        <motion.div
            className={cx('Wrapper')}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ y: window.innerHeight, transition: { duration: 0.25 } }}
        >
            <Header name="Get in touch" shadow="contact" />
        </motion.div>
    );
}

export default Contact;
