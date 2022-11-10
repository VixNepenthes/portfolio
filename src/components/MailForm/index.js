import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import Button from '../Button';
import style from './MailForm.module.scss';
import emailjs from '@emailjs/browser';

const cx = classNames.bind(style);

function MailForm() {
    const form = useRef();

    const inputName = useRef();
    const inputMail = useRef();
    const inputSubject = useRef();
    const inputMessage = useRef();
    const pErrorName = useRef();
    const pErrorMail = useRef();
    const pErrorSubject = useRef();
    const pErrorMessage = useRef();
    const pSuccess = useRef();
    const handleBlur = (ref, errorRef) => {
        if (ref.current.value.trim() === '') {
            errorRef.current.style = 'display:block';
        } else {
            errorRef.current.style = 'display:none';
        }
    };
    const sendEmail = (e) => {
        e.preventDefault();
        inputName.current.value = '';
        inputMail.current.value = '';
        inputSubject.current.value = '';
        inputMessage.current.value = '';
        setTimeout(() => {
            pSuccess.current.style = 'display: block';
        }, 2000);

        emailjs.sendForm('service_657os0o', 'template_y009owf', form.current, 'eHHLhBJn243CkO7jQ').then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            },
        );
    };
    return (
        <div className={cx('Wrapper')}>
            <form ref={form} onSubmit={sendEmail}>
                <div className={cx('Content')}>
                    <div className={cx('Name', 'Relative')}>
                        <input
                            type="text"
                            name="name"
                            className={cx('Input')}
                            placeholder="Your Name"
                            ref={inputName}
                            onBlur={() => {
                                handleBlur(inputName, pErrorName);
                            }}
                        />
                        <p className={cx('Error', 'None')} ref={pErrorName}>
                            Yêu cầu điền đủ
                        </p>
                    </div>
                    <div className={cx('Email', 'Relative')}>
                        <input
                            type="text"
                            name="email"
                            className={cx('Input')}
                            placeholder="Your Mail"
                            ref={inputMail}
                            onBlur={() => {
                                handleBlur(inputMail, pErrorMail);
                            }}
                        />
                        <p className={cx('Error', 'None')} ref={pErrorMail}>
                            Yêu cầu điền đủ
                        </p>
                    </div>
                </div>
                <div className={cx('Relative')}>
                    <input
                        name="subject"
                        className={cx('Input', 'Field')}
                        placeholder="Your Subject"
                        ref={inputSubject}
                        onBlur={() => {
                            handleBlur(inputSubject, pErrorSubject);
                        }}
                    />
                    <p className={cx('Error', 'None')} ref={pErrorSubject}>
                        Yêu cầu điền đủ
                    </p>
                </div>
                <div className={cx('Relative')}>
                    <textarea
                        name="message"
                        className={cx('Input', 'Field', 'Message')}
                        placeholder="Your Message"
                        ref={inputMessage}
                        onBlur={() => {
                            handleBlur(inputMessage, pErrorMessage);
                        }}
                    />
                    <p className={cx('Error', 'None')} ref={pErrorMessage}>
                        Yêu cầu điền đủ
                    </p>
                    <p className={cx('None')} ref={pSuccess}>
                        Send Mail Success!
                    </p>
                </div>
                <div className={cx('Submit')}>
                    <Button type="submit" className={cx('Btn')}>
                        <div className={cx('Slide')}>
                            <FontAwesomeIcon icon={faAngleRight} className={cx('Icon')} />
                        </div>
                        <div className={cx('SlideName')}>Send Message</div>
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default MailForm;
