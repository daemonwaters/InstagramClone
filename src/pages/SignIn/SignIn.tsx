import styles from "./SignIn.module.scss";
import Phones from "../../assets/svgs/phones.svg";
import Logo from "../../assets/svgs/logo.svg";
import Facebook from "../../assets/svgs/facebook.svg";
import AppStore from "../../assets/svgs/appstore.svg";
import GooglePlay from "../../assets/svgs/googleplay.svg";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { signUpUser } from "../../features/Users/services/SignUpUser";
import { Link } from "react-router-dom";
type SignInProps = {};
type Validation = {
  isUsernameValid: boolean | undefined;
  isPasswordValid: boolean | undefined;
};

function SignIn({}: SignInProps) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validation, setValidation] = useState<Validation>({
    isPasswordValid: undefined,
    isUsernameValid: undefined,
  });
  const dispatch = useAppDispatch();
  const isCurrentUser = useAppSelector(state => state.currentUser.data)


  const handleChangeUsername: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setUsername(event.target.value);

  };

  const handleChangePassword: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPassword(event.target.value);
    if(password.length >= 8) {
      setValidation({ ...validation, isPasswordValid: true });
    } else {
      setValidation({ ...validation, isPasswordValid: false });
    }
  };

  const handleSignUp: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (username.length == 0) {
      setValidation({ ...validation, isUsernameValid: false });
      return;
    }
    if (password.length < 8) {
      setValidation({ ...validation, isPasswordValid: false });
      return;
    }
    dispatch(signUpUser({ username, password }));
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
            <form onSubmit={handleSignUp} className={styles.form}>
              <Input
                type="text"
                placeholder="Phone number,username or email address"
                onChange={handleChangeUsername}
                value={username}
                isValid={validation.isUsernameValid}
              />
              <Input
                type="password"
                placeholder="Password"
                onChange={handleChangePassword}
                value={password}
                isValid={validation.isPasswordValid}
              />
              <Button type="submit" variant="primary" title="Log in" >
                  Log in
              </Button>
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
            <Button type="submit" title="Sign Up" variant="ghost" />
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
