import Skeleton  from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function Skeletons({...props}) {
  return (
   <Skeleton {...props} />
  )
}

export default Skeletons
