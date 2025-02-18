import Instance from './api/axios';

export default class Posts {
  static async getAllPosts() {
    try {
      const result = await Instance.get('/posts/all');
      return result.data;
    } catch (error) {
      console.error('Error fetching posts:', error | error.message);
      throw error;
    }
  }

  static async getPostById(id) {
    try {
      const result = await Instance.get(`/post/${id}`);
      return result.data;
    } catch (error) {
      console.error('Error fetching posts:', error | error.message);
      throw error;
    }
  }
}
