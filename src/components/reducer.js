export const initialState = {
  cartList:[],
  productList:[{
    title: 'The Psychology of Money .',
    price: '240',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_SY400_.jpg'
  },
  {
    title: "Life's Amazing Secrets: How to Find Balance and Purpose in Your Life.",
    price: '230',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_SY400_.jpg'
  },
  {
    title: 'Atomic Habits the life changing books by james clear.',
    price: '300',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_SY400_.jpg.jpg'
  },
  {
    title: 'Rich Dad Poor Dad : What The Rich Teach Their Kids About Money That The Poor And Middle Class Do Not!:',
    price: '400',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_SY400_.jpg'
  },
  {
    title: 'Ikigai: The Japanese secret to a long and happy life [Hardcover] García, Héctor and Miralles, Francesc',
    price: '322',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_SY400_.jpg'
  },
  {
    title: 'Grandma Bag of Stories [Paperback] Sudha Murty',
    price: '400',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/81jv44QdNwL._AC_SY400_.jpg'
  },
  {
    title: 'Word Power Made Easy By Norman Lewis',
    price: '379',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/818e+fq7+BL._AC_SY400_.jpg'
  },
  {
    title: 'The Power of Your Subconscious Mind ',
    price: '500',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_SY400_.jpg'
  },
  {
    title: 'Attitude Is Everything: Change Your Attitude ... Change Your Life!',
    price: '429',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/710jnzKlDTL._AC_SY400_.jpg'
  }]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { 
        ...state, 
        cartList:[...state.cartList, action.payload]
      };
    case 'REMOVE_FROM_CART':
      return { 
        ...state, 
        cartList: state.cartList.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
}