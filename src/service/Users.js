import Instance from './api/axios';

export default class Users {
  static async getAllUsers() {
    try {
      const result = await Instance.get('/users');

      return result.data.data;
    } catch (error) {
      console.error('Error fetching all users:', error | error.message);
      throw error;
    }
  }

  static async createUser({
    username,
    email,
    phone_number,
    password,
    position,
  }) {
    try {
      const result = await Instance.post('/users/create', {
        username,
        email,
        phone_number,
        password,
        position,
      });

      console.log('create user from server:', result.data);

      // if (!result.data) {
      //   throw new Error(result.data.message || 'Failed to create user');
      // }

      // Cookies.set("sessioncreateuser", result.data);

      return result.data;
    } catch (error) {
      console.error('Error to create user:', error?.message || error);
      throw error;
    }
  }

  static async loginUser({ username, email, password }) {
    try {
      const result = await Instance.post('/users/login', {
        username,
        email,
        password,
      });

      console.log('login user from server:', result.data);

      localStorage.setItem(
        'sessionuser',
        JSON.stringify({
          result: result.data.result,
        }),
      );

      return result.data;
    } catch (error) {
      console.error('Error to create user:', error?.message || error);
      throw error;
    }
  }
}
