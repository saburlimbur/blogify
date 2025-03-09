import Instance from './api/axios';

export default class Comments {
  static async createComment({ content, postId }) {
    try {
      const result = await Instance.get('/comment/create', { content, postId });

      return result.data;
    } catch (error) {
      console.error('Error fetching posts:', error | error.message);
      throw error;
    }
  }
}
