import { Box, Grid } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
function ProductSkeletonList() {
  const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container>
        {Array.map((x, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Box padding={1}>
              <Skeleton variant="rect" width="100%" height={200} />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ProductSkeletonList
