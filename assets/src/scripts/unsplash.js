export default async function unsplash(string) {
    console.log('UNSPLASH!')
    const response = await fetch (`https://api.unsplash.com/search/photos?query=${string}&client_id=${token.client_id}`);
    // https://api.unsplash.com/search/photos?query=sunny&client_id=vtb_vvIO30WyFcyoQOGtbAJAsu-gaJ5xU90E54zecWg
    if (!response.ok) {
        throw new Error('Could not fetch data');
    } else {
        // console.log(response);
        const data = await response.json();
        console.log(data.results[0].urls.regular);
        const imgUrl = data.results[0].urls.regular;
        return imgUrl;
    }
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