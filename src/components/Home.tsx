import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { accent, background } from "./colors";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
// no type
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { NoteProps, NotesProps, OpenedNoteProps, TempNote } from "../types";

const HomeHeader = styled.div`
  display: flex;
  padding: 16px;
  padding-bottom: 0px;
`;

const StyledNotesContainer = styled.div`
  padding: 14px;
`;

const Title = styled.p`
  color: ${accent};
  font-size: 2rem;
  /* opacity: 0.8; */
`;
const NoteTitle = motion(
  styled.p`
    font-size: 2rem;
    /* opacity: 0.8; */
  `
);
const NoteData = motion(
  styled.p`
    font-size: 1rem;
    opacity: 0.8;
  `
);
const StyledHome = motion(
  styled.div`
    height: 100vh;
    background: ${background};
  `
);

const StyledNote = motion(
  styled.div`
    padding: 20px;
    margin: 6px;
    border: 0.5px solid ${accent};
    /* box-shadow: 0 0 2px 0.5px black; */
    background-color: ${background};
  `
);

const StyledOpenedNote = motion(
  styled.div`
    height: 100vh;
    position: absolute;
    width: 100%;
    z-index: 10;
    background-color: ${background};
  `
);

export default function Home() {
  const [openedNote, setOpenedNote] = useState<TempNote>(null);

  return (
    <StyledHome>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {openedNote && <OpenedNotes {...{ openedNote, setOpenedNote }} />}
        </AnimatePresence>
        <HomeHeader>
          <Title>ethereal</Title>
        </HomeHeader>
        <Notes {...{ setOpenedNote, openedNote }} />
      </AnimateSharedLayout>
    </StyledHome>
  );
}

function Notes({ setOpenedNote, openedNote }: NotesProps) {
  return (
    <StyledNotesContainer>
      <ResponsiveMasonry
        gutter={"5"}
        columnsCountBreakPoints={{ 300: 2, 700: 4, 1000: 5 }}
      >
        <Masonry>
          <Note
            {...{
              setOpenedNote,
              openedNote,
              note: { title: "test title1", id: "1" },
            }}
          />
          <Note
            {...{
              setOpenedNote,
              openedNote,
              note: { title: "test title 2", id: "2" },
            }}
          />
          <Note
            {...{
              setOpenedNote,
              openedNote,
              note: {
                title: "test title 3",
                data: "this is test data",
                id: "3",
              },
            }}
          />
        </Masonry>
      </ResponsiveMasonry>
    </StyledNotesContainer>
  );
}

function Note({ note, setOpenedNote, openedNote }: NoteProps) {
  return (
    <StyledNote
      layoutId={note?.id}
      onTap={() => {
        setOpenedNote(note);
      }}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <NoteTitle layoutId={`${note?.id}-note-title`}>{note?.title}</NoteTitle>
      <NoteData layoutId={`${note?.id}-note-data`}>{note?.data}</NoteData>
    </StyledNote>
  );
}

function OpenedNotes({ openedNote, setOpenedNote }: OpenedNoteProps) {
  return (
    <StyledOpenedNote
      layout
      layoutId={openedNote?.id}
      onTap={() => setOpenedNote(null)}
    >
      <NoteTitle layoutId={`${openedNote?.id}-note-title`}>
        {openedNote?.title}
      </NoteTitle>
      <NoteData layoutId={`${openedNote?.id}-note-data`}>
        {openedNote?.data}
      </NoteData>
    </StyledOpenedNote>
  );
}
