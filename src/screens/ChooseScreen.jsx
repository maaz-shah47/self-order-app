import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fade,
  Typography,
} from '@material-ui/core';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import { setOrderType } from '../contexts/actions';
import { Store } from '../contexts/Store';
import { useStyles } from '../styles';

const ChooseScreen = () => {
  const styles = useStyles();
  const { dispatch } = useContext(Store);
  const navigate = useNavigate();

  const chooseHandler = (orderType) => {
    setOrderType(dispatch, orderType);
    navigate('/order');
  };
  return (
    <Fade in={true}>
      <Box className={[styles.root, styles.navy]}>
        <Box className={[styles.main, styles.center]}>
          <Logo large />
          <Typography
            component='h3'
            variant='h3'
            className={styles.center}
            gutterBottom
          >
            Where will you be eating today?
          </Typography>
          <Box className={styles.cards}>
            <Card className={[styles.card, styles.space]}>
              <CardActionArea onClick={() => chooseHandler('Eat in')}>
                <CardMedia
                  component='img'
                  alt='Eat in'
                  image='/images/eatin.png'
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    component='p'
                    gutterBottom
                    variant='h4'
                    color='textPrimary'
                  >
                    Eat In
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className={[styles.card, styles.space]}>
              <CardActionArea onClick={() => chooseHandler('Take out')}>
                <CardMedia
                  component='img'
                  alt='Eat in'
                  image='/images/takeout.png'
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    component='p'
                    gutterBottom
                    variant='h4'
                    color='textPrimary'
                  >
                    Take Out
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export default ChooseScreen;
