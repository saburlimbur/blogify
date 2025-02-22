import Instance from './api/axios';

export default class Category {
  static async getAllCategory() {
    try {
      const result = await Instance.get('/categorys');

      return result.data.data;
    } catch (error) {
      console.error('Error fetching posts:', error | error.message);
      throw error;
    }
  }

  static async getCategoryById(id) {
    try {
      const result = await Instance.get(`/category/detail-id/${id}`);

      return result.data;
    } catch (error) {
      console.error('Error fetching posts:', error | error.message);
      throw error;
    }
  }

  static async getCategoryBySlug(slug) {
    try {
      const result = await Instance.get(`/category/detail-slug/${slug}`);

      return result.data;
    } catch (error) {
      console.error('Error fetching posts:', error | error.message);
      throw error;
    }
  }
}
