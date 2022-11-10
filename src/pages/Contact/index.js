import { motion } from 'framer-motion';

import classNames from 'classnames/bind';
import style from './Contact.module.scss';
import Header from '../../components/Header';
import Info from '../../components/Info';
import MailForm from '../../components/MailForm';

const cx = classNames.bind(style);
function Contact() {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ y: window.innerHeight, transition: { duration: 0.5 } }}
        >
            <Header name="Get in touch" shadow="contact" />
            <div className={cx('Wrapper')}>
                <Info />
                <MailForm />
            </div>
        </motion.div>
    );
}

export default Contact;
