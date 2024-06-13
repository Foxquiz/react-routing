import { Link, useSearchParams } from "react-router-dom";
import { PLAYLISTS } from "../../data";
import "./PlaylistsPage.css";
import { ChangeEvent } from "react";


export function PlaylistsPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        if (e.target.name === 'searchGenre') {
            setSearchParams({
                searchGenre: value.toLowerCase(),
                searchName: searchName
            });
        }
        if (e.target.name === 'searchName') {
            setSearchParams({
                searchGenre: searchGenre,
                searchName: value.toLowerCase()
            });
        }
    }

    const searchGenre = searchParams.get('searchGenre') || '';
    const searchName = searchParams.get('searchName') || '';

    const filteredPlaylists = PLAYLISTS.filter(({ genre, name }) => {
        return !genre.includes('Non Music') && genre.toLowerCase().includes(searchGenre) && name.toLowerCase().includes(searchName)
    }
    );

    return (
        <div className="playlistsPage">
            <h2>Playlists Page</h2>

            <form className="searchForm">
                <label>
                    введите жанр{' '}
                    <input type="text" name="searchGenre" value={searchGenre}
                        onChange={handleSearch}
                    />
                </label>
                <label>
                    введите название{' '}
                    <input type="text" name="searchName" value={searchName}
                        onChange={handleSearch} />
                </label>
            </form>

            <ul className="playlists">
                {filteredPlaylists.map(({ id, name }) => {
                    return (
                        <li key={id}>
                            <Link to={`/playlists/${id}`}>
                                {name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
