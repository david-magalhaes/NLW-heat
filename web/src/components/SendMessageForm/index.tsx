import { useContext, useState, FormEvent } from "react";
import { VscGithubInverted, VscSignOut } from "react-icons/vsc";
import { AuthContext } from "../../contexts/auth";
import { api } from "../../services/api";
import styles from "./styles.module.scss";

export function SendMessageForm() {
  const [message, setMessage] = useState("");
  const { user, signOut } = useContext(AuthContext);

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();

    if (!message.trim()) {
      return;
    }

    await api.post("messages", { message });

    setMessage("");
  }

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button className={styles.signOutButton}>
        <VscSignOut size="32" onClick={signOut} />
      </button>

      <header className={styles.userInformation}>
        <div className={styles.userImage}>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>
        <strong className={styles.userName}>{user?.name}</strong>
        <span className={styles.userGithub}>
          <VscGithubInverted size="16" />
          {user?.login}
        </span>
      </header>

      <form onSubmit={handleSendMessage} className={styles.sendMessageForm}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
          placeholder="Qual sua expectativa para o evento?"
        ></textarea>

        <button type="submit">Enviar mensagem</button>
      </form>
    </div>
  );
}
