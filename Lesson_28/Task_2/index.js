const favorites = ["id-2"];
const tree = {
  id: "id-1",
  name: "Products",
  nodes: [
    {
      id: "id-2",
      name: "Food",
      nodes: [],
    },
  ],
};

export const markFavorites = (tree, favorites) => {
  const isFavorite = favorites.includes(tree.id);
  return {
    ...tree,
    favorites: isFavorite,
    nodes: tree.nodes.map((childNodex) => markFavorites(childNodex, favorites)),
  };
};
const result = markFavorites(tree, favorites);
console.log(result);
// result;  {
//     id: 'id-1',
//     name: 'Products',
//     isFavorite: false,
//     nodes: [
//         {
//             id: 'id-2',
//             isFavorite: true,
//             name: 'Food',
//             nodes: []
//         },
//     ],
// };
