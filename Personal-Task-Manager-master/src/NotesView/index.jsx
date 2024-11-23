import React, {useState, useEffect} from 'react'
import SearchBar from '../components/SearchBar';
import Form from '../components/Form';
import NoteItem from '../components/NoteItem';

const NotesView = () => {
    const [notes, setNotes] = useState([]);
    const [query, setQuery] = useState({});

    useEffect( () => {
    const fetchNotes = async () => {
      try {
        const queryParams = new URLSearchParams(query).toString()
        const response = await fetch(`http://localhost:5000/api/notes?${queryParams}`);
        const data = await response.json()
        setNotes(data)
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    fetchNotes()
  }, [query])

  const handleDelete = async (id) => {
    try {
        await fetch(`http://localhost:5000/api/notes/${id}`, {
            method: 'DELETE',
        });
        setNotes(prevNotes => prevNotes.filter(note => note._id !== id));
    } catch (error) {
        console.error('Error deleting note: ', error);
    }
  }

  const handleAdd = (newNote) => {
    setNotes( prevNotes => [...prevNotes, newNote])
  }

  const handleUpdate = (updatedNote) => {
    setNotes(prevNotes => prevNotes.map(
        note => (
            note._id === updatedNote._id ? updatedNote : note
        )))
  }

  return (
    <div>
        <SearchBar setQuery={setQuery} />
        <Form onAdd = {handleAdd} />
        <div>
            {
                notes.map(note => (
                    <NoteItem key= {note._id} note = {note} onDelete={handleDelete} onUpdate = {handleUpdate}/>
                ))
            }
        </div>
    </div>
  )
}

export default NotesView