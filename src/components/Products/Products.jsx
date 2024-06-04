import { Box, Container, Grid, Paper } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { useEffect, useState } from 'react'
import productApi from '~/api/productApi'
import ProductSkeletonList from '../ProductSkeletonList/ProductSkeletonList'
import ListProduct from '../ListProduct/ListProduct'
import Pagination from '@mui/material/Pagination'
const useStyles = makeStyles((theme) => ({
  root: {},

  left: { width: '250px' },

  right: {
    flex: '1 1 0'
  }
}))

function Products() {
  const classes = useStyles()
  const [productList, setProductList] = useState([])
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 10
  })
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 20
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters)

        setProductList(data)
        setPagination(pagination)
      } catch (error) {
        console.log('failed', error)
      }
      setLoading(false)
    }
    fetchData()
  }, [filters])

  const handdlePageChange = (e, page) => {
    setFilters((prev) => ({
      ...prev,
      _page: page
    }))
  }

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>left</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '20px' }}>
              {loading ? <ProductSkeletonList /> : <ListProduct data={productList} />}

              <Pagination
                count={Math.ceil(pagination.total / pagination.limit)}
                page={pagination.page}
                color="primary"
                onChange={handdlePageChange}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Products
