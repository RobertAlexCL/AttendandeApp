import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  logo: {
    maxWidth: 160,
  },
  appbar: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main
  },
  buttonbar: {
    color: '#757575',
  },
  buttonActive: {
    color: theme.palette.primary.main
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: theme.spacing(4)
}
}))

const App = () => {
  const classes = useStyles()
  return (<>
    <AppBar component={'nav'} position='static' className={classes.appbar}>
      <Toolbar>
        <Container>
          <Grid container justify={'center'} alignItems={'center'} >
            <Grid item>
            <Typography variant='h5' className={classes.title}>Attendance</Typography>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
    <Container>
    <Grid container direction='column' justify={'center'}>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Mak Monsula"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Ethan Velos"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Antur Steveus"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Arrik Gatheri"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Lorth Lunelle"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Cinna Solusar"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Sab Wan"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Duru Saris"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Ren Pantrakahs"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Sabawyn Cee"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Viera Wokbinlau"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Kiratta Korr"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Obran Monoceros"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Cuzao Gallasin"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Ahsoka Tako"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Ezra Bridger"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Grogu from Coruscan"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Omega from Kamino"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Obran Monoceros"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Cuzao Gallasin"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Vhiran Dana"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Wolam Mamam"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Elix Ka"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Dag Quo"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Tahiri Kovani"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Mara Deece"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Harli Hardin"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="La Kai Hasagaiwa"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Dureena Dirpa"
        />
      </Grid>
      <Grid xs={12}>
        <FormControlLabel style={{ width: 1000 }}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Ratha Crow"
        />
      </Grid>
    </Grid>
    </Container>
  </>)
}

export default App;
