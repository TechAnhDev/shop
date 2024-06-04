import { useEffect, useState } from 'react'
import productApi from '~/api/productApi'
import './HomePage.scss'

import { Paper } from '@mui/material'
import SideBar from '~/components/SideBar/SideBar'

function HomePage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    try {
      const fetProducts = async () => {
        // const params = {
        //   _limit: 1
        // }
        const productList = await productApi.getAll()
        setProducts(productList)
      }

      fetProducts()
    } catch (error) {
      // console.log('error')
    }
  }, [])

  return (
    <div className="container">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="content_homepage">
        <div className="product">
          <Paper
            sx={{
              display: 'flex',
              padding: '20px',
              marginLeft: '20px',
              borderRadius: '10px',
              justifyContent: 'center',
              overflowX: 'scroll'
            }}
          >
            <div className="slide">
              <div className="itemSlide">
                <img
                  src="https://salt.tikicdn.com/cache/w750/ts/tikimsp/d9/f7/18/74bd6b1fda45e1d35c09f6f3ee07c7dd.jpg.webp"
                  alt=""
                />
              </div>
              <div className="itemSlide">
                <img
                  src="https://salt.tikicdn.com/cache/w750/ts/tikimsp/4e/f0/75/4a3a856be891b09dd8f04d7355cd8972.jpg.webp
              "
                  alt=""
                />
              </div>
              <div className="itemSlide">
                <img
                  src="https://salt.tikicdn.com/cache/w750/ts/tikimsp/23/fa/1e/dc503b543089499989d83afdec37b48c.jpg.webp
              "
                  alt=""
                />
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  )
}

export default HomePage
