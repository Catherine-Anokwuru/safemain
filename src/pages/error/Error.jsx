import { Link } from 'react-router-dom'
import error from '../../assets/404.svg'
const Error = () => {
  return (
    <section className='error'>
    <div className='error-img'><img src={error} alt="error" /></div>
    <div className='back'>
    <Link to={'/'} className='back-home'>Back Home</Link>
    </div>
    </section>
  )
}
export default Error