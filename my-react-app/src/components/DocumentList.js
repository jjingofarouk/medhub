import React, { useEffect, useState } from 'react';
import axios from 'axios'; // For fetching document data

function DocumentList() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // Fetch document data from the API
    axios.get('/api/documents')
      .then(response => {
        setDocuments(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the documents!', error);
      });
  }, []);

  return (
    <ul>
      {documents.map(document => (
        <li key={document.id}>
          <h2>{document.title}</h2>
          <p>{document.description}</p>
          <a href={`/api/download-document/${document.id}`}>Download</a>
          <p>Uploaded by {document.user.username} on {new Date(document.uploaded_at).toLocaleString()}</p>
        </li>
      ))}
    </ul>
  );
}

export default DocumentList;
