import { Outlet } from 'react-router-dom'
import './ListPage.scss'

function ListPage() {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default ListPage
