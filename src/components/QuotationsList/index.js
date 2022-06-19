import React, { Fragment } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "./styles";
import QuotationItems from "./QuotationsItems";

export default function QuotationsList(props) {
  const daysQuery = props.filterDay;
  return (
    <Fragment>
      <View style={styles.filters}>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQuery(7)}
        >
          <Text style={styles.textestylo}>7D</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQuery(15)}
        >
          <Text style={styles.textestylo}>15</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQuery(30)}
        >
          <Text style={styles.textestylo}>1M</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQuery(90)}
        >
          <Text style={styles.textestylo}>3M</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQuery(180)}
        >
          <Text style={styles.textestylo}>6M</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.listQuotationBitcoins}>
        <FlatList
          data={props.listTransactions}
          renderItem={({ item }) => {
            return <QuotationItems valor={item.valor} data={item.data} />;
          }}
        />
      </ScrollView>
    </Fragment>
  );
}
