/* firebase-config.js: kết nối với project Firebase riêng (pokesurvn).
 * Các giá trị này không phải bí mật, Firebase thiết kế để đặt trong web.
 * Dữ liệu được bảo vệ bằng rules (firestore.rules, database.rules.json).
 * Nếu đặt G.FIREBASE_CONFIG = null thì game chạy chế độ local.
 */
G.FIREBASE_CONFIG = {
  apiKey: 'AIzaSyAf6bRczmbdoFUHtyudpdMyYCZ-88RqTWs',
  authDomain: 'pokesurvn.firebaseapp.com',
  projectId: 'pokesurvn',
  storageBucket: 'pokesurvn.firebasestorage.app',
  messagingSenderId: '347625033582',
  appId: '1:347625033582:web:3c0601026283521708bb7f',
  databaseURL: 'https://pokesurvn-default-rtdb.asia-southeast1.firebasedatabase.app'
};
