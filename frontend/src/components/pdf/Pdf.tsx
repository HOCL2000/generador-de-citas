import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { DataDay } from '@/types';

const styles = StyleSheet.create({
    page: {
      padding: 30,
      fontSize: 12,
      fontFamily: 'Helvetica',
    },
    header: {
     display: "flex", 
     alignItems: "center",
     justifyContent: "center",
     marginBottom: 20,
     textAlign: 'center',
     width: "100%"
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 5,
    },
    headerSubtitle: {
      fontSize: 14,
      color: '#666',
    },
    intro: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'justify',
      color: '#444',
    },
    section: {
      marginBottom: 20,
      padding: 15,
      border: '1px solid #ccc',
      borderRadius: 5,
      backgroundColor: '#ffffff',
    },
    greeting: {
      fontSize: 14,
      marginBottom: 10,
      fontWeight: 'bold',
      color: '#333',
    },
    details: {
      marginBottom: 5,
    },
    price: {
      marginTop: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    footer: {
      marginTop: 30,
      textAlign: 'center',
      fontSize: 10,
      color: '#888',
    },
    social: {
      marginTop: 15,
      fontSize: 12,
      textAlign: 'center',
      color: '#444',
    },
    socialHighlight: {
      fontWeight: 'bold',
      color: '#000',
    },
  });

export const PDF = ({ quotesByEmail }: { quotesByEmail: DataDay }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
            <Image src={"https://shop.laragazzariccia.com/cdn/shop/files/Logo_720.png?crop=center&height=200&v=1718376068&width=700"} style={{aspectRatio: "3/2", width: "90%", objectFit: "contain"}} />
        </View>

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Appuntamenti Programmati</Text>
          <Text style={styles.headerSubtitle}>Un riepilogo dei tuoi prossimi appuntamenti</Text>
        </View>

        <Text style={styles.intro}>
          Ciao Riccioluta! Ecco i dettagli dei tuoi prossimi appuntamenti. Per favore, controlla le informazioni e non
          esitare a contattarci se hai bisogno di modificare qualcosa o hai domande. A presto!
        </Text>

        <View key={quotesByEmail._id} style={styles.section}>
            <Text style={styles.greeting}>
                Ciao Riccioluta, hai questo appuntamento il giorno: {quotesByEmail.date}
            </Text>

            {quotesByEmail.disponibilidad.map((d) => (
                <View key={d.id} style={styles.details}>
                <Text style={styles.details}>Posizione: {quotesByEmail.location}</Text>
                <Text style={styles.details}>Ora: {d.hour}</Text>
                <Text style={styles.details}>Servizio: {d.typeService}</Text>
                <Text style={styles.details}>Totale: {d.totalPrice || '0'} €</Text>
                <Text style={styles.details}>Pagato: {d.pricePaid || '0'} €</Text>
                </View>
            ))}
        </View>

        <Text style={styles.footer}>
          Grazie per aver scelto i nostri servizi. Ti aspettiamo con un sorriso e il miglior servizio possibile!
        </Text>

        <Text style={styles.social}>
          Non dimenticare di visitare i nostri social!{' '}
          <Text style={styles.socialHighlight}>Instagram e Facebook</Text>. Seguici per restare sempre
          aggiornato/a!
        </Text>
      </Page>
    </Document>
  );
};
