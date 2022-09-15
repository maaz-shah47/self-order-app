import {
  Avatar,
  Box,
  CircularProgress,
  Grid,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Fragment, useContext, useEffect } from 'react';
import Logo from '../components/Logo';
import { listCategories } from '../contexts/actions';
import { Store } from '../contexts/Store';
import { useStyles } from '../styles';

const OrderScreen = () => {
  const styles = useStyles();
  const { state, dispatch } = useContext(Store);
  const { categories, loading, error } = state.categoryList;

  useEffect(() => {
    listCategories(dispatch);
  }, [dispatch]);

  return (
    <Box className={styles.root}>
      <Box className={styles.main}>
        <Grid container>
          <Grid item md={2}>
            <List>
              {loading ? (
                <CircularProgress />
              ) : error ? (
                <Alert severity='error'>{error}</Alert>
              ) : (
                <Fragment>
                  <ListItem>
                    <Logo></Logo>
                  </ListItem>
                  {categories.map((category) => (
                    <ListItem key={category.name}>
                      <Avatar src={category.image} alt={category.name}></Avatar>
                    </ListItem>
                  ))}
                </Fragment>
              )}
            </List>
          </Grid>
          <Grid item md={10}>
            <Typography component='h1' variant='h1'>
              Food Items
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default OrderScreen;
