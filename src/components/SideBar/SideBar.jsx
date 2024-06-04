import { Box, Typography } from '@mui/material'
import './SideBar.scss'
import Paper from '@mui/material/Paper'
import { Link } from 'react-router-dom'
import StorefrontIcon from '@mui/icons-material/Storefront'

const listOptionSideBar = [
  {
    name: 'Quần áo nữ',
    img: 'https://salt.tikicdn.com/cache/100x100/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png.webp'
  },
  {
    name: 'Nhà sách ',
    img: 'https://salt.tikicdn.com/cache/100x100/ts/category/ed/20/60/afa9b3b474bf7ad70f10dd6443211d5f.png.webp'
  },
  {
    name: 'Nhà cửa - Đời sống',
    img: 'https://salt.tikicdn.com/cache/100x100/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png.webp'
  },
  {
    name: 'Điện thoại - Máy tính bảng',
    img: 'https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp'
  },
  {
    name: 'Đồ chơi - Mẹ & Bé',
    img: 'https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp'
  }
]

function SideBar() {
  return (
    <Box>
      <Paper elevation={0} sx={{ padding: '10px', borderRadius: '10px', marginBottom: '10px' }}>
        <Typography sx={{ marginBottom: '20px', fontWeight: 'bold' }}>Danh mục</Typography>

        <Link to="/list">
          <div className="item">
            <div className="img">
              <img src={listOptionSideBar[0].img} alt="item.name" />
            </div>
            <div className="title">{listOptionSideBar[0].name}</div>
          </div>
        </Link>
        <Link to="/list" className="wait">
          <div className="item ">
            <div className="img">
              <img src={listOptionSideBar[1].img} alt="item.name" />
            </div>
            <div className="title">{listOptionSideBar[1].name}</div>
          </div>
        </Link>
        <Link to="/list" className="wait">
          <div className="item ">
            <div className="img">
              <img src={listOptionSideBar[2].img} alt="item.name" />
            </div>
            <div className="title">{listOptionSideBar[2].name}</div>
          </div>
        </Link>
        <Link to="/list" className="wait">
          <div className="item ">
            <div className="img">
              <img src={listOptionSideBar[3].img} alt="item.name" />
            </div>
            <div className="title">{listOptionSideBar[3].name}</div>
          </div>
        </Link>
        <Link to="/list" className="wait">
          <div className="item ">
            <div className="img">
              <img src={listOptionSideBar[4].img} alt="item.name" />
            </div>
            <div className="title">{listOptionSideBar[4].name}</div>
          </div>
        </Link>
      </Paper>
      <Paper elevation={0} sx={{ marginBottom: '20px', padding: '10px', borderRadius: '10px' }}>
        <Typography sx={{ marginBottom: '20px', fontWeight: 'bold' }}>Nổi bật</Typography>
      </Paper>
      <Paper elevation={0} sx={{ padding: '10px', borderRadius: '10px' }}>
        <Link>
          <div className="item ">
            <StorefrontIcon
              sx={{
                color: '#83848d'
              }}
            />

            <div className="title">Bán hàng</div>
          </div>
        </Link>
      </Paper>
    </Box>
  )
}

export default SideBar
