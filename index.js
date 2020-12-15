const http = require('http');
const port = 8000;
const fs = require('fs');

// function requestHandler(req, res) {
//     console.log(req.url);
//     //In the header you tell what is coming on, What kind of content is coming on and any additional hidden
//     //information that you need to send from the server to the browser.
//     res.writeHead(200, {'contentType': 'text/html'});
//     fs.readFile('./index.html', function(err, data) {
//         if(err) {
//             console.log('error', err);
//             return res.end('<h1>error</h1>');
//         }
//         // send response
//         return res.end(data);
//     });

//     // res.end('<h1>Gotcha!</h1>');
// }

//Extending to multiple pages
function requestHandler(req, res) {
    console.log(req.url);
    res.writeHead(200, {'contentType': 'text/html'});
    
    let  filePath;

    switch(req.url) {
        case '/':
            filePath = './index.html';
            break;
        case '/profile':
            filePath = './profile.html';
            break;
        default:
            filePath = './404.html';
    }

    fs.readFile(filePath, function(err, data) {
        if(err) {
            console.log('error', err);
            return res.end('<h1>Error!');
        }
        return res.end(data);

    });
}

const server = http.createServer(requestHandler);

server.listen(port, function(err) {
    if(err) {
        console.log(err);
        return;
    }

    console.log("Server is up and running on port: ", port);
});
/*
    
*/