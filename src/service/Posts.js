import Instance from './api/axios';

export default class Posts {
  static async getAllPosts() {
    try {
      const result = await Instance.get('/posts/all');

      return result.data.data;
    } catch (error) {
      console.error('Error fetching posts:', error | error.message);
      throw error;
    }
  }

  static async getPostById(id) {
    try {
      const result = await Instance.get(`/posts/id/${id}`);

      return result.data.data;
    } catch (error) {
      console.error('Error fetching posts:', error | error.message);
      throw error;
    }
  }

  static async getPostBySlug(slug) {
    try {
      const result = await Instance.get(`/posts/slug/${slug}`);

      return result.data.data;
    } catch (error) {
      console.error('Error fetching posts:', error | error.message);
      throw error;
    }
  }
}
