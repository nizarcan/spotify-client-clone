const redirectURI = "http://localhost:3000/";


const apiScopes = [
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read"
]

const clientID = "43acd32bb046408bafc8cf06e2a20cbf";

export const authURL = "https://accounts.spotify.com/authorize";

export const loginURL = `${authURL}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${apiScopes.join("%20")}&response_type=token&show_dialog=true`;

export const tokenFromURL = () => {
    return window.location.hash.substring(1).split("&").reduce((init, item) => {
        let pair = item.split("=");
        init[pair[0]] = decodeURIComponent(pair[1]);

        return init;
    }, {});
}