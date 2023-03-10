import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

import { RxGithubLogo, RxNotionLogo } from 'react-icons/rx';
import { BsPencil } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../store/authSlice';

export default function Header() {
  const isLogin = useSelector(state => state.auth.isLogin);
  const dispatch = useDispatch();
  const handleLogin = () => (isLogin ? dispatch(logout()) : dispatch(login()));

  return (
    <header className={styles.header}>
      <button className={styles.login} onClick={handleLogin}>
        {isLogin ? '로그아웃' : '로그인'}
      </button>
      <nav className={styles.navbar}>
        <Link to={'/'}>
          <h1 className={styles.title}>제이원 개발 블로그</h1>
        </Link>
        <p className={styles.description}>I’m Front-end developer with enjoys coding</p>
        <div className={styles.bottom}>
          <div className={styles.link_wrap}>
            <a href="https://github.com/IMJOne" target="_blank" rel="noreferrer" className={styles.link}>
              <RxGithubLogo />
            </a>
            <a
              href="https://www.notion.so/imjone/Front-end-e2a9e223ccc347888fcaa8956ed1a1c7?pvs=4"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <RxNotionLogo />
            </a>
          </div>
          {isLogin && (
            <Link to={'/new'} className={styles.new}>
              <BsPencil />
              글쓰기
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
