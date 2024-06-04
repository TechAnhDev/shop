import './Card.scss'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'
import FormControl from '@mui/material/FormControl'
import SearchIcon from '@mui/icons-material/Search'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap'
import Tooltip from '@mui/material/Tooltip'

function Card({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product?.id} className="card">
          <div className="image">
            <img src={product.images[0]} alt="" />
          </div>
          <div className="title">
            <div className="top">{product?.title}</div>
            <div className="buttom">
              <div className="price">${product?.price}</div>
              <div className="add">
                <Tooltip title="Details" placement="top">
                  <ZoomInMapIcon sx={{ color: 'blue', cursor: 'pointer' }} />
                </Tooltip>
                <Tooltip title="Add" placement="top">
                  <ShoppingBagIcon sx={{ color: 'red', cursor: 'pointer' }} />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
