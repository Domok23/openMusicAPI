// mapDBToModel
const getSongs = ({
  id,
  title,
  performer,
}) => ({
  id,
  title,
  performer,
});

const getSongById = ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  album_id,
}) => ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  albumId: album_id,
});

module.exports = { getSongs, getSongById };
