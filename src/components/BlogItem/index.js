import './index.css'

const BlogItem = props => {
  const {Blog} = props
  const {title, description, publishedDate} = Blog
  return (
    <div className="container">
      <div className="titleContainer">
        <h1 className="title">{title}</h1>
        <p className="publishedDate">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </div>
  )
}
export default BlogItem
