import UserIcon from "../svg/UserIcon";

function CategoryList({ categories }) {
  return (
    <div >
      <div className="statItem">    
          {categories.data?.map(categoryObject => (
            <div key={categoryObject.category}>
            <h3>{categoryObject.category}</h3>
            <div className="subtitle">{categoryObject.count}</div>
            <UserIcon></UserIcon>
            </div>
          ))}
      </div>
    </div>
  );
}
export default CategoryList
