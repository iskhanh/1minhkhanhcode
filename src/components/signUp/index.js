import styles from './signup.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../asset/img/google.png';
import fb from '../../asset/img/fb.png';
import { login } from '../store/todoSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
const cx = classNames.bind(styles);

function SignUp() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const [confirm, setConfirm] = useState('');
    const [phone, setPhone] = useState('');
    const [errName, setErrName] = useState(true);

    const [errEmail, setErrEmail] = useState(true);
    const [errConfirm, setErrConfirm] = useState(true);
    const [errPhone, setErrPhone] = useState(true);
    const [checkName, setCheckName] = useState(true);
    const [checkEmail, setCheckEmail] = useState(true);
    const [checkConfirm, setCheckConfirm] = useState(true);
    const [checkPhone, setCheckPhone] = useState(true);

    const [password, setPassword] = useState('');
    const [errPw, setErrPw] = useState(true);
    const [path, setPath] = useState(false);

    const navigate = useNavigate();
    const handleName = () => {
        if (name.trim()) {
            setErrName(false);
        } else {
            setErrName(true);
        }
        if (name.trim().length >= 8) {
            setCheckName(false);
        } else {
            setCheckName(true);
        }
    };
    const handleBlurEmail = () => {
        if (email.trim()) {
            setErrEmail(false);
        } else {
            setErrEmail(true);
        }

        const regexEm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (regexEm.test(email)) {
            setCheckEmail(false);
        } else {
            setCheckEmail(true);
        }
    };
    const handleBlurPassword = () => {
        if (password.trim()) {
            setErrPw(false);
        } else {
            setErrPw(true);
        }
    };
    const handleBlurConfirm = () => {
        if (confirm.trim()) {
            setErrConfirm(false);
        } else {
            setErrConfirm(true);
        }
        if (password === confirm) {
            setCheckConfirm(false);
        } else {
            setCheckConfirm(true);
        }
    };
    const handlePhone = () => {
        if (phone.trim()) {
            setErrPhone(false);
        } else {
            setErrPhone(true);
        }
        if (/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(phone)) {
            setCheckPhone(false);
        } else {
            setCheckPhone(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleName();
        handleBlurEmail();
        handleBlurPassword();
        handleBlurConfirm();
        handlePhone();
        if (
            !errEmail &&
            !errConfirm &&
            !errName &&
            !errPhone &&
            !errPw &&
            !checkEmail &&
            !checkName &&
            !checkConfirm &&
            !checkPhone
        ) {
            const data = {
                name: name,
                pw: password,
            };
            localStorage.setItem('name', data.name);
            localStorage.setItem('pass', data.pw);
            navigate('/login');
        } else {
        }
    };
    return (
        <div className={cx('wrap')}>
            <div className={cx('children')}>
                <div className={cx('header')}>
                    <div className={cx('btn_back')}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    <h2 className={cx('title')}>Sign up</h2>
                </div>
                <div className={cx('login_option')}>
                    <div className={cx('with_google')}>
                        <img className={cx('logo')} src={google} />
                        <span className={cx('logo_name')}>Google</span>
                    </div>
                    <div className={cx('with_fb')}>
                        <img className={cx('logo')} src={fb} />
                        <span className={cx('logo_name')}>Facebook</span>
                    </div>
                </div>
                <form className={cx('form')} onSubmit={handleSubmit}>
                    <div className={cx('form_group')}>
                        <label className={cx('label')}>User name</label>
                        <input
                            value={name}
                            className={cx('input')}
                            placeholder="Enter Your Name"
                            onBlur={handleName}
                            onChange={(e) => {
                                setName(e.target.value);
                                setErrName(false);
                                setCheckName(false);
                            }}
                        />
                        {(errName && <span className={cx('text_err')}>Requied</span>) ||
                            (checkName && <span className={cx('text_err')}>Minimum of 8 characters</span>)}
                    </div>

                    <div className={cx('form_group')}>
                        <label className={cx('label')}>PassWord</label>
                        <input
                            className={cx('input')}
                            placeholder="Enter Your PassWord"
                            type="password"
                            value={password}
                            onBlur={handleBlurPassword}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setErrPw(false);
                            }}
                        />
                        {errPw && <span className={cx('text_err')}>Requied</span>}
                    </div>
                    <div className={cx('form_group')}>
                        <label className={cx('label')}>Confirm PassWord</label>
                        <input
                            value={confirm}
                            className={cx('input')}
                            placeholder="Confirm Your PassWord"
                            onBlur={handleBlurConfirm}
                            onChange={(e) => {
                                setConfirm(e.target.value);
                                setErrConfirm(false);
                                setCheckConfirm(false);
                            }}
                        />
                        {(errConfirm && <span className={cx('text_err')}>Requied</span>) ||
                            (checkConfirm && <span className={cx('text_err')}>Re-entered password is incorrect</span>)}
                    </div>
                    <div className={cx('form_group')}>
                        <label className={cx('label')}>Email address</label>
                        <input
                            className={cx('input')}
                            value={email}
                            placeholder="Enter Your Email"
                            onBlur={handleBlurEmail}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setErrEmail(false);
                                setCheckEmail(false);
                            }}
                        />
                        {(errEmail && <span className={cx('text_err')}>Requied</span>) ||
                            (checkEmail && <span className={cx('text_err')}>Not email</span>)}
                    </div>
                    <div className={cx('form_group')}>
                        <label className={cx('label')}>Phone Number</label>
                        <input
                            value={phone}
                            className={cx('input')}
                            placeholder="Enter Your Phone Number"
                            onBlur={handlePhone}
                            onChange={(e) => {
                                setPhone(e.target.value);
                                setErrPhone(false);
                                setCheckPhone(false);
                            }}
                        />
                        {(errPhone && <span className={cx('text_err')}>Requied</span>) ||
                            (checkPhone && <span className={cx('text_err')}>not Number Phone</span>)}
                    </div>
                    <button className={cx('submit')} type="submit">
                        Continue
                    </button>
                </form>
                <div className={cx('footer')}>
                    <p>Already have an account?</p>
                    <Link to={'/login'} className={cx('signup')}>
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
