'use client';

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs';

// Import the CSS module for scoped styling
import styles from './Navigation.module.scss';

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <a href="/">Next Training</a>
      </div>

      <div className={styles.authButtons}>
        <SignedOut>
          {/* SignInButton automatically opens modal without page redirect */}
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
