import { useSelector, useDispatch } from 'react-redux';

import { updateRestaurantInfo } from './action';

export default function InputContainer() {
  const {
    restaurantInfo: { title, address, category },
  } = useSelector((state) => ({
    restaurantInfo: state.restaurantInfo,
  }));

  const dispatch = useDispatch();

  const handleInput = ({ target: { name, value } }) => {
    dispatch(updateRestaurantInfo({ name, value }));
  };

  return (
    <form>
      <input
        onChange={handleInput}
        value={title}
        type="text"
        placeholder="이름"
        name="title"
      />
      <input
        onChange={handleInput}
        value={category}
        type="text"
        placeholder="분류"
        name="category"
      />
      <input
        onChange={handleInput}
        value={address}
        type="text"
        placeholder="주소"
        name="address"
      />
      <button type="submit">등록</button>
    </form>
  );
}
