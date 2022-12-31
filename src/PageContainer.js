import { Link } from "react-router-dom"

const PageContainer = ({ to, imageSrc, title, paragraph }) => {
  return (
    <>
        <Link to={to} className='page-container'>
            <img src={imageSrc} />
            <div className="page-container-text">
                <div className="page-container-text-flex">
                    <p className="page-container-title">
                        {title}
                    </p>  
                    <p className="page-container-paragraph">
                        {paragraph}
                    </p>
                </div>  
            </div>  
        </Link>
    </>
  )
}

export default PageContainer