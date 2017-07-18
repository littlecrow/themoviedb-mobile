import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';
import { Modal, View, FlatList, AsyncStorage } from 'react-native';
import languages from '../../Fixtures/languages';
import { Colors } from '../../Themes';
import { LANGUAGE } from 'react-native-dotenv';
import { connect } from 'react-redux';
import { MoviesActionCreators } from '../../Redux/Movies';
import styles from './Styles/SettingScreenStyles';

let lang = languages[0];

class LanguagePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      lang
    };

    this._setModalVisible = this._setModalVisible.bind(this);
    this._setLanguage = this._setLanguage.bind(this);
    this._getLanguage = this._getLanguage.bind(this);
    this._renderPicker = this._renderPicker.bind(this);
    this._renderLanguageItem = this._renderLanguageItem.bind(this);
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  async _setLanguage(lang) {
    try {
      await AsyncStorage.setItem("SEARCH_LANGUAGE", lang.code);
      this.props.emptyMovies();
      this.setState({lang});
    }
    catch (err) {
      console.error(err);
    }
  }

  async _getLanguage() {
    try {
      const lang = await AsyncStorage.getItem("SEARCH_LANGUAGE") || LANGUAGE;
      const language = languages.filter((item) => item.code == lang)[0];
      this.setState({lang: language});
      return lang;
    }
    catch (err) {
      console.error(err);
      return null;
    }
  }

  _renderLanguageItem({item, index}) {
    let onPress = () => {
      this._setModalVisible(false);
      this._setLanguage(languages[index]);
    };
    let rightIcon = {
      name: 'chevron-right'
    };
    if (item.code === this.state.lang.code) {
      rightIcon = {
        name: 'check-circle',
        type: 'material-community',
        color: Colors.primary
      };
      onPress = null;
    }
    return (
      <ListItem
        title={item.name}
        underlayColor={Colors.secondaryDark}
        rightIcon={rightIcon}
        onPress={onPress}/>
    );
  }

  _renderPicker() {
    return (
      <Modal
        animationType={"slide"}
        visible={this.state.modalVisible}
        transparent={false}
        onRequestClose={() => this._setModalVisible(false)}>
        <View style={styles.modal}>
          <FlatList
            data={languages}
            renderItem={this._renderLanguageItem}
            keyExtractor={(item, index) => index}/>
        </View>
      </Modal>
    );
  }

  componentDidMount() {
    this._getLanguage();
  }

  render() {
    const icon = {
      name: 'search',
      type: 'evil'
    };
    return (
      <View>
        {this._renderPicker()}
        <ListItem
          title={'Search Language'}
          rightTitle={this.state.lang.nativeName}
          leftIcon={icon}
          onPress={() => this._setModalVisible(true)}/>
      </View>
    );
  }
}

LanguagePicker.propTypes = {
  emptyMovies: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    emptyMovies: () => dispatch(MoviesActionCreators.emptyMovies())
  };
};

export default connect(undefined, mapDispatchToProps)(LanguagePicker);
