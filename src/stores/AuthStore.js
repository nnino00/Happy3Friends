import { observable, action } from 'mobx';
import { AsyncStorage } from 'react-native';
class AuthStore {
  @observable userName = null;

  @observable password = null;

  @observable teams = ['Einstein', 'Newton', 'Tesla'];

  @observable user = {
    userName: '',
    firstName: '',
    lastName: '',
    birthday: '',
    gender: '',
    email: '',
    password: '',
    team: '',
  }

  @action
  setUserParams = (param, value) => {
    this.user[param] = value;
  }

  @action
  setUserName = userName => {
    this.userName = userName;
  }

  @action
  setPassword = password => {
    this.password = password;
  }

  @action
  setTeam = () => {
    const randomNum = Math.trunc(Math.random() * this.teams.length);
    this.user.team = this.teams[randomNum];
  }

  @action
  createUser = async () => {
    // save user to db
    this.setTeam();
    await AsyncStorage.setItem('user', JSON.stringify(this.user));
  }

  @action
  signIn = async () => {
    // sign in user
    const storedUser = await AsyncStorage.getItem('user');
    console.log(storedUser);
    console.log('---------------')
    console.log(this.email);
    console.log(this.password);
    if (storedUser) {
      const user = JSON.parse(storedUser);
      console.log('de user', user)
      if (this.userName === user.userName && this.password === user.password) {
        this.user = user;
        return true;
      }
      return false;
    }
  }

  @action
  signOut = () => {
    // sign out user
    this.user = {};
  }
}

export default AuthStore;
