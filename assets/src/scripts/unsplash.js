export default async function unsplash(string) {
    const response = fetch (`https://api.unsplash.com/`);
    const data = (await response).json()
    
    return data
}



const token = {
client_id : 'vtb_vvIO30WyFcyoQOGtbAJAsu-gaJ5xU90E54zecWg',
client_secret : 'Ti547sLbodAZ51_8ZVEUqQmNhZCIadFolVBFEe69P90',
redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
code: 'code',
grant_type: '',

}

function authenticateUser (token) {

`https://unsplash.com/oauth/authorize
?client_id=${token.client_id}
&redirect_uri=${token.redirect_uri}
&response_type=${token.code}
&scope=public+read_user+write_user+read_photos+write_photos+write_likes+read_collections+write_collections`
}