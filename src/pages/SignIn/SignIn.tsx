import styles from "./SignIn.module.scss";
import Phones from "../../assets/svgs/phones.svg";
import Logo from "../../assets/svgs/logo.svg";
import Facebook from "../../assets/svgs/facebook.svg";
import AppStore from "../../assets/svgs/appstore.svg";
import GooglePlay from "../../assets/svgs/googleplay.svg";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { ChangeEvent, useState } from "react";
type SignInProps = {};

function SignIn({}: SignInProps) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div role="signIn" className={styles.signIn_wrapper}>
      <div className={styles.signIn_content}>
        <img src={Phones} className={styles.phones} alt="Iphone and Galexy" />
        <div className={styles.boxes}>
          <div className={styles.form_wrapper}>
            <img
              src={Logo}
              className={styles.insta_logo}
              alt="Instagram Logo"
            />
            <form className={styles.form}>
              <Input
                type="text"
                placeholder="Phone number,username or email address"
                onChange={handleChangeUsername}
                value={username}
              />
              <Input
                type="password"
                placeholder="Password"
                onChange={handleChangePassword}
                value={password}
              />
              <Button variant="primary" title="Log in" />
            </form>
            <span className={styles.or}>OR</span>
            <div className={styles.login_facebook}>
              <img src={Facebook} alt="Facebook logo" />
              Log in with Facebook
            </div>
            <p className={styles.forgotten_password}>
              Forgotten your password?
            </p>
            <p className={styles.report}>
              You can also
              <span> report content that you believe is unlawful</span> in your
              country without logging in.
            </p>
          </div>
          <div className={styles.signUp_box}>
            <p>Don't have an account?</p>
            <Button title="Sign Up" variant="ghost" />
          </div>
          <div className={styles.get_app}>
            <span>Get the app.</span>
            <div>
              <img src={AppStore} alt="Get the app on Apple Store" />
              <img src={GooglePlay} alt="Get the app on Google Play" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
