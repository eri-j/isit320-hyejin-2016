/**
 * New node file
 */

function designDocs(router, nano, dbName) {
    'use strict';

    var elfSessions = function(doc) {
        if (doc.type === 'connect-session') {
            emit(doc._id, doc);
        }
    };

    function createDesignDocument(designDocument, designName, response) {
        var nanoDb = nano.db.use(designName);
        nanoDb.insert(designDocument, designName, function(error, body) {
            if (!error) {
                console.log(body);
                response.send(body);
            } else {
                console.log('error: ' + error);
                response.send({
                    'Result': 'The document might already exist. ' + error
                });
            }
        });
    }

    router.get('/designDoc', function(request, response) {
        console.log('Design Doc Called');

        var designName = '_design/elf-session';
        var designDocument = {
            'views': {
                'elfSessions': {
                    'map': elfSessions
                }
            }
        };

        createDesignDocument(designDocument, designName, response);
    });

}

module.exports = designDocs;
