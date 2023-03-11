import { useState } from 'react';
import {
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';

export const RegistrationScreen = ({ styles }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOpenPassword, setIsOpenPassword] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [isFocusedLogin, setIsFocusedLogin] = useState(false)
  const [isFocusedEmail, setIsFocusedEmail] = useState(false)
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const nameHandler = (text) => {
    setName(text);
  };
  const emailHandler = (text) => {
    setEmail(text);
  };
  const passwordHandler = (text) => {
    setPassword(text);
  };
  const isOpenPasswordHandler = () => {
    setIsOpenPassword(!isOpenPassword);
  };

  const onRegister = () => {
    if (name !== '' && email !== '' && password !== '') {
      console.log({ name, email, password });
    } else {
      setIsShowKeyboard(false);
      return alert('Please, fill in all fields!');
    }

    setName('');
    setEmail('');
    setPassword('');
    setIsShowKeyboard(false);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={{ flex: 1 }}>
        <Image
          style={styles.background}
          source={require('../../assets/images/background.jpg')}
          resizeMode="cover"
        />
        <View style={{...styles.box,
          marginTop: isShowKeyboard ? 100 : 260,
        }}>

        <View
          style={{
            ...styles.wrapper,
            marginTop: isShowKeyboard ? 270 : 260,
          }}
        >
          <View
            style={{
              ...styles.formContainer,
              marginBottom: isShowKeyboard ? 60 : 78,
            }}
          >
            <View style={styles.avaWrapper}>
              <View style={styles.avatar}>
                <View style={styles.addPhoto}>
                  <Image source={require('../../assets/images/add.png')} />
                </View>
              </View>
            </View>
            <Text style={styles.title}>Registration</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
              <TextInput
                style={{...styles.input, borderColor: isFocusedLogin ? '#FF6C00' : '#E8E8E8'}}
                value={name}
                onChangeText={nameHandler}
                placeholder="Username"
                placeholderTextColor="#BDBDBD"
                onFocus={() => {
                  setIsShowKeyboard(true)
                  setIsFocusedLogin(true);
                  }}
                  onBlur={() => setIsFocusedLogin(false)}
                onSubmitEditing={onRegister}
              />
              <TextInput
                style={{...styles.input, borderColor: isFocusedEmail ? '#FF6C00' : '#E8E8E8'}}
                value={email}
                onChangeText={emailHandler}
                placeholder="Email"
                placeholderTextColor="#BDBDBD"
                onFocus={() => {
                  setIsShowKeyboard(true)
                  setIsFocusedEmail(true);
                  }}
                onBlur={() => setIsFocusedEmail(false)}
                onSubmitEditing={onRegister}
              />
              <View>
                <TextInput
                  style={{...styles.input, borderColor: isFocusedPassword ? '#FF6C00' : '#E8E8E8'}}
                  value={password}
                  onChangeText={passwordHandler}
                  secureTextEntry={!isOpenPassword}
                  placeholder="Password"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => {
                    setIsShowKeyboard(true)
                    setIsFocusedPassword(true);
                    }}
                    onBlur={() => setIsFocusedPassword(false)}
                  onSubmitEditing={onRegister}
                />
                <Text style={styles.show} onPress={isOpenPasswordHandler}>
                  {isOpenPassword ? 'Hide' : 'Show'}
                </Text>
              </View>
            </KeyboardAvoidingView>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onRegister}
              style={styles.button}
            >
              <Text style={styles.btnTitle}>Register</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.loginBox}>
                Already have an account? Login
              </Text>
            </View>
            </View>
            </View>
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
