export type TempNote = Partial<note | null>;
export interface note {
  id: string;
  title: string;
  data: string;
  created_at: string;
}
export interface NotesProps {
  setOpenedNote: React.Dispatch<React.SetStateAction<TempNote>>;
  openedNote: TempNote;
}

export interface NoteProps {
  note: TempNote;
  setOpenedNote: React.Dispatch<React.SetStateAction<TempNote>>;
  openedNote: TempNote;
}

export interface OpenedNoteProps {
  setOpenedNote: React.Dispatch<React.SetStateAction<TempNote>>;
  openedNote: TempNote;
}
