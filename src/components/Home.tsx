import React from "react";
import styled from "styled-components";
import { accent, background } from "./colors";

// no type
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const StyledHome = styled.div`
  height: 100vh;
  background: ${background};
`;
const HomeHeader = styled.div`
  display: flex;
  padding: 16px;
  padding-bottom: 0px;
`;
const StyledNotesContainer = styled.div`
  padding: 14px;
`;

const StyledNote = styled.div`
  padding: 20px;
  margin: 6px;
  /* border: 1px solid ${accent}; */
  box-shadow: 0 0 2px 0.5px ${accent};
  background-color: ${background};
`;

const NoteTitle = styled.p`
  font-size: 2rem;
  /* opacity: 0.8; */
`;

const Title = styled.p`
  color: ${accent};
  font-size: 2rem;
  /* opacity: 0.8; */
`;

export default function Home() {
  return (
    <StyledHome>
      <HomeHeader>
        <Title>ethereal</Title>
      </HomeHeader>
      <Notes />
    </StyledHome>
  );
}

function Notes() {
  return (
    <StyledNotesContainer>
      <ResponsiveMasonry
        gutter={"5"}
        columnsCountBreakPoints={{ 300: 2, 700: 4, 1000: 5 }}
      >
        <Masonry>
          <Note />
          <Note />
        </Masonry>
      </ResponsiveMasonry>
    </StyledNotesContainer>
  );
}
function Note({ test }: { test?: boolean }) {
  return (
    <StyledNote>
      <NoteTitle>Title</NoteTitle>
      {test ? (
        <>
          <NoteTitle>Title</NoteTitle>
          <NoteTitle>Title</NoteTitle>
          <NoteTitle>Title</NoteTitle>
        </>
      ) : (
        <></>
      )}
    </StyledNote>
  );
}
