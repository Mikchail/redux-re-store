export default class BookStoreServices {
  data = [
    {
      id: 1,
      title: 'Product',
      author: 'Susan Cucan',
      price: 32,
      srcImg: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvk.com%2Ffoto_pazl&psig=AOvVaw2_cP2N50fR7zlgit8nFH_K&ust=1584263139960000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjU79jOmegCFQAAAAAdAAAAABAD'
    },
    {
      id: 2,
      title: 'Product 2',
      author: 'Susan Cucan in qudro',
      price: 31,
      srcImg: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvk.com%2Ffoto_pazl&psig=AOvVaw2_cP2N50fR7zlgit8nFH_K&ust=1584263139960000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjU79jOmegCFQAAAAAdAAAAABAD'
    }
  ]
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        resolve(this.data)
      },700)
    });
  }

}