import { TextInput } from "../../../components/ui/Input/TextInput";
import styles from "./LoginInput.module.css";

export const LoginInput = () => {
    return (
        <form className={styles.authForm}>
            <label className={styles.authLabel}>EMAIL ADDRESS</label>
            <TextInput
            placeholder="you@example.com"
            />
        </form>
    )
}