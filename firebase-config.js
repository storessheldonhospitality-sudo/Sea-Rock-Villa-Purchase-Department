/**
 * firebase-config.js — Sea Rock Villa Purchase Department
 * -------------------------------------------------------
 * IMPORTANT: Keep this file private. Do NOT share or upload
 * to any public repository (GitHub, etc.).
 *
 * Firebase Authentication: Email / Password only.
 * Firestore: Used for inventory, issues, audit, and user profiles.
 *
 * How to set up your first Admin user:
 *  1. Go to Firebase Console → Authentication → Users → Add User
 *     Email: admin@searockinn.com   Password: (choose a strong one)
 *  2. Copy the UID of that user.
 *  3. Go to Firestore → userProfiles → New Document
 *     Document ID: (paste the UID)
 *     Fields: email (string), name (string), role (string = "admin")
 *
 * Firestore Security Rules (set in Firebase Console):
 * -------------------------------------------------------
 *  rules_version = '2';
 *  service cloud.firestore {
 *    match /databases/{database}/documents {
 *      match /{document=**} {
 *        allow read, write: if request.auth != null;
 *      }
 *    }
 *  }
 * -------------------------------------------------------
 */

const firebaseConfig = {
  apiKey: "AIzaSyDx1Z5Rwxtk07HD7CoaEBQKhZM0mKTcZvo",
  authDomain: "sea-rockinn-purchase-dept.firebaseapp.com",
  projectId: "sea-rockinn-purchase-dept",
  storageBucket: "sea-rockinn-purchase-dept.firebasestorage.app",
  messagingSenderId: "96351004946",
  appId: "1:96351004946:web:b29115d720362eb804ebcb"
};

// ── Primary Firebase App ──────────────────────────────────
firebase.initializeApp(firebaseConfig);

/** Firestore database instance */
const db = firebase.firestore();

/** Firebase Authentication instance (Email/Password) */
const auth = firebase.auth();

// ── Secondary Firebase App ────────────────────────────────
// Used to CREATE new users without signing the current admin out.
// createUserWithEmailAndPassword() auto-signs in the new user,
// so we use a separate app instance to avoid that side effect.
const _secondaryApp = firebase.initializeApp(firebaseConfig, 'Secondary');

/** Secondary auth — only for creating new user accounts */
const secondaryAuth = _secondaryApp.auth();
