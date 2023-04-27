import {useState} from "react";
import {AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    // categories.push('HunterXHunter'); // El push mutea el estado, por lo que no se renderiza nuevamente

    // Insercion al final del arreglo
    // setCategories([...categories, 'HunterXHunter']); // El spread operator crea un nuevo arreglo con los elementos del arreglo anterior

    // Insercion al inicio del arreglo
    //setCategories(['HunterXHunter', ...categories])

    // setCategories(cats => [...cats, 'HunterXHunter']); // Otra forma de hacerlo

    if (categories.includes(newCategory)) {
      return;
    }

    setCategories([newCategory, ...categories]);
  }

  return (
    <div>
      <h1>GifExpertApp</h1>

      <AddCategory
        onAddCategory={(event) => onAddCategory(event)}
      />

      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }
    </div>
  );
};