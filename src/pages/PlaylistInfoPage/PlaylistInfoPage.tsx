import { Link, useParams } from "react-router-dom";
import { PLAYLISTS } from "../../data";

import "./PlaylistInfoPage.css";


export function PlaylistInfoPage() {
    const { playlistId } = useParams();
    const playlist = PLAYLISTS[Number(playlistId)];

    if (!playlist || playlist.genre.includes('Non Music')) {
        return (
            <div className="playlist">
                <h2>PlaylistInfoPage</h2>
                <div>
                    <p>плейлиста с таким playlistId нет</p>
                </div>
            </div>
        )
    }

    return (
        <div className="playlist">
            <h2>PlaylistInfoPage</h2>

            <div className="info">
                <Link to={`/playlists?searchGenre=${playlist.genre.toLowerCase()}`}>
                    Жанр: <b>{playlist.genre}</b>
                </Link>
                <p>Название: <b>{playlist.name}</b></p>
            </div>
            <ul className="songs-list">
                {playlist.songs.map((song, index) => {
                    return (<li key={index}>
                        {song}
                    </li>)
                })}
            </ul>
        </div>
    )
}