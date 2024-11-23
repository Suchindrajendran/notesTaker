import React, {useState} from 'react'
import './nodeItem.css'

const NoteItem = ({note, onDelete, onUpdate}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(note.title);
    const [description, setDescription] = useState(note.description);
    const [category, setCategory] = useState(note.category);

    const handleUpdate = async () => {
        const updatedNote = {title, description, category};
        try {
            const response = await fetch(`http://localhost:5000/api/notes/${note._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedNote)
            });
            const data = await response.json();
            onUpdate(data);
            setIsEditing(false);
            } catch (error) {
                console.error("Error updating note: ", error);
            }
        }
    

    return (
        <div className='item-container'>
            {
                isEditing ? (
                    <div> 
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} ></textarea> 
                        <select value={category} onChange={(e) => setCategory(e.target.value)} > 
                            <option value="Work">Work</option> 
                            <option value="Personal">Personal</option> 
                            <option value="Others">Others</option> 
                        </select> 
                        <button onClick={handleUpdate}>Update</button> 
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                ) : (
                    <div> 
                        <h2>{note.title}</h2> 
                        <p>{note.description}</p> 
                        <p><strong>Category:</strong> {note.category}</p> 
                        <button onClick={() => setIsEditing(true)}>Edit</button> 
                        <button onClick={() => onDelete(note._id)}>Delete</button>
                    </div>
                )
            }
        </div>
    )
}

export default NoteItem