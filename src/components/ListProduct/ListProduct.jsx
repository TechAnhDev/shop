import { Box, Grid, Typography } from '@mui/material'

function ListProduct({ data }) {
  return (
    <Box>
      <Grid container>
        {data.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product?.id}>
            <Box padding={1}>
              <Box padding={1}>
                <img
                  src={
                    product.thumbnail
                      ? `https://api.ezfrontend.com${product.thumbnail?.url}`
                      : 'https://placehold.co/444x444'
                  }
                  alt={product?.name}
                  width="100%"
                />
              </Box>
              <Typography variant="body2">{product?.name}</Typography>
              <Typography variant="body2">
                <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product?.salePrice)}
                </Box>
                {product?.promotionPercent > 0 ? ` -${product?.promotionPercent}%` : ''}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ListProduct
