import { MultiValue } from "react-select";
import { NoteData, Tag } from "../types/Note";

export function NoteSelectBoxHandler(
  e: MultiValue<Tag>,
  setFormData: React.Dispatch<React.SetStateAction<NoteData>>,
  inputName: string
) {
  setFormData((oldState: NoteData) => ({
    ...oldState,
    [inputName]: e,
  }));
}
export function NoteNormalOnChange(
  e:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>,
  setFormData: React.Dispatch<React.SetStateAction<NoteData>>
) {
  setFormData((oldState: NoteData) => ({
    ...oldState,
    [e.target.name]: e.target.value,
  }));
}
