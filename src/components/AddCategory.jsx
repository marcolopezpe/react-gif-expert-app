import {useState} from 'react';

export const AddCategory = ({onAddCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputchange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length < 1) {
      return;
    }

    // setCategories(categories => [inputValue, ...categories]);
    onAddCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <>
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          type="text"
          placeholder="Buscar Gifs"
          value={inputValue}
          onChange={onInputchange}/>
      </form>
    </>
  );
};