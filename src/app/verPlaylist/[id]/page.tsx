"use client";

import { useEffect, useState } from "react";
import { PlaylistData } from "../../../components/PlaylistData";

export default function VerPlaylist() {
    const [id, setId] = useState('');

    useEffect(() => {
        const pathParts = window.location.pathname.split('/');
        const playlistId = pathParts[pathParts.length - 1];

        setId(playlistId);
    }, []);

    return (
        <div>
            <PlaylistData id={id} />
        </div>
    );
}