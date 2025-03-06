import React from "react";
import { useLocation } from "react-router-dom";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

// Styles for the PDF document
const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12 },
  section: { marginBottom: 10 },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  text: { marginBottom: 5 },
});

// PDF document component
const MyDocument = ({ letterContent }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{letterContent}</Text>
      </View>
    </Page>
  </Document>
);

// Download component
export const DownloadLetter = ({ letter }) => {
  return (
    // <div className="min-h-screen flex flex-col items-center justify-center bg-gray-700 p-4">
    <div className="bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full border border-gray-700 text-center">
      <h1 className="text-3xl font-bold text-purple-400 mb-4">
        Download Your Letter
      </h1>
      <PDFDownloadLink
        document={<MyDocument letterContent={letter} />}
        fileName="formal_letter.pdf"
      >
        {({ loading }) => (
          <button
            className={`w-full ${
              loading ? "bg-gray-500" : "bg-purple-600 hover:bg-purple-700"
            } text-white font-medium py-2 rounded-lg`}
          >
            {loading ? "Generating..." : "Download PDF"}
          </button>
        )}
      </PDFDownloadLink>
    </div>
    // </div>
  );
};

// Downloads page component
export default function Downloads() {
  const { state } = useLocation();
  // Retrieve the letter data passed via navigation state.
  // Adjust "letterContent" if your JSON response uses a different property.
  const { letterData } = state || {};
  const letterContent =
    letterData && letterData.letterContent
      ? letterData.letterContent
      : "No letter data found.";

  return <DownloadLetter letter={letterContent} />;
}
