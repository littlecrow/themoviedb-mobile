import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, ScrollView, StyleSheet } from 'react-native';
import { Grid, Col, Row, Text, Rating } from 'react-native-elements';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

class MovieDetailScreen extends Component {
  render() {
    const { state } = this.props.navigation;
    const movie = state.params.movie;

    return (
      <Image source={{uri: `${IMAGE_URL}` + movie.backdrop_path}} style={styles.bgImage}>
        <ScrollView style={styles.container}>
          <Grid>
            <Row>
              <Col size={35}>
                <View>
                  <Image source={{uri: `${IMAGE_URL}` + movie.poster_path}} style={styles.img}/>
                </View>
              </Col>
              <Col size={65}>
                <View>
                  <Text style={[styles.text, styles.title]}>{movie.title}</Text>
                  <Text style={styles.text}>Rating: {movie.vote_average}</Text>
                </View>
              </Col>
            </Row>
            <Row>
              <View>
                <Text style={styles.text}>{movie.overview}</Text>
              </View>
            </Row>
          </Grid>
        </ScrollView>
      </Image>
    );
  }
}

MovieDetailScreen.propTypes = {

};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    flexDirection: 'row',
    width: null,
    height: null,
    resizeMode: 'cover',
    backgroundColor: 'black'
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  text: {
    color: 'white'
  },
  img: {
    width: 100,
    height: 200,
    resizeMode: 'stretch'
  }
});

export default MovieDetailScreen;
