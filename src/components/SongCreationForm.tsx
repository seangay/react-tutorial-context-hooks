import React, {useState} from 'react';

type Props = {
  addSong: (title: string) => void
};
export const SongCreationForm = (props: Props) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("SUBMITTED", title, e.target);
    props.addSong(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="songName">Song name:</label>
      <input onChange={(e) => {
        setTitle(e.target.value)
      }} id="songName" type="text" value={title} required/>
      <button type="submit">Add song</button>
    </form>
  );
};
