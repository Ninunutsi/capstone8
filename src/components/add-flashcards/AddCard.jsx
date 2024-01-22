import React, { useState } from "react";
import "./add.css";
import del from "../../assets/delete.png";
import edit from "../../assets/stylus.png";

const AddCard = () => {
  const [language, setLanguage] = useState("Georgian");
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [category, setCategory] = useState("General");
  const [flashcards, setFlashcards] = useState([]);
  const [editingCardId, setEditingCardId] = useState(null);
  const [visible, setVisible] = useState(false);

  const handleSave = () => {
    if (word && translation && category) {
      setVisible(false);
      if (editingCardId !== null) {
        const editedCard = {
          id: editingCardId,
          word,
          translation,
          category,
        };
        handleSaveEdited(editedCard);
      } else {
        const newFlashcard = {
          id: Date.now(),
          word,
          translation,
          category,
          isEditing: false,
        };
        setFlashcards((prevFlashcards) => [...prevFlashcards, newFlashcard]);

        setWord("");
        setTranslation("");
        setCategory("General");
        setEditingCardId(null);
      }
    } else {
      setVisible(true);
    }
  };
  const handleSaveEdited = (editedCard) => {
    setFlashcards((prevFlashcards) =>
      prevFlashcards.map((card) =>
        card.id === editedCard.id ? { ...editedCard, isEditing: false } : card
      )
    );
    setEditingCardId(null);
  };

  const handleDelete = (id) => {
    setFlashcards((prevFlashcards) =>
      prevFlashcards.filter((card) => card.id !== id)
    );
  };

  const handleEdit = (id) => {
    setEditingCardId(id);
    setFlashcards((prevFlashcards) =>
      prevFlashcards.map((card) =>
        card.id === id ? { ...card, isEditing: true } : card
      )
    );
  };

  const handleCancelEdit = (id) => {
    setEditingCardId(null);
    setFlashcards((prevFlashcards) =>
      prevFlashcards.map((card) =>
        card.id === id ? { ...card, isEditing: false } : card
      )
    );
  };

  return (
    <div className="flashcard-app">
      <div className="flashcard-form">
        <label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="select"
          >
            <option selected>Choose native language</option>
            <option value="georgian">Georgian</option>
            <option value="english">English</option>
          </select>
        </label>

        <div className="inputs">
          <label>
            <input
              placeholder="Enter your word"
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
          </label>

          <label>
            <input
              placeholder="add translation"
              type="text"
              value={translation}
              onChange={(e) => setTranslation(e.target.value)}
            />
          </label>
        </div>

        <label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select"
          >
            <option value="" selected>
              Choose a category
            </option>
            <option value="general">General</option>
            <option value="nature">Nature</option>
            <option value="sports">Sports</option>
            <option value="politics">Verbs</option>
            <option value="school">School</option>
          </select>
        </label>

        <button onClick={handleSave} className="save-btn">
          Save
        </button>
        {visible && <p className="alert">Please fill inputs.</p>}
      </div>

      <div className="flashcard-list">
        <h2 className="recently-added">Recently added</h2>
        {flashcards.map((card) => (
          <div key={card.id} className="card-display-flashcard">
            {card.isEditing ? (
              <div className="card-display">
                <input
                  type="text"
                  value={card.word}
                  onChange={(e) =>
                    setFlashcards((prevFlashcards) =>
                      prevFlashcards.map((c) =>
                        c.id === card.id ? { ...c, word: e.target.value } : c
                      )
                    )
                  }
                />
                <input
                  type="text"
                  value={card.translation}
                  onChange={(e) =>
                    setFlashcards((prevFlashcards) =>
                      prevFlashcards.map((c) =>
                        c.id === card.id
                          ? { ...c, translation: e.target.value }
                          : c
                      )
                    )
                  }
                />
                <div className="del-edit-btn">
                  <button
                    onClick={() => handleSaveEdited(card)}
                    className="save"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => handleCancelEdit(card.id)}
                    className="cancel"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="card-display">
                <p className="word">{card.word}</p>
                <p className="word">{card.translation}</p>
                <div className="del-edit-btn">
                  <button onClick={() => handleDelete(card.id)}>
                    <img src={del} alt="" />
                  </button>
                  <button onClick={() => handleEdit(card.id)}>
                    <img src={edit} alt="" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddCard;
