// import {WebView} from 'react-native-webview';

// const Webviewindex = () => {
//   return (
//     <WebView
//       source={{
//         uri: 'https://api.moyasar.com/v1/transaction_auths/b691008d-c6b5-4362-b366-74efe25ed47c/form?token=auth_zdAQDC9PsSHf7qFpeSp2h7oWRJHXCxf1LNQ',
//       }}
//       style={{flex: 1}}
//     />
//   );
// };

// export default Webviewindex;

import {WebView} from 'react-native-webview';
const Webviewindex = () => {
  return (
    <WebView
      source={{
        uri: 'https://api.moyasar.com/v1/transaction_auths/b691008d-c6b5-4362-b366-74efe25ed47c/form?token=auth_zdAQDC9PsSHf7qFpeSp2h7oWRJHXCxf1LNQ',
      }}
      style={{flex: 1}}
    />
  );
};
export default Webviewindex;
