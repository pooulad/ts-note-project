import { NoteData } from "../types/Note"
import {v4 as uuidV4} from "uuid"

export function OnCreateNote({ tags, ...data }: NoteData,setNotes) {
    setNotes(prevNotes => {
      return [
        ...prevNotes,
        { ...data, id: uuidV4(), tagIds: tags.map(tag => tag.id) },
      ]
    })
  }
