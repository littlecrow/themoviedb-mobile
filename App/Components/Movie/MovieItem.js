import React from 'react';
import { ListItem } from 'react-native-elements';
import MovieListStyles from './Styles/MovieListStyles';

const MovieItem = () => {
  const { avatar, id, title, overview, movie, navigate } = this.props;

  return (
    <ListItem
      avatar={{ avatar }}
      avatarStyle={ MovieListStyles.avatar }
      key={ id }
      title={ title }
      subtitle={ overview }
      onPress={() => navigate('MovieDetailScreen', {
        movie: movie
      })}
    />
  );
};

export default MovieItem;
