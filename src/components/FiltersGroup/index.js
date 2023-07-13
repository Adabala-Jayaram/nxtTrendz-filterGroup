import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {getSearchDetails, searchInput, categoryOptions} = props

  const onChangeSearchInput = event => {
    getSearchDetails(event.target.value)
  }

  const onChangeCategory = event => {
    // here why I am not getting value of an element if printing in console

    console.log(event.target.value)
  }

  const renderSearchInput = () => (
    <div className="search-input-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchInput}
        onChange={onChangeSearchInput}
      />
      <BsSearch className="search-icon" />
    </div>
  )

  const renderCategoryDetails = () => (
    <div className="category-container">
      <h1 className="category-container-title">Category</h1>
      <ul className="category-list">
        {categoryOptions.map(eachOption => (
          <li
            className="category-item"
            onClick={onChangeCategory}
            key={eachOption.categoryId}
          >
            {eachOption.name}
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategoryDetails()}
    </div>
  )
}

export default FiltersGroup
