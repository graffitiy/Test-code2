import reducer from './reducer';

import { addRestaurants, updateRestaurantInfo } from './action';

describe('reducer', () => {
  describe('updateRestaurantInfo', () => {
    const previousState = {
      restaurantInfo: {
        name: '',
        address: '',
        category: '',
      },
    };
    it('레스토랑 이름을 저장한다', () => {
      const { restaurantInfo } = reducer(previousState, updateRestaurantInfo({ name: 'title', value: '알단테' }));
      expect(restaurantInfo.title).toBe('알단테');
    });

    it('레스토랑 카테고리를 저장한다', () => {
      const { restaurantInfo } = reducer(previousState, updateRestaurantInfo({ name: 'category', value: '양식' }));
      expect(restaurantInfo.category).toBe('양식');
    });

    it('레스토랑 주소를 저장한다', () => {
      const { restaurantInfo } = reducer(previousState, updateRestaurantInfo({ name: 'address', value: '광교' }));
      expect(restaurantInfo.address).toBe('광교');
    });
  });
  describe('addRestaurants', () => {
    function handleAddRestaurant(restaurantInfo) {
      const initialState = {
        newId: 50,
        restaurants: [],
        restaurantInfo: {
          title: '',
          address: '',
          category: '',
        },
      };
      return reducer({
        ...initialState,
        restaurantInfo: {
          ...restaurantInfo,
        },
      }, addRestaurants());
    }
    context('input이 하나라도 비어있으면', () => {
      it('아무 일도 일어나지 않는다', () => {
        const { restaurants } = handleAddRestaurant({
          title: '',
        });
        expect(restaurants.length).toBe(0);
      });
    });

    context('모든 input이 입력됐으면', () => {
      it('레스토랑 목록이 추가된다', () => {
        const { restaurantInfo: { title, address, category } } = handleAddRestaurant({
          title: '알단테',
          category: '양식',
          address: '광교',
        });
        expect(title).toBe('');
        expect(address).toBe('');
        expect(category).toBe('');
      });
    });
  });
});
