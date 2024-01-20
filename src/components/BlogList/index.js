import BlogItem from '../BlogItem'

const BlogList = props => {
  const {details} = props

  return (
    <div className="titleContainer1">
      {details.map(eachBlog => (
        <BlogItem key={eachBlog.id} Blog={eachBlog} />
      ))}
    </div>
  )
}

export default BlogList
