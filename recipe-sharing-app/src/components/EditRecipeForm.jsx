import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

 HEAD
  const handleSubmit = (e) => {
    e.preventDefault();

  const handleSubmit = (event) => {
    event.preventDefault(); 
 origin/master
    updateRecipe({ ...recipe, title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
HEAD
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}

        onChange={(event) => setTitle(event.target.value)}
        placeholder="Recipe Title"
      />
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Recipe Description"
origin/master
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
