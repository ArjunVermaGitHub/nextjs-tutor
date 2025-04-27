import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import DarkModeButton from './DarkModeButton'; // importing a client component
import styles from './Navigation.module.scss';

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <a href="/">Next Training</a>
      </div>

      <div className={styles.authButtons}>
        <DarkModeButton />

        <SignedOut>
          <SignInButton mode="modal">
            <button className={styles.textBtn}>Sign In</button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
