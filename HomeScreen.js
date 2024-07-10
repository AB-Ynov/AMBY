import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Bienvenue sur le tableau de bord</Text>
      <Button
        title="Voir le profil"
        onPress={() => navigation.navigate('Profile')}
      />
      {/* Ajouter plus de contenu ici */}
    </View>
  );
}

export default HomeScreen;
