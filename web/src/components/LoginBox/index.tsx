import styles from './styles.module.scss';

export function LoginBox(){
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe a sua mensagem</strong>
      <a href="#" className={styles.signInWithGithub}>
        Entrar com Github
      </a>
    </div>
  )
}