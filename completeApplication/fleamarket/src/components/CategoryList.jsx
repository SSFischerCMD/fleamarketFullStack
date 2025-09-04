
// objekt vom Backend:

// ITEM
//   {"category": "home & decor","count": 10}   [INDEX 0],
//   {"category": "clothing","count": 3}        [INDEX 1],

function CategoryList({ categories }) {
  return (
    <div >
      {categories.data?.map(categoryObject => (
        <div key={categoryObject.category} >
          {categoryObject.category}: {categoryObject.count}
        </div>
      ))}
    </div>
  );
}
export default CategoryList
