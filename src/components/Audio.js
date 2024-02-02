"use client";

const Audio = ({ audio }) => {
  return (
    <div>
      <audio controls>
        <source src={audio} />
      </audio>
    </div>
  );
};

export default Audio;
