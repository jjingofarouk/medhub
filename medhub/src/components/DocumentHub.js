import React, { useEffect, useState } from 'react';
import axios from 'axios'; // For fetching document data

function DocumentList() {
  const [documents, setDocuments] = useState([]);
  const [filteredDocuments, setFilteredDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of documents per page

  useEffect(() => {
    // Fetch document data from the API
    axios.get('/api/documents')
      .then(response => {
        setDocuments(response.data);
        setFilteredDocuments(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the documents!', error);
        setError('Failed to load documents.');
        setLoading(false);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterDocuments(e.target.value);
  };

  const filterDocuments = (term) => {
    if (term) {
      const filtered = documents.filter(doc =>
        doc.title.toLowerCase().includes(term.toLowerCase()) ||
        doc.description.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredDocuments(filtered);
    } else {
      setFilteredDocuments(documents);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination logic
  const indexOfLastDocument = currentPage * itemsPerPage;
  const indexOfFirstDocument = indexOfLastDocument - itemsPerPage;
  const currentDocuments = filteredDocuments.slice(indexOfFirstDocument, indexOfLastDocument);

  return (
    <div className="container">
      <h1>Document List</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search documents..."
        />
      </div>

      <ul className="document-list">
        {currentDocuments.length > 0 ? (
          currentDocuments.map(document => (
            <li key={document.id} className="document-item">
              <h2>{document.title}</h2>
              <p>{document.description}</p>
              <a href={`/api/download-document/${document.id}`} className="btn btn-primary" 
                 onClick={(e) => {
                   if (!window.confirm('Do you really want to download this document?')) {
                     e.preventDefault();
                   }
                 }}>
                Download
              </a>
              <p className="metadata">Uploaded by {document.user.username} on {new Date(document.uploaded_at).toLocaleString()}</p>
            </li>
          ))
        ) : (
          <p>No documents found.</p>
        )}
      </ul>

      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredDocuments.length / itemsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DocumentList;
