import Instance from './api/axios';

export default class Tags {
  static async getAllTags() {
    try {
      const result = await Instance.get('/tags/all');

      return result.data.data;
    } catch (error) {
      console.error('Error fetching posts:', error | error.message);
      throw error;
    }
  }
}
