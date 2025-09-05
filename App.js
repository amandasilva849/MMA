import React, { useState} from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Alert } from 'react-native';
export default function App() {
  const [pagina, setPagina] = useState('home');

  return (
    <SafeAreaView style={styles.container}>
    <Header pagina={pagina} setPagina={setPagina} />
    <ScrollView contentContainerStyle={styles.content}>
    {pagina === 'home' && <Home />}
    {pagina === 'sobre' && <Sobre />}
    {pagina === 'servicos' && <Servicos />}
    {pagina === 'contato' && <Contato />}
    </ScrollView>
    <Footer />
</SafeAreaView>
 );
}

function Header({pagina, setPagina })  {  
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}> MMA </Text>
    <View style={styles.nav}>
{['home', 'sobre', 'servicos', 'contato'].map((p) => (
  <TouchableOpacity
   key={p} 
   style={[styles.navButton, pagina === p && styles.navButtonActive]}  
    onPress={() => setPagina(p)}>
    <Text style={styles.navButtonText}>{p.charAt(0).toUpperCase() + p.slice(1)}</Text>
  </TouchableOpacity>
   ))}
      </View>
    </View>
  );
}

function Home() {
  return (
    <View style={styles.section}>
     <Text style={styles.sectionTitle}> Bem vindo a MMA!</Text>
      <Text> Na MMA somos líderes em computadores tecnológicos 
        criados para impulsionar o seu negócio.
         Unimos inovação, performance e um design
          moderno para entregar soluções que acompanham o ritmo do futuro.
         Aqui, tecnologia é mais
          do que ferramenta: 
          é o motor das suas conquistas!</Text>
    </View>
  );
}

function Sobre() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}> sobre nós </Text>
      <Text>Fundada em 2025, a MMA surgiu com a missão
         de simplificar a tecnologia e torná-la acessível,
          prática e cheia de estilo.
         Somos uma empresa jovem, mas com grandes ideias:
         criar computadores potentes,
          modernos e prontos para qualquer desafio
           seja no game, no trabalho ou no dia a dia.
        Aqui, acreditamos que tecnologia não é só ferramenta, é parte da vida.
       Por isso, cada projeto da MMA
       é pensado para entregar velocidade, inovação e experiência única. 
       Estamos só começando, mas já com os olhos no futuro.</Text>
    </View>
  );
}

function Servicos() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}> nossos serviços </Text>
      <Text>- Consultoria</Text>
      <Text>- Vendas</Text>
      <Text>- Suporte técnico</Text>
    </View>
  );
}

function Contato() {
  const[nome, setNome] = React.useState('');
  const[email, setEmail] = React.useState('');
  const[mensagem, setMensagem] = React.useState('');
 
  function enviar() {
    if (!nome || !email || !mensagem) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
      }
    Alert.alert('Mensagem Enviada', `Obrigado, ${nome}.! Retornaremos em breve.`);
    setNome('');
    setEmail('');
    setMensagem('');
  }
  return (
    <View style={styles.section}>
      <Text style={styles.title}> Contato </Text>
      <TextInput 
       style={styles.input}
       placeholder='Nome' 
        value={nome} 
        onChangeText={setNome} 
        />
      <TextInput 
        style={styles.input}
        placeholder='Email' 
        value={email} 
        onChangeText={setEmail} 
        keyboardType='email-address'
        />
      <TextInput 
        style={[styles.input, {height: 100}]}
        placeholder='Mensagem' 
        value={mensagem} 
        onChangeText={setMensagem} 
        multiline
        />
        <TouchableOpacity style={styles.button} onPress={enviar}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        </View>
        );
}

function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={{color: 'white' }}> MMA © 2025. Todos os direitos reservados.</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {flex: 1, backgroundColor: '#f4f7fa' },
  header: {backgroundColor: '#004080', padding: 15}, 
  headerTitle: {color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  nav: { flexDirection: 'row', justifyContent: 'space-around' },
  navButton: {paddingVertical: 8, paddingHorizontal: 12, borderRadius: 4 },
  navButtonActive: {backgroundColor: '#0066cc', },
  navButtonText: {color: 'white', fontWeight: 'bold' },
  content: {padding: 20, flexGrow: 1, },
  section: {marginBottom: 20 },  
  title: {fontSize: 20, fontWeight: 'bold', marginBottom: 10 }, 
  input: {
    backgroundColor:'white', 
    borderColor: '#ccc', 
    borderWidth: 1, 
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
    marginBottom: 15,
   }, 
   button:{
    backgroundColor: '#004080',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
   },
   buttonText: {color: 'white', fontWeight: 'bold', fontSize: 16 },
   footer: {backgroundColor: '#00264d', padding: 15, alignItems: 'center' },
});

  

  
  
  


  