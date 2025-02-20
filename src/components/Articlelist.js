import ArticleItem from './Articleitem'
import articleStyles from '../styles/article.module.css'

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
    <ul >
      {articles.map((article, id )=> (
        <ArticleItem article={article} key={id}/>
    ))}</ul>
    </div>
  )
}

export default ArticleList