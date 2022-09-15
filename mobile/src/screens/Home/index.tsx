import { View, Image, FlatList } from 'react-native';


import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png'
import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { GAMES } from '../../utils/games';


export function Home() {
  return (
    <View style={styles.container}>
      <Image 
        source={logoImg}
        style={styles.logo}
      />
      <Heading 
        title="Encontre seu duo!"
        subTitle="Selecione o game que deseja jogar..."
      />
      <FlatList 
        contentContainerStyle={styles.contentList}
        data={GAMES}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <GameCard 
          data={item}
        />
      )}
      />
    </View>
  );
}